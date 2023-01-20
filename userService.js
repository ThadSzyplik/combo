import axios from "axios";



var loginEndpoint = "https://api.remotebootcamp.dev/api/users/login";
var addUserEndpoint = "https://api.remotebootcamp.dev/api/users/register";
var currentUserEndpoint = "https://api.remotebootcamp.dev/api/users/current";
/*
ADDING USERS TO DOM
*/

let addUser = (payload) => {
    console.log("adding user", payload)

    const config = {
        method: "POST",
                url: addUserEndpoint,
                data: payload,
                crossdomain: true,
                headers: { "Content-Type": "application/json" }

    }
    return axios(config)
        /* .then((response) => {
            console.log(response.data.item, payload);
            return ({id:response.data.item,...payload})
        }) */
}

let loginUser = (payload) => {
    console.log("Logging in user", payload)

    const config = {
        method: "POST",
        url: loginEndpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
};
        return axios(config)
//         .then(function(response){
//         console.log(response)
//         return {
                            
//             id:id,...payload
                           
//     }
// });

}
let getCurrentUser = () => {
    console.log("getting current user")
    const config = {
                method: "GET",
                url: currentUserEndpoint,
                // data: id,
                crossdomain: true,
                headers: { "Content-Type": "application/json" }
            };
            return axios(config)
            // .then(function(response){
            //     console.log(response)
            //     return {
                    
            //        id:id
                   
            //     }
            // });
}

const userService = { addUser, loginUser, getCurrentUser }
export default userService;




// export { changeUserInfo }

