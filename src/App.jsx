import "./App.css";
import CCLogo from "./assets/CCLogo.png";
import SocialIcons from "./Socialmedia.jsx";

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen">
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
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;
