import React, { useState, useEffect } from "react";

export default function () {
	const apiUrl = "https://dog.ceo/api/breeds/image/random";
	const [dogPics, setDogPics] = useState([]);
	const [loadPics, setLoadPics] = useState(false);

	async function loadDogPics() {
		const num = Math.random() * 10;

		const data = await (await fetch(`${apiUrl}/${num}`)).json();

		setDogPics(data.message);
	}

	useEffect(() => {
		loadDogPics();
	}, []);

	useEffect(() => {
		if (loadPics) {
			loadDogPics();
			setLoadPics(false);
		}
	}, [loadPics]);

	return (
		<>
			<h2>Random Dog Images</h2>
			<button onClick={() => { setLoadPics(true); setDogPics([]); }}>Load Random Dog Pics</button>
			<p>
				{dogPics.length <= 0 ? "...Loading" : `We've got ${dogPics.length} pics for you`}
			</p>
			<div className="img-container">
				{dogPics.map((dogPic) => {
					return <img key={dogPic} src={dogPic} alt="random dog image" />;
				})}
			</div>
		</>
	);
}