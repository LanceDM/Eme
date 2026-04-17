import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import MovieGuessingEmoji from "./pages/MovieGuessingEmoji/MovieGuessingEmoji";

const pageLinks = [];

function addPageLinks(path, element) {
  pageLinks.push({ path, element });
}

//add page routers here
addPageLinks("/", <Home />);
addPageLinks("/emoji", <MovieGuessingEmoji />);

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />

        <div className="pages">
          <Routes>
            {pageLinks.map((pageLink) => (
              <Route
                key={pageLink.path}
                path={pageLink.path}
                element={pageLink.element}
              />
            ))}
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;