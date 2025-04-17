import React from "react";

interface propsTypes {
	styles?: object;
}

function Ball(props: propsTypes) {
	return <div className="ball" style={props.styles}></div>;
}

export default Ball;
