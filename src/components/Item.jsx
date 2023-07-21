import React from "react";

const Item = ({ notes, id, onDelete, onDone, onCompletedItems }) => {
	const completedItems = onCompletedItems.includes(id);

	return (
		<li
			style={{
				textDecoration: onCompletedItems.includes(id)
					? "line-through"
					: "none ",
			}}
		>
			{notes}
			<button
				className="done-button"
				onClick={() => {
					onDone(id);
				}}
			>
				{completedItems ? "Completed ✔" : "Click to Done"}
			</button>

			<button
				onClick={() => {
					onDelete(id);
				}}
				className="remove-button"
			>
				Delete ✖
			</button>
		</li>
	);
};

export default Item;
