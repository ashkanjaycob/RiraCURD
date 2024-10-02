import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesPanel from "./Components/NotesPanel";
import Search from "./Components/Search";
import Modal from "./Components/Modal";
import React from "react";
import { getCurrentDate, formatDate } from "./utils/formatDate";

interface Note {
  id: string;
  title: string;
  startdate: string;
  finishdate: string;
}

interface NoteData {
  text: string;
  createdAt: string;
  deadline: string;
}

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Load Notes From LocalStorage
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data") || "null"
    );
    return (
      savedNotes || [
        {
          id: nanoid(),
          title: "First Note",
          startdate: "15/04/2024",
          finishdate: "15/04/2024",
        },
      ]
    );
  });

  // SetNew Notes Based on notes Change
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // Add New Notes Function
  const addNote = (noteData: NoteData) => {
    const newNote: Note = {
      id: nanoid(),
      title: noteData.text,
      startdate: getCurrentDate(),
      finishdate: formatDate(noteData.deadline),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    console.log(newNote?.startdate);
  };
  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id: string, newTitle: string, newDeadline: string) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title: newTitle, finishdate: newDeadline };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="Header-item">
        <h1>Rira Co CRUD || StickyNotes App</h1>
        <button className="introduction" onClick={toggleModal}>
          Introduction
        </button>
      </div>
      <Search handleSearchNote={setSearchText} />
      <NotesPanel
        notes={notes?.filter((note) =>
          note?.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
