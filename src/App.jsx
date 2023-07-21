import React, { useState } from "react";
import InputArea from "./components/InputArea";
import Item from "./components/Item";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [text, setText] = useState("");
	const [items, setItems] = useState([]);
	const [completedItems, setCompletedItems] = useState([]);

	const handleChange = (event) => {
		const { value } = event.target;
		setText(value);
	};

	const handleClick = () => {
		if (text.trim() !== "") {
			const newItem = {
				id: uuidv4(),
				text: text,
			};
			setItems((prevValue) => {
				return [...prevValue, newItem];
			});
		}

		setText("");
	};

	const handleDelete = (id) => {
		setItems((prevValue) => {
			return prevValue.filter((item) => item.id !== id);
		});
		if (items.length === 1) {
			setCompletedItems([]);
		}
	};

	const handleDone = (id) => {
		setCompletedItems((prevCompletedItems) => {
			if (prevCompletedItems.includes(id)) {
				return prevCompletedItems.filter((itemId) => itemId !== id);
			} else {
				return [...prevCompletedItems, id];
			}
		});
	};

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>

			<InputArea
				text={text}
				changeEvent={handleChange}
				clickEvent={handleClick}
			/>

			<div>
				<ul>
					{items.map((item) => {
						return (
							<Item
								key={item.id}
								id={item.id} // Use the unique id of the item
								notes={item.text}
								onDelete={handleDelete}
								onDone={handleDone}
								onCompletedItems={completedItems}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default App;
