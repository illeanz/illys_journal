import React from 'react';
import { connect } from 'react-redux';
import { deleteEntry } from "../actions";
import EntryDetails from "./EntryDetails";

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: false,
            id: this.props.id
        };
        console.log("Entry with id: " + this.state.id);
    }

    handleRemove() {
        console.log("id to be removed: " + this.state.id);
        this.props.deleteEntry(this.state.id);
    }

    toggleDetails() {
        this.setState({details: !this.state.details});
    }

    render() {
        return (
            <div className="entry">
                <div className="entryText">
                    <h3 className="dates">{this.props.date}</h3>
                    <p className="writing">{this.props.text}</p>
                </div>
                {this.state.details ? (<EntryDetails length={this.props.length} author={this.props.author}/>) : null}
                <div className="smolButtons">
                    <p onClick={this.handleRemove.bind(this)}>x</p>
                    <p onClick={this.toggleDetails.bind(this)}>deets</p>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteEntry }
)(Entry)
