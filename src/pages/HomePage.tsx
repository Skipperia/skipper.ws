import React, { useState } from 'react';
import CoolPageTitle from '../components/CoolPageTitle/CoolPageTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../assets/IMG_1583.jpg'
import './Homepage.css'


const HomePage: React.FC = () => {

  return (<div>
    <CoolPageTitle title={"home"} />
    <div className="card">
      <h1>Hi</h1>
      <p>Here are some of my projects:</p>
      <div className="cards-container">
        <Card className="project-card" title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
      <div className="card-content">{"dsadas"}</div>
    </div>
  </div>);
}

export default HomePage;
