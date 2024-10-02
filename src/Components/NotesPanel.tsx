import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

interface NoteType {
  id: string;
  title: string;
  startdate: string;
  finishdate: string;
}

interface NotesPanelProps {
  notes: NoteType[];
  handleAddNote: (noteData: { text: string; createdAt: string; deadline: string }) => void;
  handleDeleteNote: (id: string) => void;
  handleEditNote: (id: string, newTitle: string, newDeadline: string) => void;
}

const NotesPanel: React.FC<NotesPanelProps> = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="NotesPanel">
      <AddNote handleAddNote={handleAddNote} />
      {notes?.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
};

export default NotesPanel;
