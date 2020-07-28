import React from 'react';

class EntryDetails extends React.Component {

    render() {
        return (
            <div className="entryDetails">
                <p className="writing">{"Author: " + this.props.author}</p>
                <p className="writing">{"Length: " + this.props.length}</p>
            </div>
        );
    }
}

export default EntryDetails;
