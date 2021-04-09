import React, {Component} from 'react';
import Execute from './api';



class Table extends Component {
    render() {
        const listOfData = Execute();
        return (
            <section>
                <h2 className="lavender">Here goes the Table!</h2>
                {console.log(listOfData)}
            </section>
        )
    }
}

export default Table;