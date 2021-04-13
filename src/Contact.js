import React, {Component} from 'react';
import "./App.css"
import API_KEY from "./credentials";

class Contact extends Component {
  constructor(props) {
    super(props);
    // this.sorter();
  }
    state = {
      isLoading: true,
      users: [],
      error: null
    };

    fetchUsers() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
    const options = {
        method: 'GET',
        headers: {
            "Api-Token": `${API_KEY}`,
            "Accept": "application/json"
            }
        };
      return fetch(url, options)
        .then(response => response.json())
        .then(data => this.setState({
            users: data.contacts,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.fetchUsers();
    }

    sorter = () => {
     this.fetchUsers();
     const sortingUsers = users.sort((a,b) => a > b ? 1 : -1)
     return sortingUsers;
    }

    render() {
      const { isLoading, users, error } = this.state;
      console.log(users);
      const sortingUsers = <button onClick={this.sorter}></button>
      return (
        <React.Fragment>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map(user => {
              const { firstName, lastName } = user;
              return (
                <div>
                  {sortingUsers}
                <td className="table-cell name">
                  <p>{firstName} {lastName}</p>
                </td>
                </div>
              );
            })
          ) : (
              <td><p>Loading ...</p></td>
          )}
          {
       }
        </React.Fragment>
      );
    }
  }

export default Contact;
