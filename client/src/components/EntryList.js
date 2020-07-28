import { connect } from 'react-redux'
import Entry from "./Entry";
import React from 'react';
import { fetchEntries } from "../actions"

class EntryList extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchEntries());
    };

    render() {
        return (
            <div>
                <div>
                    <h3>All Entries (ꈍ ꒳ ꈍ✿):</h3>
                </div>
                <div id="journalDiv">
                    {
                        this.props.entries.map(entry => {
                            console.log("This is entry:");
                            console.log(entry);
                            return <Entry key={entry.id}
                                          date={entry.date}
                                          text={entry.text}
                                          id={entry.id}
                                          author={entry.author}
                                          length={entry.length}/>;
                        })

                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {entries: state.entries}
}

export default connect(
    mapStateToProps
)(EntryList)
