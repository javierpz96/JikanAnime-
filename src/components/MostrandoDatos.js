import { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import "./Animes.css";

const MostrandoDatos = () => {
  const [anime, setAnime] = useState([]);
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime").then((res) => {
      const data = res.data;
      setAnime(data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime/5114/pictures").then((res) => {
      const data = res.data;
      setHero(data.data);
    });
  }, []);

  const MostrarData = () => {
    return (
      <div className="Animes">
        {anime.map((pelicula) => {
          return (
            <MediaCard
              key={pelicula.mal_id}
              info={pelicula.synopsis}
              imagen={pelicula.images.jpg.image_url}
              titulo={pelicula.title}
            ></MediaCard>
          );
        })}
      </div>
    );
  };

  const MostrarHero = () => {
    return <div>
        
    </div>;
  };

  console.log(hero);

  return (
    <div>
      <MostrarHero></MostrarHero>
      <MostrarData></MostrarData>
    </div>
  );
};

export default MostrandoDatos;
