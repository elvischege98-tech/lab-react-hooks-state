import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import Cart from './components/Cart'
import DarkModeToggle from './components/DarkModeToggle'

const App = () => {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle />

      <br />
      <br />

      <label>Filter by Category: </label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App