export default function Page() {
	// createa product page
	// create a header
	// create a button to request data
	// request data
	// store the data inmy state (react state)
	// output the data

	return (
		<div className="bg-indigo-300 p-4">
			<header className="border-4 border-black p-4 mb-4 text-slate-900">
				<h1 className="text-4xl mb-6 text-center">
					Welcome to My Product Page
				</h1>
				<button className="border-black border-2 p-2 rounded-lg bg-emerald-100 hover:bg-emerald-400 active:bg">
					Fetch products!
				</button>
			</header>
		</div>
	);
}
