import React from 'react';
import PageContent from '../components/PageContent/PageContent';
import CoolPageTitle from '../components/CoolPageTitle/CoolPageTitle';
import "./About.css"
import myImage from '../assets/F945DC01-4D01-4214-9AAD-3D40CD3F12F6.png';


const AboutPage: React.FC = () => {
  return (
    <div>
      <CoolPageTitle title="About me" />
      <div className="about-card">
        <img id='my-image' src={myImage}></img>
        <div className="about-card-content">
          <h1>Hey</h1>
          I am Alex Kipper or mostly known as "Skipper".
          <br></br>
          I like to code and love to talk about programming
        </div>
      </div>
    </div>);
}

export default AboutPage;
