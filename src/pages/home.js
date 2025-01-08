import React from 'react'
import '../css/home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className='home'>
      <section className='home-section-1' id='home-section-1'>
        <div className='home-section-1-container'>
          <div className='home-section-1-content'>
            <p>Hi There,</p>
            <h1>I'm Meet Senjaliya</h1>
            <div>I am a Full Stack Web and App Developer focused on creating dynamic, user-friendly, and efficient digital solutions.</div>
            <button>Contact us</button>
            <div className='home-section-1-social-icons'>
              <GitHubIcon className='icons' onClick={
                () => window.open('https://github.com/Meet57a', '_blank')
              } />
              <LinkedInIcon className='icons' onClick={
                () => window.open('https://www.linkedin.com/in/meet-senjaliya', '_blank')
              } />
              <EmailIcon className='icons' onClick={
                () => window.open('mailto:meetsenjali2018@gmail.com', '_blank')
              } />
            </div>
          </div>
          <div className='home-section-1-image'></div>
        </div>
      </section>
      <section className='home-section-2' id='home-section-2'>
        <div className='home-section-2-container'>
          <div className='home-section-2-left'>
            <div className='home-section-2-left-frame'>
              <div className='home-section-2-left-frame-image'></div>
            </div>
          </div>
          <div className='home-section-2-right'>
            <div className='home-section-2-right-content'>
              <h1>About <span>Me</span></h1>
              <p>I am a passionate Full Stack Web and App Developer with a strong programming background, focused on creating dynamic and user-friendly applications. I specialize in seamlessly integrating front-end and back-end technologies to deliver efficient and engaging solutions.</p>
              <br />
              <p>With a dedication to clean code and innovative problem-solving, I craft scalable, robust, and high-performing digital experiences. My work emphasizes reliability, functionality, and visually appealing designs that make a meaningful impact.</p>
              <button>Contact us</button>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section-3'>
        <div className='home-section-3-container'>
          <h1>My <span>Services</span></h1>
        </div>
      </section>
    </div>
  )
}

export default Home
