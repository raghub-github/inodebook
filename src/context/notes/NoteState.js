import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "64992fc44d13b1fac38d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "649930434d13b1fac38d2d9c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac38d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "649930434d13b1fac38d2d9c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac38d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "649930434d13b1fac38d2d9c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac38d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    
  ];
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
