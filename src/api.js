import axios from "axios";
import API_KEY from "./credentials";


<<<<<<< HEAD
const url='https://usaa1617144725.activehosted.com/api/3';
const config = {
    headers: {
        "Api-Token": `${API_KEY}`,
        "Accept": "application/json"
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Content-Type",
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS"

    }

}
async function FetchPost() {
    try {
        const response = await axios.get(
            url, config
        );
        console.log(response);
    } catch(error) {
        alert(error.message);
        console.log(error.message);
    }

}

FetchPost();

=======
// const url='https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
// const config = {
//     headers: {
//         "Api-Token": `${API_KEY}`,
//         "Content-Type": "application/json"
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Headers": "Content-Type",
//         // "Access-Control-Allow-Methods": "POST, GET, OPTIONS"

//     }

// }
// async function FetchPost() {
//     try {
//         const response = await axios.get(
//             url, config
//         );
//         console.log(response);
//     } catch(error) {
//         alert(error.message);
//         console.log(error.message);
//     }

// }

// FetchPost();
>>>>>>> 2d4eec7da1c2cca8a6ab78d1189c0b210cc181a4



// function Execute() {
//   const url = 'https://sahmed93846.activehosted.com/api/3/contacts?status=-1&orders[email]=ASC';
//   const options = {
//       method: "GET",
//       headers: {
//           "Api-Token": `${API_KEY}`,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Headers": "Content-Type",
//           "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
//       }
//   };
//   return fetch(url, options).then(
//       response => {
//           return response.json();
//       })
//       .then(data => {
//           console.log(data.results);
//       })

// }

// Execute();

export default FetchPost;
