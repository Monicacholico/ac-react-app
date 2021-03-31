import React, {Component} from 'react';
import Contact from './Contact';
import './App.css';


class Table extends Component {
    state = {
        contacts: {},
        tags: {},
        deals: {},
        location: {},
        totalValue: {}
    }
    render() {
        // const listOfContacts = Execute();
        // console.log(listOfContacts);
        return (
            <section className="section">
                <h2 className="lavender">Here goes the Table!</h2>
                <table className="legend">
                    <thead>
                        <tr className="ac_lists-subheaders">
                        <th className="table-cell text_left">Contact</th>
                        <th className="table-cell text_left">Total Value</th>
                        <th className="table-cell text_left">Location</th>
                        <th className="table-cell text_left">Deals</th>
                        <th className="table-cell text_left">Tags</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr className="table-row">
                    {/* <td className="name td-underline">{contact}</td> */}
                    <Contact/>
                    <td className="">$89,324</td>
                    <td className="">Chicago, Il, USA</td>
                    <td className="">2</td>
                    <td className="">customer, new-deals</td>
                    </tr>
                    <tr className="table-row">
                    <td className="name td-underline">John Doe</td>
                    <td className="">$89,324</td>
                    <td className="">Chicago, Il, USA</td>
                    <td className="">2</td>
                    <td className="">customer, new-deals</td>
                    </tr>
                    <tr className="table-row">
                    <td className="name td-underline">John Doe</td>
                    <td className="">$89,324</td>
                    <td className="">Chicago, Il, USA</td>
                    <td className="">2</td>
                    <td className="">customer, new-deals</td>
                    </tr>
                    <tr className="table-row">
                    <td className="name td-underline">John Doe</td>
                    <td className="">$89,324</td>
                    <td className="">Chicago, Il, USA</td>
                    <td className="">2</td>
                    <td className="">customer, new-deals</td>
                    </tr>
                </tbody>
                </table>
            </section>
        )
    }
}

export default Table;