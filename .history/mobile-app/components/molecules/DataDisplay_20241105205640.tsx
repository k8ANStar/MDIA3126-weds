"use client";
import { useState } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

export default function DataDisplay() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			setError("");

			// Fetch data from the Met Museum API
			const response = await fetch(
				"https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=cat"
			);
			const result = await response.json();

			// Fetch details for the first 5 objects
			const promises = result.objectIDs
				.slice(0, 5)
				.map((id) =>
					fetch(
						`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
					).then((res) => res.json())
				);

			const artworks = await Promise.all(promises);
			setData(artworks);
		} catch (error) {
			setError("Failed to load data. Please try again.");
		}
	};

	const clearData = () => {
		setData([]);
	};

	// Styles defined in a const object
	const styles = {
		container: {
			textAlign: "center",
			padding: "20px",
		},
		buttonContainer: {
			display: "flex",
			justifyContent: "center",
			gap: "10px",
			marginBottom: "20px",
		},
		errorText: {
			color: "red",
			fontSize: "14px",
			margin: "10px 0",
		},
		cardsContainer: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			gap: "20px",
		},
	};

	return (
		<div style={styles.container}>
			<div style={styles.buttonContainer}>
				<Button onClick={fetchData}>Fetch Artworks</Button>
				<Button onClick={clearData}>Clear Artworks</Button>
			</div>
			{error && <p style={styles.errorText}>{error}</p>}
			<div style={styles.cardsContainer}>
				{data.map((item) => (
					<Card
						key={item.objectID}
						title={item.title}
						imageUrl={item.primaryImage}
						date={item.objectDate}
					/>
				))}
			</div>
		</div>
	);
}
