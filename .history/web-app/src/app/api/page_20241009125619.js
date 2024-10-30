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
				<button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
					Fetch products!
				</button>
			</header>
		</div>
	);
}
