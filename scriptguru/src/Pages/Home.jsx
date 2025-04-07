import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Airpod from '../assets/Airpod.jpg';
import Watch from '../assets/watch.webp';
import Monitor from '../assets/monitor.webp';
import Shave from '../assets/shave.jpg';
import Cofee from '../assets/Coffee.jpg';
import Cycle from '../assets/cycle.jpeg';
import Gym from '../assets/gym.jpg';
import Toys from '../assets/toys.jpeg';
import Toy from '../assets/toy.webp';
import Pen from '../assets/pen.jpg';
import Soft from '../assets/soft.jpeg';
import Dry from '../assets/Dry.jpeg';
import Treadmil from '../assets/Treadmil.jpeg';
import Yoga from '../assets/yoga.jpeg';
import Oats from '../assets/Oats.jpeg';
import Spreads from '../assets/Spreads.jpeg';
import Puzzle from '../assets/Puzzle.jpg';





const FlipkartMockHome = () => {



  const electronics = [
    { name: 'Best Truewireless H...', price: 'Grab Now', image: Airpod },

    { name: 'Noise Smartwatches', price: 'From ₹1,099', image: Watch },

    { name: 'Monitors', price: 'From ₹9999', image:  Monitor},

    { name: 'Monitors', price: 'From ₹7,949', image: Monitor },

    { name: 'ViewSonic Monitors', price: 'From ₹10,000', image: Monitor },
    
    { name: 'Best of Shavers', price: 'From ₹1,649', image: Shave },
  ];



  const beautyAndToys = [
    { name: 'Coffee Powder', offer: 'Up to 80% Off', image: Cofee },

    { name: 'Geared Cycles', offer: 'Up to 70% Off', image: Cycle },

    { name: 'Gym Essentials', offer: 'From ₹139', image: Gym },

    { name: 'Remote Control Toys', offer: 'Up to 80% Off', image: Toys },

    { name: 'Best of Action Toys', offer: 'Up to 70% Off', image: Toy },

    { name: 'Top Selling Stationery', offer: 'From ₹49', image: Pen },

    { name: 'Soft Toys', offer: 'Up to 70% Off', image: Soft },
  ];

  const sportsHealthcare = [
    { name: 'Non-Geared Cycles', offer: 'Up to 40% Off', image: Cycle },

    { name: 'Dry Fruits', offer: 'Up to 75% Off', image: Dry },

    { name: 'Treadmill, Exercise B...', offer: 'Up to 70% Off', image: Treadmil },

    { name: 'Yoga Mat', offer: 'From ₹159', image: Yoga },

    { name: 'Food Spreads', offer: 'Up to 75% Off', image: Spreads },

    { name: 'Puzzles & Cubes', offer: 'From ₹79', image: Puzzle },

    { name: 'Breakfast Cereal', offer: 'Up to 75% Off', image: Oats },
  ];

  const renderSection = (title, items) => (

    <div className="mb-8">

      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        
        
        
        {items.map((item, index) => (<a href="#" key={index} className="bg-white rounded-2xl shadow-md p-4 text-center block hover:shadow-lg transition-shadow duration-300"> 


            <img src={item.image} alt={item.name} className="h-24 w-full object-contain mb-2 rounded"/>
            <div className="text-sm font-medium">{item.name}</div>
            <div className="text-xs text-gray-600">{item.price || item.offer}</div>


          </a>
        ))}


      </div>
    </div>
  );

  return (
    <div className="p-4 bg-gray-100">
      
      
      <Header />

      {renderSection('Best of Electronics', electronics)}

      {renderSection('Beauty, Food, Toys & more', beautyAndToys)}

      {renderSection('Sports, Healthcare & more', sportsHealthcare)}

      <Footer />
    </div>
  );
};

export default FlipkartMockHome;
