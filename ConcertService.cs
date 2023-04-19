using Sabio.Data.Providers;
using Sabio.Models.Domain.Friends;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sabio.Models.Domain.Concerts;
using Sabio.Models.Requests.Concerts;
using Sabio.Data;
using Sabio.Models.Requests.Friends;
using System.Data.SqlClient;

namespace Sabio.Services
{
    public class ConcertService
    {
        IDataProvider _data = null;

        #region Constructor
        public ConcertService(IDataProvider data)
        {
            // a constructor does not return, it is used to construct or create an instance of this CLASS (ADDRESS)
            _data = data;
        }
        #endregion
        public Concert GetById(int id)
        {
            string procName = "[dbo].[Concerts_SelectById]";

            Concert concert = null;

            _data.ExecuteCmd(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@Id", id);
            },
            delegate (IDataReader reader, short set) // for single record mapper, maps c# to SQL
            {

                concert = SingleConcertMapper(reader);

            }
            );

            return concert;
        }
        public int Add(ConcertAddRequest model)
        {
            int id = 0;

            string procName = "[dbo].[Concerts_Insert]";
            _data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                AddCommonParams(model, col);

                // and ONE output

                SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);
                idOut.Direction = ParameterDirection.Output;

                col.Add(idOut);
            },
            returnParameters: delegate (SqlParameterCollection returnCollection)
            {
                object oId = returnCollection["@Id"].Value;
                Console.Write("");
                Int32.TryParse(oId.ToString(), out id);
            });
            return id;
        }


        public void Update(ConcertUpdateRequest model)
        {
            string procName = "[dbo].[Concerts_Update]";
            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    col.AddWithValue("@Id", model.Id);
                    AddCommonParams(model, col);

                    // and ONE output


                },
            returnParameters: null);
        }

        public List<Concert> GetAll()
        {
            List<Concert> list = null;

            string procName = "[dbo].[Concerts_SelectAll]";

            _data.ExecuteCmd(procName, inputParamMapper: null
             , singleRecordMapper: delegate (IDataReader reader, short set) // single record mapper 
             {
                 // oneShape -> secondShape
                 // reader from DB >>>> Address

                 Concert aConcert = SingleConcertMapper(reader);

                 if (list == null)
                 {
                     list = new List<Concert>();
                 }

                 list.Add(aConcert);
             });

            return list;
        }

        public void Delete(int id)
        {
            string procName = "[dbo].[Concerts_Delete]";

            _data.ExecuteNonQuery(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@Id", id);
            }, returnParameters: null
            );
        }
        private static Concert SingleConcertMapper(IDataReader reader)
        {
            Concert aConcert = new Concert();

            int startingIndex = 0;
            aConcert.Name = reader.GetSafeString(startingIndex++);
            aConcert.Description = reader.GetSafeString(startingIndex++);
            aConcert.IsFree = reader.GetSafeBool(startingIndex++);
            aConcert.Address = reader.GetSafeString(startingIndex++);
            aConcert.Cost = reader.GetSafeInt32(startingIndex++);
            aConcert.DateOfEvent = reader.GetSafeDateTime(startingIndex++);
            return aConcert;
        }
        private static void AddCommonParams(ConcertAddRequest model, SqlParameterCollection col)
        {
            col.AddWithValue("@Name", model.Name);
            col.AddWithValue("@Description", model.Description);
            col.AddWithValue("@IsFree", model.IsFree);
            col.AddWithValue("@Address", model.Address);
            col.AddWithValue("@Cost", model.Cost);
            col.AddWithValue("@DateOfEvent", model.DateOfEvent);
        }
    }
}
