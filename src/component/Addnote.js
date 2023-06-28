import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2 className="App">Add notes</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={onChange}
            value={note.title}
            minLength={5}
            required
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            onChange={onChange}
            value={note.description}
            minLength={5}
            required
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input
            onChange={onChange}
            value={note.tag}
            minLength={5}
            required
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Tag"
          />
        </div>
        <button
          type="submit"
          disabled={note.title.length < 5 || note.description.length < 5}
          onClick={handleClick}
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
