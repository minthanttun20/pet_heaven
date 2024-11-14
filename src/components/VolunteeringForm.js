import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';

const VolunteeringForm = () => {
    const {id} = useParams();

    const [volunteer, setVolunteer] = useState(null);
    const [loading, setLoading] = useState(true);

    const getVolunteer = async () => {
        try {
            const response = await fetch("/Volunter.json");
            const data = await response.json();

            const foundVolunter = data.find(volunteer => volunteer.id === parseInt(id));
            
            setVolunteer(foundVolunter);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getVolunteer();
    }, [id]);

    if(loading) {
        return <Loading/>
    }

    if(!volunteer) {
        return <h1> No Volunteer job Found!</h1>
    }

    return (
    <div className='volunteer-form-container'>
       <div className='volunteer-form-header'>
            <h1>Volunteer Form</h1>
       </div>
        <div className='volunteer-form-body'>
            <div className='volunteer-info'>
                <div>
                    <h2>{volunteer.type}</h2>
                    <p>Profession: <span>{volunteer.profession}</span></p>
                    <p>{volunteer.description}</p>
                </div>
                <div className='terms'>
                    <h3>Terms & Condition</h3>
                    <ul>
                        <li>You must be at least 18 years old to volunteer</li>
                        <li>Commitment of minimum 4 hours per week is required</li>
                        <li>Must attend the mandatory orientation session
                        </li>
                        <li>Follow all safety protocols and guidelines
                        </li>
                        <li>Use the organization's resources for personal benefit</li>
                        <li>Provide 48 hours notice for schedule changes</li>
                    </ul>
                </div>
                <div className='not-allowed'>
                    <h3>You are not allowed to:</h3>
                    <ul>
                        <li>Share confidential information about the organization or beneficiaries</li>
                        <li>Engage in any form of discrimination or harassment</li>
                        <li>Accept any form of payment for volunteer services
                        </li>
                        <li>Represent the organization without proper authorization</li>
                        <li>Use the organization's resources for personal benefit</li>

                    </ul>
                </div>
            </div>
            <form className='volunteer-form'>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' placeholder='Enter Full Name'/>

                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email'/>

                    <label htmlFor='phone'>Phone Number</label>
                    <input type='text' placeholder='Enter Phone Number'/>

                    <label className='age'>Age</label>
                    <input type='text' placeholder='Enter Age'/>
                    
                    <button>Register Now</button>
            </form>
        </div>
     </div>
  )
}

export default VolunteeringForm