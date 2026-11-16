import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  return (
    <>
      <Header
        cartCount={cart.length}
        onSearch={setSearchTerm}
      />

      <main>
        <Hero />
        <ProductSection
          onAdd={addToCart}
          searchTerm={searchTerm}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;