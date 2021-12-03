import { useEffect, useState } from "react";
import Character from "./Character";
import Spinner from "./Spinner";

const PaintData = ({ characterName }) => {
  const [characters, setCharacters] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getApi(characterName);
  }, [characterName]);

  const getApi = async (name) => {
    setSpinner(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
      );
      if (!res.ok) {
        alert("Error");
        console.log("Error");
        return;
      }
      const data = await res.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
    }
  };
  if (spinner) {
    return <Spinner />;
  }

  return (
    <div className="row mt-4">
      {characters.map((item) => (
        <Character key={item.id} character={item} />
      ))}
    </div>
  );
};

export default PaintData;
