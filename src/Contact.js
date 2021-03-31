import React, {Component} from 'react';
import API_KEY from "./credentials";

const execute = () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
    const options = {
        method: 'GET',
        headers: {
            "Api-Token": `${API_KEY}`,
            "Accept": "application/json"
        }
    };
    return fetch(url, options).then(
        response => {
            return response.json();
        })
        .then(data => {
            console.log(data.contacts);
            return data.contacts;
          //   console.log(listOfContacts);
            // for(let contact of listOfContacts){
              
            //   console.log(contact.firstName + contact.lastName);
            // }
        })
  
  }


class Contact extends Component {
    render() {
        const data = execute();
        console.log(data);
        // for(const contact of data) {
        //     console.log(contact.firstName);
        // }
        // let fullName = data.map( contact => contact.firstName)
        // console.log(fullName);
        // this.execute();
        // const contactData = this.execute();
        // const {firstName, lastName} = this.props.data.contacts;
        // console.log(firstName)
        // console.log(contactData);
        return(
            <td>This is a cell!</td>
        )
    }
}





// const contactsData = Execute();
// console.log(contactsData);

export default Contact;




