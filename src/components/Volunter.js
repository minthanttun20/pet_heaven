import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Volunter = () => {
  const [volunteers, setVolunteers] = useState([]);

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();


  const applyNow= (volunteer) => {
      navigate(`/volunteerForm/${volunteer.id}`);
  }
  
  const getVolunteers = async() => {
      try {
        const response = await fetch('./Volunter.json');
        const data = await response.json();
        setLoading(false)
        setVolunteers(data); 
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
  }

  useEffect(() => {
    getVolunteers();
  }, []);

  if(loading) {
    return <Loading/>
  }

  return (
    <div className='volunteers-container scale-in'>
      <h1 className='volunteers-title'>Available for Volunteer</h1>
      <div className='volunteers'>
        {
            volunteers.map((e) => {
              return(
                  <div className='volunteer-card'>
                    <h2 key={e.id}>{e.type}</h2>
                    <p>{e.profession}</p>
                    <p>{e.description}</p>
                    {e.urgent ? <span>Urgent</span> : ""}<br/><br/>
                    <div className="application-requirements">
                      <p>Please ensure you meet the following requirements before applying:</p>
                      <ul>
                        <li>Must be at least 18 years old</li>
                        <li>Must have relevant experience</li>
                        <li>Available for full-time commitment</li>
                      </ul>
                    </div>
                    {e.full ? <button className='full-button' disabled>Full</button> : <button onClick={() => applyNow(e)} className="apply-button">Apply Now</button>}
                  </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Volunter