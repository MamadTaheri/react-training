import React, {Component} from 'react';

class CustomerInfo extends Component {
    customer = this.props.customer;
    render() {
        return (
            <div className="col-md-3">
                <div className="card bg-danger text-white p-3">
                    <h5>Full Name : {this.customer.fullName}</h5>
                    <h6>Grade : {this.customer.grade}</h6>
                    <button className="btn btn-secondary btn-sm" onClick={() => this.props.removeCustomer(this.customer.id)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default CustomerInfo;