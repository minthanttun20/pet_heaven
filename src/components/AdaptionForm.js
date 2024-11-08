import React from 'react'

const AdaptionForm = () => {
  return (
    <div className='adaption-form-container'>
        <div className='adaption-form-header'>
            <h1 className='adaption-form-title'>Pet Heaven Adaption Form</h1>
            <p>At Pet Heaven, we believe every pet deserves a loving home. Our adoption process is designed to make sure that you and your new pet are a perfect match, ensuring a safe and happy future together.</p>
        </div>
        <form className='adaption-form'>
            <div>
                <h3 className='basic-info-title'>Basic Information</h3>
                <div className='baic-info'>
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
                            <br/>
                            <input type='radio' id='yes' value='yes' name='yes'/>
                            <label for='yes'>Yes</label>
                        </div>
                        <div>
                            <input type='radio' id='no' value='no' name='no'/>
                            <label for='no'>No</label>
                        </div>
                    </div>
                    {/*  */}
                    <div className='question'>
                        <label>Are any member of your family allegric to animal?</label>
                        <div>
                            <br/>
                            <input type='radio' id='yes' value='yes' name='yes'/>
                            <label for='yes'>Yes</label>
                        </div>
                        <div>
                            <input type='radio' id='no' value='no' name='no'/>
                            <label for='no'>No</label>
                        </div>
                    </div>
                    {/*  */}
                    <div className='question'>
                        <label>Have you had pet before?</label>
                        <div>
                            <br/>
                            <input type='radio' id='yes' value='yes' name='yes'/>
                            <label for='yes'>Yes</label>
                        </div>
                        <div>
                            <input type='radio' id='no' value='no' name='no'/>
                            <label for='no'>No</label>
                        </div>
                    </div>
                    {/*  */}
                    <div className='question'>
                        <label>Are you currently have any pet?</label>
                        <div>
                            <br/>
                            <input type='radio' id='yes' value='yes' name='yes'/>
                            <label for='yes'>Yes</label>
                        </div>
                        <div>
                            <input type='radio' id='no' value='no' name='no'/>
                            <label for='no'>No</label>
                        </div>
                    </div>
                    {/*  */}
                    <div className='question'>
                        <label>Have you given or lost any pet before?</label>
                        <div>
                            <br/>
                            <input type='radio' id='yes' value='yes' name='yes'/>
                            <label for='yes'>Yes</label>
                        </div>
                        <div>
                            <input type='radio' id='no' value='no' name='no'/>
                            <label for='no'>No</label>
                        </div>
                    </div>
                    <div className='question'>
                        <label>Why do you want to adapt a pet? *</label>
                        <textarea
                            id="why"
                            name="why"
                            required
                            placeholder='Enter your reason'
                        ></textarea>
                    </div>
                </div>
            </div>
            <button className='adaption-btn'>Send</button>
        </form> 
    </div>
  )
}

export default AdaptionForm