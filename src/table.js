import React, {Component} from 'react';
import Contact from './Contact';
import TotalValue from './TotalValue';
import Deal from './Deal';
import Location from './Location';
import Tag from './Tag';
import './App.css';


class Table extends Component {
    render() {
        let numberWithCommas = function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };
        return (
            <section className="section">
                <table className="legend">
                    <thead>
                        <tr className="ac_lists-subheaders">
                        <th className="table-cell text_left">Contact</th>
                        <th className="table-cell text_left">Total Value</th>
                        <th className="table-cell text_left">Deals</th>
                        <th className="table-cell text_left">Tags</th>
                        <th className="table-cell text_left">Location</th>
                        </tr>
                    </thead>
                <tbody>
                    {/* <tr className="table-row">
                        <td className="table-cell"><Contact/></td>
                        <td className=""><TotalValue/></td>
                        <td className=""><Deal/></td>
                        <td className=""><Tag/></td>
                        <td className=""><Location/></td>
                    </tr> */}
                    <tr className="table-row">
                        <td className="table-cell">John Doe</td>
                        <td className="">{numberWithCommas(1000)}</td>
                        <td className="">2</td>
                        <td className="">new-customer</td>
                        <td className="">USA</td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">John Doe</td>
                        <td className="">1000</td>
                        <td className="">2</td>
                        <td className="">new-customer</td>
                        <td className="">USA</td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">John Doe</td>
                        <td className="">1000</td>
                        <td className="">2</td>
                        <td className="">new-customer</td>
                        <td className="">USA</td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">John Doe</td>
                        <td className="">1000</td>
                        <td className="">2</td>
                        <td className="">new-customer</td>
                        <td className="">USA</td>
                    </tr>
                </tbody>
                </table>
            </section>
        )
    }
}

export default Table;