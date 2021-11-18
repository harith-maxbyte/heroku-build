import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button, Input } from '@material-ui/core';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '30%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

/**
 * @class
 * Class representing Customers component
 */
export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDate: this.props.fromDate,
            toDate: this.props.toDate,
            error: ''
        };
    }

    handleDate = (e) => {
        if (e.target.name === 'from') {
            this.setState({
                fromDate: e.target.value,
            })
        } else {
            this.setState({
                toDate: e.target.value,
            })
        }

    }

    handleClose = () => {
        this.props.cancel()
    }

    handleSuccess = () => {
        console.log(this.state.fromDate, this.state.toDate)
        if (this.state.fromDate < this.state.toDate) {
            this.props.handelopen(this.state.fromDate, this.state.toDate)
        } else {
            this.setState({
                error: 'End date should be greater than start date'
            })
        }
    }

    render() {
        return (

            <div>
                <Modal style={customStyles} isOpen={this.props.isOpen} ariaHideApp={false} >
                    <div style={{ marginBottom: '5%', fontWeight: '700' }}>Select Custom Date</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <label>Start Date</label>
                            <br></br>
                            <Input type="date" value={this.state.fromDate} onChange={this.handleDate} name="from" />
                        </div>
                        <div>
                            <label>End Date</label>
                            <br></br>
                            <Input type="date" value={this.state.toDate} onChange={this.handleDate} name="to" />
                        </div>
                    </div>
                    <p style={{ textAlign: "center", padding: '2%', color: 'red' }}>{this.state.error}</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button style={{ width: '20%', background: '#EB7676' }} onClick={this.handleClose} >
                            Cancel
                    </Button>
                        <Button style={{
                            width: '20%', background: '#90ee90', marginLeft: '5%'
                        }} onClick={this.handleSuccess} >Apply</Button>
                    </div>
                </Modal>
            </div>
        );
    }

}