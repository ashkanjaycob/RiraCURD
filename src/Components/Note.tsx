import { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Draggable from "react-draggable";
import React from "react";
import { getCurrentDate } from "../utils/formatDate";

interface NoteProps {
  note: {
    id: string;
    title: string;
    startdate: string;
    finishdate: string;
  };
  handleDeleteNote: (id: string) => void;
  handleEditNote: (id: string, newTitle: string, newDeadline: string) => void;
}

function Note({ note, handleDeleteNote, handleEditNote }: NoteProps) {
  const { id, title, startdate, finishdate } = note;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDeadline, setNewDeadline] = useState<string>(finishdate);

  const handleSaveEdit = () => {
    handleEditNote(id, newTitle, newDeadline);
    setIsEditing(false);
  };

  // Date Checker  
  const isDeadlineToday = () => {
    const today = getCurrentDate();
    return finishdate === today;
  };

  return (
    <Draggable handle=".drag-handle">
      <div className={`Note ${isDeadlineToday() ? "deadline-today" : ""}`}>
        <div className="drag-handle">Drag This Area to move Note</div>
        {isEditing ? (
          <>
            <textarea
              rows={3}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <div className="datePickerContainer">
              <input
                className="date"
                type="date"
                value={newDeadline}
                onChange={(e) => setNewDeadline(e.target.value)}
              />
            </div>
            <button className="save" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{title}</span>
            <div className="Note-footer">
              <div className="dates-show">
                <small>Created at: {startdate}</small>
                <small>Dead Line: {finishdate}</small>
              </div>

              <MdEdit
                className="edit-icon"
                size="1.3em"
                onClick={() => setIsEditing(true)}
              />
              <MdDeleteForever
                className="delete-icon"
                size="1.3em"
                onClick={() => handleDeleteNote(id)}
              />
            </div>
          </>
        )}
      </div>
    </Draggable>
  );
}

export default Note;
