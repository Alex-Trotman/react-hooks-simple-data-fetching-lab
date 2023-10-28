// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(<img src={data.message} alt="A Random Dog"></img>);
      });
  }, []);
  console.log(image);

  return image ? image : <p>Loading...</p>;
}

export default App;
