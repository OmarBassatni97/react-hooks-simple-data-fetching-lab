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
  if (dogs.isLoading) {
    return <p>Loading...</p>;
  }
  if(!dogs.isLoading){
    return(
      <img src={dogs.data.message} alt="A Random Dog" />
    )
  }
};

export default App;
