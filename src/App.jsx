import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import CCLogo from './assets/CCLogo.png';
import SocialIcons from './Socialmedia.jsx';

function App() {
  const cardData = [
    {
      id: 1,
      title: 'Climbing',
      date: 'Every Monday',
      time: '17:30',
      location: 'Bollgatan 1 (Town)',
      bgColor: 'bg-yellow-300',
    },
    {
      id: 2,
      title: 'Board Games',
      date: 'Every Tuesday',
      time: '18:00',
      location: 'F-Building (Campus)',
      bgColor: 'bg-blue-300',
    },
    {
      id: 3,
      title: 'Fun Swedish',
      date: 'Every Thursday',
      time: '20:00',
      location: 'F-Building (Campus)',
      bgColor: 'bg-red-300',
    },
    {
      id: 4,
      title: 'Crafts',
      date: 'Every Friday',
      time: '18:00',
      location: 'B-Building (Campus)',
      bgColor: 'bg-green-300',
    },
  ];

  const [cards, setCards] = useState(cardData);

  const rotateCards = () => {
    setCards((prevCards) => {
      const lastCard = prevCards[prevCards.length - 1];
      return [lastCard, ...prevCards.slice(0, -1)];
    });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setCards((prevCards) => {
        const lastCard = prevCards[prevCards.length - 1];
        return [lastCard, ...prevCards.slice(0, -1)];
      });
    } else {
      rotateCards();
    }
  };

  // Animation variants
  const variants = {
    initial: (index) => ({
      y: index * 80,
      scale: 1 - index * 0.05,
    }),
    animate: (index) => ({
      y: -(index * 80),
      scale: 1 - index * 0.05,
      transition: { duration: 0.5 },
    }),
    exit: (index) => ({
      y: index * 80 + 50,
      scale: 1 - index * 0.05,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      {/* Logo Section */}
      <div className="h-70 w-70 mx-auto sm:w-96 sm:h-96 mb-6">
        <div className="aspect-square">
          <img
            src={CCLogo}
            className="rounded-full object-cover object-center cursor-pointer"
            alt="Logo"
          />
        </div>
      </div>

      {/* Card Stack */}
      <div
        className="relative w-[280px] h-[500px] texts-bottom mx-auto"
        onClick={rotateCards}
        onWheel={handleScroll}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute bottom-0 left-0 w-full"
            style={{
              zIndex: cards.length - index,
            }}
            custom={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className={`card ${card.bgColor} text-center rounded-2 border-2 border-black shadow-black shadow-xl`}>
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-black text-center text-2xl font-bold top-10">
                  {card.title}
                </h2>
                <div className='text-left font-bold'>
                  <p className="p-2 text-gray-700">Date: {card.date}</p>
                  <p className="p-2 text-gray-700">Time: {card.time}</p>
                  <p className="p-2 text-gray-700">Location: {card.location}</p>
                </div>
                <div className="card-actions">
                  <button className="btn mt-2 bg-blue-500 text-black text-center p-12 rounded py-3 border-2 border-black shadow-black shadow-md hover:shadow-none  hover:bg-blue-200 transition-all hover:translate-x-1 translate-y-1">More</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
        <SocialIcons />
    </div>
  );
}

export default App;