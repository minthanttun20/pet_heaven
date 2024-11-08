import React from 'react'
import storyImg from './images/story.avif'
import member1 from './images/member1.jpg'
import member2 from './images/member2.jpg'
import member3 from './images/member3.jpg'


const About = () => {
  const teamMembers = [
    { img: member1, name: "Emily Rivers", job: "Veterinarian and animal welfare advocate" },
    { img: member2, name: "Jake Turner", job: "Rescue specialist and volunteer coordinator" },
    { img: member3, name: "Michael Hayes", job: "Animal rights activist and community outreach manager" }
  ];
  return (
    <div className='about-container'>
      <div className='about-container1'>
        <section>
          <h1 className='about-title'>About Us</h1>
          <p>At Pet Heaven, we are passionate about creating a safer, kinder world for animals in need, dedicating our efforts to providing them with the care, comfort, and compassion they deserve.</p>
        </section>
      </div>

      <div className='story-section'>
        <section>
          <h1>Our Story</h1>
          <p>At Pet Heaven, we believe every animal deserves love, care, and a chance at a fulfilling life. It all began with a simple mission: to create a community where animals can find safety and kindness, and where people have a safe space to adopt or release pets with confidence.</p>
          <p>Founded by a group of passionate animal advocates, Pet Heaven is a sanctuary dedicated to helping pets in need. Whether it’s providing shelter to stray animals, connecting pets with loving families, or offering a safe place for pet owners to release their pets if they can no longer care for them, we are committed to being there for our community and its animals.</p>
          <p>Every adoption helps a pet find a new family and a loving home. At the same time, our release program offers a compassionate solution for pet owners who may face life changes, ensuring their pets are cared for in a loving environment. We also work closely with veterinarians, trainers, and shelters to provide comprehensive support to every animal that enters our doors.</p>
          <p>Through dedication and compassion, Pet Heaven is more than a shelter; it’s a community, a sanctuary, and a movement toward a kinder world for all animals. We invite you to join us in creating that world, one pet at a time.</p>
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
          {teamMembers.map((e) => (
            <div className='member'>
              <img src={e.img} alt='member' />
              <h2>{e.name}</h2>
              <h4>{e.job}</h4>
            </div>
          ))}
        </section>
      </div>
    </div>  
  )
}

export default About