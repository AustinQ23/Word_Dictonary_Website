import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import book from "./book.jpg";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const word = encodeURIComponent(name.toLowerCase());
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <h1>
        <Title text="Word Dictonary" />
      </h1>
      <h2>
        <img src={book} alt="book image" width="200rem" height="200rem" />

        <Entry action={setName} />
        <Info name={name} data={data} />
      </h2>
    </div>
  );
}
