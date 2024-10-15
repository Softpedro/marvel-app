import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ComicList from "./components/ComicList";
import ComicDetail from "./components/ComicDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComicList />} />
        <Route path="/comics/:id" element={<ComicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
