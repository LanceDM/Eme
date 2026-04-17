import "./Home.css";
import { useNavigate } from "react-router-dom";

const links = [];

function addLink(title, path, category = "none") {
  if (!title || !path) {
    throw new Error("title and path are required");
  }

  links.push({ title, path });
}

addLink("GUESS THE MOVIE: EMOJI", "/emoji");

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      <h1 className="home-title-icon">EME</h1>

      {links.map((link) => (
        <button key={link.path} onClick={() => navigate(link.path)}>
          {link.title}
        </button>
      ))}
    </div>
  );
}

export default Home;
