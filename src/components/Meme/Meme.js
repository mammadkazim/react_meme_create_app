import React, { useEffect, useState } from "react";
import "./Meme.css";
function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState();
  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data);
    }
    getMemes();
  }, [allMemes]);
  const chooseMemeHandler = (e) => {
    e.preventDefault();
    setMeme((prev) => {
      return {
        ...prev,
        randomImage:
          allMemes.data.memes[
            Math.trunc(Math.random() * allMemes.data.memes.length)
          ].url,
      };
    });
  };

  const handleChange = (event) => {
    setMeme((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <>
      <form>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="topText"
            placeholder="top text"
            type="text"
            value={meme.topText}
          />
          <input
            onChange={handleChange}
            name="bottomText"
            placeholder="bottom text"
            type="text"
            value={meme.bottomText}
          />
        </div>
        <button onClick={chooseMemeHandler}>Get a new meme image 🖼</button>
      </form>
      <div className="meme-container">
        <img alt="meme" src={meme.randomImage}></img>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default Meme;
