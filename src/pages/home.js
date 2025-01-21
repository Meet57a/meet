
import '../css/home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import ApiIcon from '@mui/icons-material/Api';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';
import { IconBxlReact as ReactIcon } from '../assets/svgs/react-icon';
import { IconLogoNodejs as NodejsIcon } from '../assets/svgs/node-js-icon';
import { IconMongodb as MongoIcon } from '../assets/svgs/mongo-icon';
import { IconBrandFlutter as FlutterIcon } from '../assets/svgs/flutter-icon';
import { IconBxlPython as PythonIcon } from '../assets/svgs/py-icon';
import { IconBrandMysql as MySQLIcon } from '../assets/svgs/mysql-icon';
import { IconJava as JavaIcon } from '../assets/svgs/java-icon'
import { IconDart as DartIcon } from '../assets/svgs/dart-icon'
import { IconBxlTypescript as TypeScriptIcon } from '../assets/svgs/ts-icon'
import { IconJavascriptFill as JavaScriptIcon } from '../assets/svgs/js-icon'
import { useState } from 'react';
import React from 'react';


const style = {
  fontSize: '3rem',
  color: '#eab308'
}

const services = [
  {
    icon: <LayersIcon style={style} />,
    title: 'Full Stack Development',
    description: 'I specialize in full stack development to create dynamic and efficient web applications and Android Applications.'
  },
  {
    icon: <WebIcon style={style} />,
    title: 'Web Development',
    description: 'I create responsive, user-friendly, and efficient websites that deliver a seamless digital experience.'
  },
  {
    icon: <AndroidIcon style={style} />,
    title: 'App Development',
    description: 'I develop dynamic, high-performing, and visually appealing applications that engage users.'
  },
  {
    icon: <ApiIcon style={style} />,
    title: 'API Integration',
    description: 'I integrate APIs to enhance the functionality and features of websites and applications.'
  },
  {
    icon: <TerminalIcon style={style} />,
    title: 'Programming',
    description: 'I specialize in programming languages such as C, Java, JavaScript and Python to create innovative solutions.'
  },
  {
    icon: <StorageIcon style={style} />,
    title: 'Database Management',
    description: 'I design and manage databases to store, retrieve, and manipulate data efficiently and securely.'
  },
]

const skills = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    percentage: '80%'
  },
  {
    icon: <AndroidIcon />,
    title: 'App Development',
    percentage: '85%'
  },
]

const technologies = [
  {
    icon: <ReactIcon />,
    title: 'React',
    percentage: '85%'
  },
  {
    icon: <NodejsIcon />,
    title: 'Node.js',
    percentage: '80%'
  },
  {
    icon: "ex",
    title: 'Express.js',
    percentage: '80%'
  },
  {
    icon: <MongoIcon />,
    title: 'MongoDB',
    percentage: '90%'
  },
  {
    icon: <FlutterIcon />,
    title: 'Flutter',
    percentage: '85%'
  },
]

const languages = [
  {
    icon: '',
    title: 'C',
    percentage: '90%'
  },
  {
    icon: <JavaIcon />,
    title: 'Java',
    percentage: '85%'
  },
  {
    icon: <JavaScriptIcon />,
    title: 'JavaScript',
    percentage: '80%'
  },
  {
    icon: <PythonIcon />,
    title: 'Python',
    percentage: '80%'
  },
  {
    icon: < DartIcon />,
    title: 'Dart',
    percentage: '85%'
  },
  {
    icon: <TypeScriptIcon />,
    title: 'TypeScript',
    percentage: '90%'
  },
  {
    icon: <MySQLIcon />,
    title: 'SQL',
    percentage: '85%'
  }
]

const Home = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bda9a88d-afc0-4a36-a003-eeddfcdc8d73");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handlescroll = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className='home'>
      <section className='home-section-1' id='home-section-1'>
        <div className='home-section-1-container'>
          <div className='home-section-1-content'>
            <div className='home-section-1-content-header'>
              <p>Hello, <span>It's Me</span></p>
              <h1>Meet Senjaliya</h1>
              <h3>And I'm a <span>Web Developer & App Developer</span></h3>
            </div>
            <div>I am a Full Stack Web and App Developer focused on creating dynamic, user-friendly, and efficient digital solutions.</div>
            <div className='home-section-1-content-clicks'>
              <button onClick={handlescroll}>Contact us</button>
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
            
              <button onClick={handlescroll}>Contact us</button>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section-3' id='home-section-3'>
        <div className='home-section-3-container'>
          <div className='home-section-3-header'>
            <h1>My <span>Services</span></h1>
            <Link to='/meet/services'>View All Services</Link>
          </div>
          <div className='home-section-3-content'>
            {services.map((service, index) => (
              index < 4 && <div className='home-section-3-content-card' key={service.title}>
                <div className='home-section-3-content-card-icon'>{service.icon}</div>
                <div className='home-section-3-content-card-content'>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='home-section-4' id='home-section-4'>
        <div className='home-section-4-container'>
          <div className='home-section-4-header'>
            <h1>My <span>Skills</span></h1>
            <div className='home-section-4-content'>
              {skills.map(skill => (
                <div className='home-section-4-content-card' key={skill.title}>
                  <p className='home-section-4-content-card-title'><div>{skill.icon} {skill.title}</div> <span>{skill.percentage}</span></p>
                  <div className='home-section-4-content-card-bar'>
                    <div className='home-section-4-content-card-bar-fill' style={{ width: `${skill.percentage}` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className='home-section-4-header'>
            <h1>Techno<span>logies</span></h1>
            <div className='home-section-4-content'>
              {technologies.map(tech => (
                <div className='home-section-4-content-card' key={tech.title}>
                  <p className='home-section-4-content-card-title'><div>{tech.icon} {tech.title}</div> <span>{tech.percentage}</span></p>
                  <div className='home-section-4-content-card-bar'>
                    <div className='home-section-4-content-card-bar-fill' style={{ width: `${tech.percentage}` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className='home-section-4-header'>
            <h1>Langu<span>ages</span></h1>
            <div className='home-section-4-content'>
              {languages.map(lang => (
                <div className='home-section-4-content-card' key={lang.title}>
                  <p className='home-section-4-content-card-title'><div>{lang.icon} {lang.title}</div> <span>{lang.percentage}</span></p>
                  <div className='home-section-4-content-card-bar'>
                    <div className='home-section-4-content-card-bar-fill' style={{ width: `${lang.percentage}` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='home-section-5' id='contact'>
        <div className='home-section-5-container'>
          <h1>Contact <span>Me</span></h1>
          <div className='home-section-5-content-container'>
            <form className='home-section-5-content' onSubmit={onSubmit}>
              <div>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' required />
              </div>
              <div>
                <label htmlFor="">Your E-mail</label>
                <input type="email" name='email' required />
              </div>
              <div>
                <label htmlFor="">Write Message</label>
                <textarea name="message" id="" cols="30" rows="10" ></textarea>
              </div>
              <button>Send Message</button>
              <div>{result}</div>
            </form>
            <div className='home-section-5-content-image-container'>
              <div className='home-section-5-content-image'></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
