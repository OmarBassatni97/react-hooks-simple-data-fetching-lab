// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const [dogs, setDogs] = useState({ isLoading: true, data: null });
  useEffect(() => {
    const fetchData = async () => {
      const promise = await fetch("https://dog.ceo/api/breeds/image/random");
      const result = await promise.json();
      setDogs({
        isLoading: false,
        data: result,
      });
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  {!isLoading && 
dogs.data.map((dog) => {
    return(
        <img src={dog.message} alt="A Random Dog" />
    )
})
}
};

export default App;
