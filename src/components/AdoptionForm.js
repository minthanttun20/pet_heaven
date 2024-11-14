import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Loading from './Loading'
import DogCard from './DogCard';

const AdoptionForm = () => {
    const {id} = useParams();
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);

    const getDog = async() => {
        try {
            const response = await fetch('/Pets.json');
            const data = await response.json();

            const foundDog = data.find(dog => dog.id === parseInt(id));

            setDog(foundDog);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching dog", error);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getDog();
    },[id]);
    
    if(loading) {
        // Show loading while data is being fetched
        return <Loading/>
    }

    if (!dog) {
        return <h1>No dog found!</h1>;
    }

    return (
        <div className='adoption-form-container'>
            <div className='adoption-form-header'>
                <h1 className='adoption-form-title'>Pet Heaven Adoption Form</h1>
                <p>At Pet Heaven, we believe every pet deserves a loving home. Our adoption process is designed to make sure that you and your new pet are a perfect match, ensuring a safe and happy future together.</p>
            </div>
            <div className='form'>
                <div>
                    <div className='dog-info'>
                        <img src={dog.image} alt={dog.name}/>
                        <h2>{dog.name}</h2>
                        <p>Gender: <span>{dog.gender}</span></p>
                        <p>Breed: <span>{dog.breed}</span></p>
                        <p>Age: <span>{dog.age}</span></p>
                        <p>{dog.description}</p>
                    </div>
                    <div className='adoption-requirements'>
                        <h3>Adoption Requirements</h3>
                        <li>
                            Must be at least 21 years of age
                        </li>
                        <li>
                            Provide valid government-issued photo ID
                        </li>
                        <li>
                            Proof of current address and residency status
                        </li>
                        <li>
                            If renting, provide landlord's written permission for pet ownership
                        </li>
                        <li>
                            All household members must agree to the adoption
                        </li>
                        <li>
                            Home inspection may be required prior to adoption
                        </li>
                    </div>
                    <div className='care-requirement'>
                        <h3>Care Requirements</h3>
                        <ul>
                            <li>
                                Provide daily exercise appropriate for the pet's age and health
                            </li>
                            <li>
                                Maintain current identification tags and/or microchip registration
                            </li>
                            <li>
                                Keep the pet as an indoor animal unless otherwise specified
                            </li>
                            <li>
                                Never leave the pet chained or tethered outdoors
                            </li>
                            <li>
                                Provide appropriate training and socialization
                            </li>
                            <li>
                                Regular grooming and maintenance of hygiene
                            </li>
                        </ul>
                    </div>
                    <div className='return-policy'>
                        <h3>Return Policy</h3>
                        <li>
                            14-day adjustment period to ensure compatibility
                        </li>
                        <li>
                            Full refund of adoption fee within first 14 days
                        </li>
                        <li>
                            Must contact shelter before returning the pet
                        </li>
                        <li>
                            Provide detailed reason for return
                        </li>
                        <li>
                            Return all adoption documents and medical records
                        </li>

                    </div>
                </div>
                <form className='adoption-form'>
                    <div>
                        <h3 className='basic-info-title'>Basic Information</h3>
                        <div className='basic-info'>
                            <div className='basic-info1'>
                                <div className='name'>
                                    <label>Full Name</label>
                                    <div>
                                        <input type='text' placeholder='Enter First Name' className='firstName' id='firstName' required/>
                                        <input type='text' placeholder='Enter Last Name' className='lastName' id='lastName' required/>
                                    </div>
                                </div>
                                <label>Age</label>
                                <input type='text' placeholder='Enter Age' required/>
                                <label>Email Address</label>
                                <input type='text' placeholder='Enter Email' required/>
                                <label>Phone Number</label>
                                <input type='text' placeholder='Enter Phone Number' required/>
                            </div>
                            <div className='address'>
                                <h3 className='address-title'>Address</h3>
                                <label>Postal Code</label>
                                <input placeholder='Postal Code' type='text' required/>

                                <label>Address</label>
                                <input placeholder='Address'/> 

                                <label>City</label>
                                <input type='text' placeholder='City' required/>                   
                            </div>
                        </div>
                        <div>
                            <h3 className='household-title'>Lifestyle and Household Information</h3>
                            <div className='question'>
                                <label>Do you own your own house?</label>
                                <div>
                                    <input type='radio' id='houseYes' value='yes' name='ownHouse' required/>
                                    <label htmlFor='houseYes'>Yes</label>
                                </div>
                                <div>
                                    <input type='radio' id='houseNo' value='no' name='ownHouse' required/>
                                    <label htmlFor='houseNo'>No</label>
                                </div>
                            </div>
                            <div className='question'>
                                <label>Is any member of your family allergic to animals?</label>
                                <div>
                                    <input type='radio' id='allergyYes' value='yes' name='allergic' required/>
                                    <label htmlFor='allergyYes'>Yes</label>
                                </div>
                                <div>
                                    <input type='radio' id='allergyNo' value='no' name='allergic' required/>
                                    <label htmlFor='allergyNo'>No</label>
                                </div>
                            </div>
                            <div className='question'>
                                <label>Have you had a pet before?</label>
                                <div>
                                    <input type='radio' id='hadPetYes' value='yes' name='hadPet' required/>
                                    <label htmlFor='hadPetYes'>Yes</label>
                                </div>
                                <div>
                                    <input type='radio' id='hadPetNo' value='no' name='hadPet' required/>
                                    <label htmlFor='hadPetNo'>No</label>
                                </div>
                            </div>
                            <div className='question'>
                                <label>Do you currently have any pets?</label>
                                <div>
                                    <input type='radio' id='currentPetYes' value='yes' name='currentPet' required/>
                                    <label htmlFor='currentPetYes'>Yes</label>
                                </div>
                                <div>
                                    <input type='radio' id='currentPetNo' value='no' name='currentPet' required/>
                                    <label htmlFor='currentPetNo'>No</label>
                                </div>
                            </div>
                            <div className='question'>
                                <label>Have you given up or lost a pet before?</label>
                                <div>
                                    <input type='radio' id='lostPetYes' value='yes' name='lostPet' required/>
                                    <label htmlFor='lostPetYes'>Yes</label>
                                </div>
                                <div>
                                    <input type='radio' id='lostPetNo' value='no' name='lostPet' required/>
                                    <label htmlFor='lostPetNo'>No</label>
                                </div>
                            </div>
                            <div className='question'>
                                <label>Why do you want to adopt a pet? *</label>
                                <textarea
                                    id="why"
                                    name="why"
                                    required
                                    placeholder='Enter your reason'
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <button className='adoption-btn'>Send</button>
                </form> 
            </div>
        </div>
    )
}

export default AdoptionForm;
