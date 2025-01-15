import React from 'react'
import '../css/services.css'
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import ApiIcon from '@mui/icons-material/Api';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';


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

const Services = () => {
    return (
        <div className='services'>
            <div className='services-container'>
                <h1>My <span>Services</span></h1>
                <div className='services-content'>
                    {services.map((service, index) => (
                        <div className='services-content-card' key={service.title}>
                            <div className='services-content-card-icon'>{service.icon}</div>
                            <div className='services-content-card-content'>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
