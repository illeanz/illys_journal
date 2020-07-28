import React from 'react';
import { connect } from 'react-redux'
import {addEntry, deleteAllEntries} from "../actions";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    handleAddEntry = () => {
        if (this.state.text !== "") {
            this.props.addEntry({text: this.state.text,
                                                date: new Date().toJSON().slice(0, 10),
                                                author: 'Illean',
                                                length: this.state.text.length});
            this.setState({ text: "" });
        } else {
            alert("Oh no! You didn't write anything! QAQ");
        }
    };

    clearAll = () => {
        this.props.deleteAllEntries();
    }

    render() {
        return (
            <div id="inputDiv">
            <input type="text" id="inputMessage" placeholder="☆*:.｡.o(≧▽≦)o.｡.:*☆" value={this.state.text} onChange={this.handleChange}/>
                <div id="buttonDiv">
                    <input type="button" id="addButton" value="Add a New Entry!" onClick={this.handleAddEntry}/>
                    <input type="button" id="clearButton" value="Delete All Entries" onClick={this.clearAll}/>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addEntry, deleteAllEntries }
)(Input)
