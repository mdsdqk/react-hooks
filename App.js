import React, { useState } from "react";
import UseEffectExample from "./components/UseEffectExample";
import UseStateExample from "./components/UseStateExample";
import "./styles.css";


export default function (props) {
	const [example, setExample] = useState("UseStateExample");

	return (
		<>
			<h1>Explore Hooks</h1>
			<h2>Choose an example</h2>
			<button onClick={() => setExample("UseStateExample")}>Use State Example</button>
			<button onClick={() => setExample("UseEffectExample")}>Use Effect Example</button>
			<div className="container">
				{example === "UseStateExample" ? (
					<UseStateExample></UseStateExample>
				) : (
					<UseEffectExample></UseEffectExample>
				)
				}
			</div>
		</>
	);
}