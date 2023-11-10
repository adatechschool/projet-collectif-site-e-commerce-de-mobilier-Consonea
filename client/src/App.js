//Ici on crée le composant de base App qui sert de layout à l'ensemble des pages
//on pourrait y mettre le header, le footer, etc...

import "./App.css";
import { default as Navbar } from "./components/Navbar";
// import { default as Card } from "./components/footer";

function App() {
  return (
    <div style={{ backgroundColor: '#FEFAE0', margin: "10em"}}>
      <Navbar />
    {/* <Card /> */}
  </div>
    
  );
}

export default App;

