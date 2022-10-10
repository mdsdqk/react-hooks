import React, { useState } from "react";

export default function () {
	const [showMessage, setShowMessage] = useState(false);
	const [form, setForm] = useState({
		name: "",
		age: "",
		favs: "",
	});

	const [formValues, setFormValues] = useState({
		name: "",
		age: "",
		favs: "",
	});

	const handleChange = (e) => {
		const updatedFormValues = {
			...form,
			[e.target.id]: e.target.value
		};


		setForm(updatedFormValues);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //prevent page load (default behaviour)
		setFormValues(form);
		setShowMessage(true);
		clearForm();
	};

	function clearForm() {
		console.log("called");
		setForm({
			name: "",
			age: "",
			favs: "",
		});
	}

	return (
		<>
			<form onSubmit={handleSubmit}>

				<label htmlFor="name" hidden>Name</label>
				<input id="name" type="text" placeholder="Enter your name"
					value={form.name} onChange={handleChange} />

				<label htmlFor="age" hidden>Age</label>
				<input id="age" type="number" placeholder="Enter your age"
					value={form.age} onChange={handleChange} />

				<label htmlFor="favs" hidden>Favs</label>
				<input id="favs" type="text" placeholder="Enter your favs"
					value={form.favs} onChange={handleChange} />

				<button type="submit">Submit</button>
			</form>

			{showMessage && (
				<p>Hi {formValues.name}, good to know that you like {formValues.favs}!</p>
			)}
		</>
	);
}