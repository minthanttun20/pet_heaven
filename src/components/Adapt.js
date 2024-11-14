import React, { useEffect, useState } from 'react'

import DogCard from './DogCard';
import Loading from './Loading'
import { useNavigate } from 'react-router-dom';

const Adapt = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // should change this one to more advance
  const adobtNow = (dog) => {   
    navigate(`/adoptionForm/${dog.id}`);
  };


  useEffect(() => {
    fetch('/Pets.json')
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setDogs(data)
      }) .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
    });
  },[]);


  if(loading) {
     return  <Loading/>
  }

  return (
    <div className="dog-list  scale-in">
      <h1>Dogs Available for Adoption</h1>
      <div className="dog-cards">
        {dogs.map((dog) => (
          <DogCard
            key={dog.id}
            name={dog.name}
            breed={dog.breed}
            age={dog.age}
            description={dog.description}
            image={dog.image}
            onAdopt={() => adobtNow(dog)}
          />
        ))}
      </div>
    </div>
  );
}

export default Adapt