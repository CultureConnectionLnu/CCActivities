import { useState } from 'react';
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
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'This is the second card.',
      image: CCLogo,
    },
    {
      id: 3,
      title: 'Card Three',
      description: 'This is the third card.',
      image: CCLogo,
    },
  ];

  const [cards, setCards] = useState(cardData);

  const rotateCards = () => {
    setCards((prevCards) => {
      const [firstCard, ...rest] = prevCards;
      return [...rest, firstCard];
    });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      rotateCards();
    } else {
      setCards((prevCards) => {
        const lastCard = prevCards[prevCards.length - 1];
        return [lastCard, ...prevCards.slice(0, -1)];
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
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
        className="relative w-[280px] h-[400px]"
        onClick={rotateCards}
        onWheel={handleScroll}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute left-0 w-full transition-transform duration-500 ${
              index === 0 ? 'animate-flip' : ''
            }`}
            style={{
              top: `${index * 30}px`,
              zIndex: cards.length - index,
            }}
          >
            <div className="card bg-base-100 shadow-xl">
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
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <SocialIcons />
    </div>
  );
}

export default App;