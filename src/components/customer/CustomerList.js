import React, {Component} from 'react';
import {initialCustomers} from "../../assets/data";
import CustomerInfo from "./CustomerInfo";

class CustomerList extends Component {

    state = {customers: initialCustomers}

    render() {
        return (
            <div className="container">
                <h2>Customer List with Class Components</h2>
                <div className="row">
                    {
                        this.state.customers.map((customer, index) => <CustomerInfo key={customer.id} customer={customer} /> )
                    }
                </div>
            </div>
        );
    }
}

export default CustomerList;