import React from "react";
import Characters from "../components/Characters";
import apiData from "../api/api.json";
import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const charactersArray = Object.values(apiData);
    setCharacters(charactersArray);
  }, []);

  return (
    <div>
      <div className="container mx-auto py-20 flex flex-wrap justify-center">
        {characters.length > 0 ? (
          characters.map((character, index) => (
            <Characters
              key={index}
              no={character.id}
              name={character.name}
              role={character.role}
              gender={character.gender}
              height={character.height}
              bio={character.bio}
              story={character.story}
              img={character.image}
            />
          ))
        ) : (
          <p>No characters available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
