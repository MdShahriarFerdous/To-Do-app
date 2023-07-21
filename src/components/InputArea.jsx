import React from "react";

const InputArea = ({ text, changeEvent, clickEvent }) => {
	return (
		<div>
			<div className="form">
				<input value={text} type="text" onChange={changeEvent} />
				<button onClick={clickEvent}>
					<span>Add</span>
				</button>
			</div>
		</div>
	);
};

export default InputArea;
