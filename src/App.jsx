import "./App.css";
import CCLogo from "./assets/CCLogo.png";
import SocialIcons from "./Socialmedia.jsx";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Welcome to My Website",
      description: "Discover amazing content and connect with us.",
      image: CCLogo,
    },
    {
      id: 2,
      title: "Our Services",
      description: "We offer a variety of services to cater to your needs.",
      image: CCLogo,
    },
    {
      id: 3,
      title: "About Us",
      description: "Learn more about our mission and values.",
      image: CCLogo,
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-xl mx-auto p-6">
        <div className="h-70 w-70 mx-auto sm:w-96 sm:h-96">
          <div className="aspect-square">
            <img
              src={CCLogo}
              className="rounded-full object-cover object-center cursor-pointer"
              alt="Logo"
            />
          </div>
        </div>
        {/* Scrollable Cards */}
        <div className="overflow-x-auto mt-6">
          <div className="flex space-x-4">
            {cardData.map((card) => (
              <div key={card.id} className="card w-64 bg-base-100 shadow-xl">
                <figure>
                  <img src={card.image} alt="Card" className="object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;