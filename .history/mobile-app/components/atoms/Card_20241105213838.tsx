export default function Card({ title, imageUrl, date }) {
	const styles = {
		card: {
			border: "1px solid #ccc",
			padding: "10px",
			width: "100%",
			maxWidth: "250px",
			textAlign: "center",
			borderRadius: "8px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		},
		image: {
			width: "100%",
			height: "auto",
			borderRadius: "8px",
		},
		title: {
			fontSize: "18px",
			fontWeight: "bold",
			margin: "10px 0",
			color: "#333",
		},
		date: {
			fontSize: "14px",
			color: "#777",
		},
		noImageText: {
			color: "#999",
			fontStyle: "italic",
		},
	};

	return (
		<div style={styles.card}>
			{imageUrl ? (
				<img src={imageUrl} alt={title} style={styles.image} />
			) : (
				<p style={styles.noImageText}>No Image</p>
			)}
			<h3 style={styles.title}>{title}</h3>
			<p style={styles.date}>{date}</p>
		</div>
	);
}
