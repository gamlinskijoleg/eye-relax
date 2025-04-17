import React from "react";
import eyeImage from "../components/misc/images/eye.png";

interface propsTypes {
	styles?: object;
}

function Eye(props: propsTypes) {
	return <img className="eye-image" alt="eye image" src={eyeImage} style={props.styles} />;
}

export default Eye;
