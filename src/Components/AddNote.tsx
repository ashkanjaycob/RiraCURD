import React from "react";
import { useState } from "react";

interface AddNoteProps {
  handleAddNote: (noteData: NoteData) => void;
}

interface NoteData {
  text: string;
  deadline: string;
  createdAt: string;
}

function AddNote({ handleAddNote }: AddNoteProps) {
  const [noteText, setNoteText] = useState<string>("");
  const [noteDate, setNoteDate] = useState<string>("");
  const maxCharacters = 250;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= maxCharacters) {
      setNoteText(inputText);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteDate(e.target.value);
  };

  // Simple Validation for text & date 
  const handleSaveNote = () => {
    const trimmedText = noteText.trim();

    if (trimmedText === "") {
      alert("Please enter a note.");
      return;
    }
    if (!noteDate) {
      alert("Please select a deadline.");
      return;
    }

    const creationDate = new Date().toLocaleDateString();

    const noteData: NoteData = {
      text: trimmedText,
      deadline: noteDate,
      createdAt: creationDate,
    };

    handleAddNote(noteData);
    setNoteText("");
    setNoteDate("");
  };

  return (
    <div className="Note newNote">
      <textarea
        rows={8}
        cols={6}
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className="datePickerContainer">
        <label htmlFor="date">Deadline: </label>
        <input
          className="date"
          type="date"
          id="date"
          value={noteDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="Note-footer">
        <small>{maxCharacters - noteText.length} characters remaining</small>
        <button onClick={handleSaveNote} className="save">
          Save Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
