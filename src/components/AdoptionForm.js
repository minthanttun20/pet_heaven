import React from 'react'
import { useParams } from 'react-router-dom';

const AdoptionForm = () => {
    const {dogName} = useParams();
    console.log(dogName);
    
    return (
        <div className='adoption-form-container'>
            <div className='adoption-form-header'>
                <h1 className='adoption-form-title'>Pet Heaven Adoption Form</h1>
                <p>At Pet Heaven, we believe every pet deserves a loving home. Our adoption process is designed to make sure that you and your new pet are a perfect match, ensuring a safe and happy future together.</p>
            </div>
                <h1>{dogName}</h1>
            <form className='adoption-form'>
                <div>
                    <h3 className='basic-info-title'>Basic Information</h3>
                    <div className='basic-info'>
                        <div className='basic-info1'>
                            <div className='name'>
                                <label>Full Name</label>
                                <div>
                                    <input placeholder='Enter First Name' className='firstName' id='firstName'/>
                                    <input placeholder='Enter Last Name' className='lastName' id='lastName'/>
                                </div>
                            </div>
                            <label>Email Address</label>
                            <input placeholder='Enter Email'/>
                            <label>Phone Number</label>
                            <input placeholder='Enter Phone Number'/>
                        </div>
                        <div className='address'>
                            <h3 className='address-title'>Address</h3>
                            <label>Postal Code</label>
                            <input placeholder='Postal Code'/>

                            <label>Address</label>
                            <input placeholder='Address'/> 

                            <label>City</label>
                            <input type='text' placeholder='City'/>                   
                        </div>
                    </div>
                    <div>
                        <h3 className='household-title'>Lifestyle and Household Information</h3>
                        <div className='question'>
                            <label>Do you own your own house?</label>
                            <div>
                                <input type='radio' id='houseYes' value='yes' name='ownHouse'/>
                                <label htmlFor='houseYes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='houseNo' value='no' name='ownHouse'/>
                                <label htmlFor='houseNo'>No</label>
                            </div>
                        </div>
                        <div className='question'>
                            <label>Is any member of your family allergic to animals?</label>
                            <div>
                                <input type='radio' id='allergyYes' value='yes' name='allergic'/>
                                <label htmlFor='allergyYes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='allergyNo' value='no' name='allergic'/>
                                <label htmlFor='allergyNo'>No</label>
                            </div>
                        </div>
                        <div className='question'>
                            <label>Have you had a pet before?</label>
                            <div>
                                <input type='radio' id='hadPetYes' value='yes' name='hadPet'/>
                                <label htmlFor='hadPetYes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='hadPetNo' value='no' name='hadPet'/>
                                <label htmlFor='hadPetNo'>No</label>
                            </div>
                        </div>
                        <div className='question'>
                            <label>Do you currently have any pets?</label>
                            <div>
                                <input type='radio' id='currentPetYes' value='yes' name='currentPet'/>
                                <label htmlFor='currentPetYes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='currentPetNo' value='no' name='currentPet'/>
                                <label htmlFor='currentPetNo'>No</label>
                            </div>
                        </div>
                        <div className='question'>
                            <label>Have you given up or lost a pet before?</label>
                            <div>
                                <input type='radio' id='lostPetYes' value='yes' name='lostPet'/>
                                <label htmlFor='lostPetYes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='lostPetNo' value='no' name='lostPet'/>
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
    )
}

export default AdoptionForm;
