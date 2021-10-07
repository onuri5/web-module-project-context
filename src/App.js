import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import { productContext } from './contexts/productContext';
import { cartContext } from './contexts/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(item);
		console.log(cart)
	};

	return (
		<cartContext.Provider value={{ cart }}>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<productContext.Provider value={{ products, addItem}}>
					<Route exact path="/">
						<Products />
					</Route>
				</productContext.Provider>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
		</cartContext.Provider>
	);
}

export default App;
