import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import useNote from "./components/useNote";

export type Tags = {
  id: string;
  title: string;
};

export type NewNote = {
  title: string;
  message: string;
  tags: Tags[];
};

export type Notes = {
  id: string;
} & NewNote;

export type NoteList = {
  id: string;
  title: string;
  message: string;
  tagId: string[];
};

function App() {
  const [notes, setNote] = useNote<NoteList[]>([], "Notes");
  const [tags, setTag] = useNote<Tags[]>([], "Tags");

  const mergNoteAndTag = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path="/:noteid">
          <Route index element={<Show />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
