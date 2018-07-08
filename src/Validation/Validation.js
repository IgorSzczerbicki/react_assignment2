import React from 'react'

const validation = (props) => {

	let validationResult = null;

	if (props.length > 5) validationResult = "Text long enough";
	else validationResult = "Text too short";

	return(
		<div>
			<p>{validationResult}</p>
		</div>
	)
};

export default validation;