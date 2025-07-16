// 1. pages
// 2.

import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="cupcake">
      <button className="btn btn-primary">click me</button>
      <button className="btn btn-secondary">click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
