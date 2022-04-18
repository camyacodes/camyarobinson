import React from "react";

export default function TypeWriter() {
	var i = 0;
	var txt = "Lorem ipsum dummy text blabla.";
	var speed = 50;

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById("demo").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	return (
		
		<div className="screen">
			<h1>Typewriter</h1>

			<button onClick={typeWriter}>Click me</button>

			<p id="demo"></p>
		</div>
	);
}
