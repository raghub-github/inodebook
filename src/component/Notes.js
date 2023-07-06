import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Addnote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ backgroundColor: "rgb(0 17 17)", color: "white" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(0 1 12 / 53%)",
                      color: "white",
                    }}
                    value={note.etitle}
                    minLength={5}
                    required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="Title"
                    aria-describedby="titleHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(0 1 12 / 53%)",
                      color: "white",
                    }}
                    value={note.edescription}
                    minLength={5}
                    required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    tag
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(0 1 12 / 53%)",
                      color: "white",
                    }}
                    value={note.etag}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="Tag"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 App">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
