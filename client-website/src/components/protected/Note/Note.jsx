import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent,
        this.noteId = props.noteId,
        this.hname=props.hname,
        this.haddress=props.haddress,
        this.hno=props.hno,
        this.hmessage=props.hmessage,
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
          window.location.href='/dashboard';
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <h3>Name: { this.hname } </h3>
                <h3>EmailAddress: { this.haddress }</h3>
                  <h3>Phone No: { this.hno }</h3>
                  <h3>Messages:{this.hmessage}</h3>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string,
    hname: PropTypes.string,
    haddress: PropTypes.string,
    hno: PropTypes.string,
    hmessage:PropTypes.string
}

export default Note;
