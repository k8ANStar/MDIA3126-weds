"use client";
import { useState } from "react";

export default function Page() {
	// create a product page X
	// create a header X
	// create a button to request data X
	// request data
	// store the data inmy state (react state)
	// output the data

	const [products, setProducts] = useState(null);
	const API_ENDPOINT =
		"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

	async function fetchProducts() {
		const response = await fetch(API_ENDPOINT);
		// waiting for the response
		// taking response and assigning it to another variable
		console.log(response);
		const data = await response.json();
		console.log(data);

		setProducts(data);
	}

	const ProductList = () => {
		if (products) {
			let productsList = [];
			products.forEach((product, index) => {
				productsList.push(
					<li key={index}>{product.name}</li>,
					<li key={index}>{product.price}</li>,
					<li key={index}>{product.name}</li>
				);
			});
			return (
				<div className="border-4 border-black p-4 mb-4 text-slate-900 rounded-lg bg-indigo-100">
					<ul>{productsList}</ul>
				</div>
			);
		}
		return (
			<div className="border-4 border-black p-4 mb-4 text-slate-900 rounded-lg bg-indigo-100">
				No products right now!
			</div>
		);
	};

	return (
		<div className="bg-indigo-300 p-4">
			<header className="border-4 border-black p-4 mb-4 text-slate-900 rounded-lg bg-indigo-100">
				<h1 className="text-4xl mb-6 text-center">
					Welcome to My Product Page
				</h1>
				<button
					className="border-black border-2 p-2 rounded-lg bg-teal-100 hover:bg-emerald-400 active:bg-emerald-500"
					onClick={fetchProducts}
				>
					Fetch products!
				</button>
			</header>
			<ProductList />
		</div>
	);
}