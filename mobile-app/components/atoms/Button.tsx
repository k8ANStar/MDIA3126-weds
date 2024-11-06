export default function Button({ onClick, children }) {
	const styles = {
		button: {
			padding: "10px 20px",
			fontSize: "16px",
			fontWeight: "bold",
			cursor: "pointer",
			backgroundColor: "#0070f3",
			color: "#fff",
			border: "none",
			borderRadius: "5px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			transition: "background-color 0.3s ease",
		},
	};

	return (
		<button style={styles.button} onClick={onClick}>
			{children}
		</button>
	);
}
