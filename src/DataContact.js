import axios from "axios";
import API_KEY from "./credentials";


const url='https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
const config = {
    headers: {
        "Api-Token": `${API_KEY}`,
        "Accept": "application/json"
    }

}
async function FetchPost() {
    try {
        this.state = {
            // isLoading: true,
            users: [],
            error: null
          };
        this.setState = ({...this.state});
        const data = await axios.get(
            url, config
        );
        this.setState({users: data.contacts})
    } catch(error) {
        alert(error.message);
        this.setState({...this.state})
    }

}

// FetchPost();

export default FetchPost;