import React, {Component} from 'react';
<<<<<<< HEAD
import Execute from './api';

=======
import Tr from './Tr';
import Contact from './Contact';
import Deal from './Deal';
import Tag from './Tag';
import Location from './Location';
import TotalValue from './TotalValue';
import './App.css';
>>>>>>> 2d4eec7da1c2cca8a6ab78d1189c0b210cc181a4


class Table extends Component {
    render() {
        const listOfData = Execute();
        return (
<<<<<<< HEAD
            <section>
                <h2 className="lavender">Here goes the Table!</h2>
                {console.log(listOfData)}
=======
            <section className="section">
                <table className="legend">
                    <thead>
                        <tr className="ac_lists-subheaders">
                        <th className="table-cell text_left">Contact</th>
                        <th className="table-cell text_left">Total Value</th>
                        <th className="table-cell text_left">Deals</th>
                        <th className="table-cell text_left">Tags</th>
                        {/* <th className="table-cell text_left">Location</th> */}
                        </tr>
                    </thead>
                <tbody>
                    {/* <tr className="table-row">
                        <td className="table-cell name text_underline"><Contact/></td>
                        <td className=""><TotalValue/></td>
                        <td className=""><Deal/></td>
                        <td className=""><Tag/></td>
                        <td className=""><Location/></td>
                    </tr> */}
                    <Tr/>
                </tbody>
                </table>
>>>>>>> 2d4eec7da1c2cca8a6ab78d1189c0b210cc181a4
            </section>
        )
    }
}

export default Table;