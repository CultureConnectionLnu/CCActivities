import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import CCLogo from './assets/CCLogo.png';
import SocialIcons from './Socialmedia.jsx';

function App() {
  const cardData = [
    {
      id: 1,
      title: 'Card One',
      description: 'This is the first card.',
      image: CCLogo,
      bgColor: 'bg-yellow-200',
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'This is the second card.',
      image: CCLogo,
      bgColor: 'bg-blue-200',
    },
    {
      id: 3,
      title: 'Card Three',
      description: 'This is the third card.',
      image: CCLogo,
      bgColor: 'bg-red-200',
    },
    {
      id: 4,
      title: 'Card Frour',
      description: 'This is the four card.',
      image: CCLogo,
      bgColor: 'bg-cyan-200',
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
      y: index * 30,
      scale: 1 - index * 0.05,
    }),
    animate: (index) => ({
      y: -(index * 30),
      scale: 1 - index * 0.05,
      transition: { duration: 0.5 },
    }),
    exit: (index) => ({
      y: index * 30 + 50,
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
        className="relative w-[280px] h-[400px] mb-8"
        onClick={rotateCards}
        onWheel={handleScroll}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute left-0 w-full"
            style={{
              zIndex: cards.length - index,
            }}
            custom={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className={`card ${card.bgColor} shadow-xl border-2 border-black`}>
              <figure>
                <img src={card.image} alt={card.title} className="object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="mt-4">
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;