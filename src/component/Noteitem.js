import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3 App">
          <div
            className="card-body "
            style={{ backgroundColor: "rgb(13 0 23)", color: "white" }}
          >
            <div className="d-flex align-item-center justify-content-around">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                style={{ color: "rgb(0 177 212)" }}
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("deleted Successfully", "info");
                }}
                style={{ color: "rgb(196 0 0)" }}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
            <p className="card-text">{note.tag}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
