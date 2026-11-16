function Header({ cartCount, onSearch }) {
  return (
    <>
      <div className="announcement">
        A little of everything. A lot to love.
      </div>

      <header className="header">
        <div className="logo">
          soko yetu<span>.</span>
        </div>

        <form
          className="search-box"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(e.target.elements.search.value);
          }}
        >
          <input
            name="search"
            type="text"
            placeholder="Search products, sellers, and more..."
          />
          <button type="submit">Search</button>
        </form>

        <div className="cart">
          <span className="cart-dot"></span>
          Basket <strong>{cartCount}</strong>
        </div>
      </header>
    </>
  );
}

export default Header;