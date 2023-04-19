using System.IO;
using System.Threading.Tasks;

public class AudioStorageService
{
    private readonly CloudBlobContainer _blobContainer;

    public AudioStorageService(string connectionString, string containerName)
    {
        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
        CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
        _blobContainer = blobClient.GetContainerReference(containerName);
    }

    public async Task<string> StoreAudioFile(Stream audioStream, string fileName)
    {
        CloudBlockBlob blockBlob = _blobContainer.GetBlockBlobReference(fileName);
        await blockBlob.UploadFromStreamAsync(audioStream);
        return blockBlob.Uri.ToString();
    }

    public async Task<Stream> RetrieveAudioFile(string fileName)
    {
        CloudBlockBlob blockBlob = _blobContainer.GetBlockBlobReference(fileName);
        MemoryStream memoryStream = new MemoryStream();
        await blockBlob.DownloadToStreamAsync(memoryStream);
        memoryStream.Seek(0, SeekOrigin.Begin);
        return memoryStream;
    }
}