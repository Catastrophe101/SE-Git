import React, { Component } from 'react'
import { ref } from '../../config/constants'
import Note from './Note/Note';
import _ from 'lodash';
import 'firebase/database';
export default class Dashboard extends Component {
  constructor(props){
    super(props);
    //this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.database = ref.child('QueryData');
    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;
    // DataSnapshot
    this.database.on('child_added', snap => {
      this.database = ref.child('QueryData/');
      this.database.on('child_added', snap => {
        previousNotes.push({
          id: snap.key,
          hname:snap.val().Name,
          haddress: snap.val().Emailaddress,
          hno: snap.val().Phoneno,
          hmessage:snap.val().Message,
		  company:snap.val().Company,
		  title:snap.val().Title
        });
        this.setState({
          notes: previousNotes
        })
  });
})
    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }
      this.setState({
        notes: previousNotes
      })
    })
  }
  removeNote(noteId){
    //console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        <br />
        <br />
        <br />
        <div className="notesHeader">
          <div className="heading" align="center"><h1>Messages</h1></div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
                hname={note.hname}
                haddress={note.haddress}
                hno={note.hno}
				company={note.company}
				title={note.title}
                hmessage={note.hmessage}
                removeNote={this.removeNote}/>
              )
            })
          }
        </div>
		<div  align="center"><h2>No more messages</h2></div>
      </div>
	  
    );
  }
}
