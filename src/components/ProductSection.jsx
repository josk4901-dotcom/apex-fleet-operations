import { useState } from "react";
import products from "../data/product";

function ProductSection({ onAdd, searchTerm }) {
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch =
      `${product.name} ${product.seller}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="products-section" id="products">
      <div className="products-heading">
        <div>
          <p className="section-label">EXPLORE THE EDIT</p>
          <h2>Find your next favourite</h2>
          <div className="category-tabs">
            {["All", "Home", "Style", "Tech"].map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="section-description">
          A selection of finds for your home, your wardrobe,
          and everywhere in between.
        </p>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <p className="seller">{product.seller}</p>
            <h3>{product.name}</h3>

            <div className="product-bottom">
              <span>{product.price}</span>
              <button onClick={() => onAdd(product)}>
                Add +
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty-message">No products found.</p>
      )}
    </section>
  );
}

export default ProductSection;