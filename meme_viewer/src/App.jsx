import { useEffect, useState } from "react";
import Header from "./components/Header";
import MemeList from "./components/MemeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <MemeList memes={filteredMemes} />
    </div>
  );
}

export default App;
