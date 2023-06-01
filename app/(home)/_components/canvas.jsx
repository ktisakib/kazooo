"use client"
import React, { useRef, useEffect } from "react";
import styles from "./canvas.module.css";
import { Gradient } from "./gradient";
const Canvas = (props) => {
	const canvasRef2 = useRef(null);
	const gradient = new Gradient();
	useEffect(() => {
		gradient.initGradient("#gradient-canvas");
	}, []);
	return (
		<canvas
			// className="canvas"
			className={styles.canvas}
			id="gradient-canvas"
			ref={canvasRef2}
			{...props}
			data-transition-in
		/>
	);
};
export default Canvas;