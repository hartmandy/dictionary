import "./App.css";
import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Photos from "./components/Photos";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [definition, setDefinition] = useState("");
  const [photos, setPhotos] = useState(null);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchImages = async () => {
    const UNSPLASH = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=iy2jtWSQBcUaarGZwnsGCYJYF6LNw6qlnVRPuebR9pQ`;
    axios.get(UNSPLASH).then((response) => {
      const result = response.data.results.map((photo) => ({
        url: photo.urls.full,
        link: photo.links.self,
      }));
      setPhotos(result);
    });
  };

  const fetchDictionary = async () => {
    if (searchValue !== "") {
      const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
      try {
        const dataResponse = await axios.get(API_URL);
        console.log(dataResponse);
        setDefinition({
          word: dataResponse.data[0].word,
          phonetics: dataResponse.data[0].phonetics,
          meanings: dataResponse.data[0].meanings,
        });
      } catch (error) {
        console.error(`Error fetching definition: ${error}`);
      }
    }
  };

  const submit = async () => {
    await fetchDictionary();
    await fetchImages();
  };

  return (
    <div className="outside container mx-auto">
      <div className="container max-w-3xl mt-40">
        <div className="rounded-xl border-neutral-200 border-2 p-10 shadow-sm  text-white tracking-wider">
          <Search
            onChange={handleChange}
            searchValue={searchValue}
            onSubmit={submit}
          />
        </div>
        <div className="results mt-4">
          <Results definition={definition} results={definition} />
        </div>
        <Photos photos={photos} />
      </div>
    </div>
  );
}
// rounded-xl border-neutral-200 bg-neutral-50 border-2 p-10 shadow-sm text-black tracking-wider

export default App;
