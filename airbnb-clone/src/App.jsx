import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <section className="cards-list">
        <Card />
      </section>
    </>
  );
}

export default App;
