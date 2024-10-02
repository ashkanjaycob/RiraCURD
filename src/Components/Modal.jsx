/* eslint-disable react/prop-types */
function Modal({ toggleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to the StickyNotes App!</h2>
        <p>
          This application helps you to create, edit, delete, and organize your
          sticky notes. You can use it to manage tasks, set deadlines, and much
          more!
        </p>

        <h3>Features Overview:</h3>

        <ul>
          <li>
            <strong>Add a Note:</strong> Use the{" "}
            <span style={{ color: "#b0e0e6" }}>light blue card</span> to add a
            new note. Enter your note content, set a deadline, and save it to
            your list.
          </li>
          <li>
            <strong>Existing Notes:</strong> Each note is represented by a card
            with different background colors:
            <ul>
              <li>
                <span style={{ color: "#ff6961" }}>Red card:</span> Indicates a
                note with an urgent deadline.
              </li>
              <li>
                <span style={{ color: "#FCCD2A" }}>Yellow card:</span> General
                notes with future deadlines.
              </li>
            </ul>
          </li>
          <li>
            <strong>Edit a Note:</strong> Click the <i>Edit (Pencil)</i> icon at
            the bottom of each note to update its content or deadline.
          </li>
          <li>
            <strong>Delete a Note:</strong> Click the <i>Delete (Trash)</i> icon
            to remove a note from your list.
          </li>
          <li>
            <strong>Search Notes:</strong> Use the search bar at the top of the
            page to filter through your notes by keywords.
          </li>
        </ul>

        <div>
          <a style={{ textDecoration : "none" }} href="https://ir.linkedin.com/in/ashkanyaghobi" target="_blank">
            Developed with 🖤 by Ashkan Yaghobi
          </a>
        </div>  

        <button className="close-modal" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
