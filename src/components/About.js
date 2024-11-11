import React from 'react'

import storyImg from './images/story.avif'
import member1 from './images/member1.jpg'
import member2 from './images/member2.jpg'
import member3 from './images/member3.jpg'
import animalRescue from './images/animal_resuce.webp'
import shelter from './images/shelter.webp'
import animalClinic from './images/animal_clinic.webp'

import Footer from './Footer'

import { RiGlobalLine } from "react-icons/ri";
import { FaBalanceScale, FaHeart, FaFireAlt, FaFire, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'



const About = () => {

  const teamMembers = [
    { img: member1, name: "Emily Rivers", job: "Veterinarian and animal welfare advocate" },
    { img: member2, name: "Jake Turner", job: "Rescue specialist and volunteer coordinator" },
    { img: member3, name: "Michael Hayes", job: "Animal rights activist and community outreach manager" }
  ];

  const coreValues = [
    { title: "Compassion", description: "We treat every animal with empathy and care, understanding their unique needs and personalities.", icon: <FaHeart/> },
    { title: "Integrity", description: "We are committed to honest practices and transparency in all that we do for the animals and the community." , icon: <FaBalanceScale />},
    { title: "Community", description: "We believe in building a supportive community of animal lovers, volunteers, and adopters.", icon: <RiGlobalLine/>},
    { title: "Responsibility", description: "We take our role seriously in providing safe and loving environments for animals in need.", icon: <FaStar/> },
    { title: "Dedication", description: "Our team is dedicated to making a lasting impact on animal welfare.", icon: <FaFire/> }
  ];

  const partnerOrganizations = [
    { img: animalRescue, name: "Animal Rescue League", description: "Providing shelter and medical care to rescued animals.", info: "/animalRescue" },
    { img: animalClinic, name: "Paws & Claws Veterinary Clinic", description: "Our trusted partner for animal healthcare and vaccinations.", info: '/clinic' },
    { img: shelter, name: "Safe Haven Shelter", description: "A shared mission to give abandoned animals a second chance.", info: "/shelter" }
  ];

  return (
    <div>
    <div className='about-container'>
      <div className='about-container1'>
        <section>
          <h1 className='about-title'>About Us</h1>
          <p>At Pet Heaven, we are passionate about creating a safer, kinder world for animals in need, dedicating our efforts to providing them with the care, comfort, and compassion they deserve.</p>
        </section>
      </div>
      {/* Story Section */}
      <div className='story-section'>
        <section>
          <h1>Our Story</h1>
          <p>At Pet Heaven, we believe every animal deserves love, care, and a chance at a fulfilling life. It all began with a simple mission: to create a community where animals can find safety and kindness, and where people have a safe space to adopt or release pets with confidence.</p>
          <p>Founded by a group of passionate animal advocates, Pet Heaven is a sanctuary dedicated to helping pets in need. Whether it is providing shelter to stray animals, connecting pets with loving families, or offering a safe place for pet owners to release their pets if they can no longer care for them, we are committed to being there for our community and its animals.</p>
          <p>Every adoption helps a pet find a new family and a loving home. At the same time, our release program offers a compassionate solution for pet owners who may face life changes, ensuring their pets are cared for in a loving environment. We also work closely with veterinarians, trainers, and shelters to provide comprehensive support to every animal that enters our doors.</p>
          <p>Through dedication and compassion, Pet Heaven is more than a shelter; it is a community, a sanctuary, and a movement toward a kinder world for all animals. We invite you to join us in creating that world, one pet at a time.</p>
        </section>
        <img src={storyImg} alt='story' />
      </div>
      <div className='our-team'>
        <div>
          <h1>Meet Our Team</h1>
          <p>
          Meet the dedicated team behind Pet Heaven. We are veterinarians, rescue specialists, and compassionate volunteers. But above all, we are advocates for animals and their well-being.</p>
        </div>
        <section>
          {teamMembers.map((e, index) => (
            <div className='member' key={index}>
              <img src={e.img} alt='member' />
              <h2>{e.name}</h2>
              <h4>{e.job}</h4>
            </div>
          ))}
        </section>
      </div>
     {/* Core Values Section */}
      <div className='core-values-section'>
          <h1>Our Core Values</h1>
          <section>
            {coreValues.map((value, index) => (
              <div className='core-value' key={index}>
                <div className='core-icons'>{value.icon}</div>
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </div>
            ))}
          </section>
      </div>
    <div className='partners-section'>
        <h1>Our Partners</h1>
        <p>We are grateful for the support and collaboration of our partners who share our commitment to animal welfare.</p>
          <section>
            {partnerOrganizations.map((partner, index) => (
              <div className='partner' key={index}>
                <img src={partner.img} alt={partner.name} />
                <h2>{partner.name}</h2>
                <p>{partner.description}</p>
                <Link to={partner.info}>More Info</Link>
              </div>
            ))}
          </section>
    </div>
    </div>  
    <Footer/>
    </div>
  )
}

export default About