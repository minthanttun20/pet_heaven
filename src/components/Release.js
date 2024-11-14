import React, { useState } from 'react'

const Release = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petHealth, setPetHealth] = useState("");
  const [petBehavior, setPetBehavior] = useState("");
  const [reasonForRelease, setReasonForRelease] = useState("");
  const [petImage, setPetImage] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setPetName("");
      setPetAge("");
      setPetBreed("");
      setPetHealth("");
      setPetBehavior("");
      setReasonForRelease("");
      setPetImage(null);
      setIsSubmit(true);
      setTimeout(() => setIsSubmit(false), 3000);
    } catch {
        console.log(e);
    }
  }


  return (
    <div className='release scale-in'>
      <div className='release-header'>
          <h1>Release Your Pet</h1>
          <p>If you are no longer able to care for your pet, Pet Heaven can help find them a loving home. By releasing your pet to us, you're giving them a second chance at a happy life. We will ensure they are well taken care of until they are adopted.</p>
      </div>
      <div className='requirements'>
        <h3>Requirements</h3>
          <ul>
              <li>Your pet must be at least 6 months old, or the pet must be a breed we typically accept.</li>
              <li>We ask that pets be up-to-date on vaccinations.</li>
              <li>Pets should be in good health, or we may require a health check from a veterinarian before accepting them.</li>
              <li>Ensure that you provide any medical history, behavior notes, or special needs that we should be aware of.</li>
          </ul>
      </div>

      <div>
        <form className='release-pet-form' onSubmit={handleSubmit}>
          <h3>Release Form</h3>
            <label htmlFor='pet-name'>Pet Name</label>
            <input 
              type='text' 
              id='pet-name' 
              placeholder='Enter Pet Name' 
              value={petName}
              onChange={(e) => setPetName(e.target.value)} 
              required />

            <label htmlFor='pet-age'>Age</label>
            <input 
              type='text' 
              id='pet-age' 
              placeholder='Enter Pet Age' 
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)} 
              required />

            <label htmlFor='pet-breed'>Breed</label>
            <input 
              type='text' 
              id='pet-breed' 
              placeholder='Enter Pet Breed' 
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)} 
              required />

            <label htmlFor='pet-health'>Health Condition</label>
            <textarea 
              id='pet-health' 
              placeholder='Provide health information' 
              value={petHealth}
              onChange={(e) => setPetHealth(e.target.value)} 
              required>
              </textarea>

            <label htmlFor='pet-behavior'>Behavioral Notes</label>
            <textarea 
              id='pet-behavior' 
              placeholder='Describe the pet’s behavior (e.g., temperament, likes, dislikes)'  
              value={petBehavior}
              onChange={(e) => setPetBehavior(e.target.value)} 
              required></textarea>

            <label htmlFor='reason-for-release'>Reason for Releasing</label>
            <textarea 
              id='reason-for-release' 
              placeholder='Why are you releasing your pet?'  
              value={reasonForRelease}
              onChange={(e) => setReasonForRelease(e.target.value)} 
              required></textarea>

            <label htmlFor="image">Upload Pet Image (optional)</label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              accept="image/*" />
            {isSubmit ? <div className='next-step'>
              <p>Your pet release request has been submitted successfully.</p>
              <h3>Next Steps</h3>
              <p>Once we receive your request to release your pet, our team will contact you to arrange a meeting and further discuss the details. We will provide guidance on how to proceed with the release process.</p>
            </div> : ""}
            <button>Register to Release Pet</button>
        </form>
      </div>
      <div className='release-terms'>
          <h3>Terms and Conditions</h3>
          <p className='term'>By releasing your pet to Pet Heaven, you agree that we will take responsibility for their care and find a suitable home for them.</p>
          <p className='term'>You confirm that you are the legal owner of the pet and have the authority to release them.</p>
          <p className='term'>We will keep you updated on the pet’s status, but you understand that we may not be able to provide constant updates or guarantee a specific adoption time frame.</p>
          <p className='term'>Pet Heaven reserves the right to refuse the release of any pet if we feel it is not suitable for our program.</p>
          <p className='term'>Any adoption fee or donations received for the pet will go directly to the care of the animals in our shelter.</p>
      </div>
    </div>
  )
}

export default Release