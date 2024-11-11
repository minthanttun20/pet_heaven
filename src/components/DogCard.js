import React from 'react';

const DogCard = ({ name, breed, age, description, image, onAdopt }) => {
    return (
        <div className="dog-card">
        <img src={image} alt={name} className="dog-image" />
        <h2>{name}</h2>
        <p><strong>Breed:</strong> {breed}</p>
        <p><strong>Age:</strong> {age}</p>
        <p>{description}</p>
        <button onClick={onAdopt} className="adopt-button">Adopt Me</button>
        </div>
    );
};

export default DogCard;
