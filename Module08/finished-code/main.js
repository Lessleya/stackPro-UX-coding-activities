// Create a React component that displays a list of items
class ItemList extends React.Component {
	render() {
		return (
			<ul className="list-group">
				{this.props.items.map(item => <li className="list-group-item" key={item.id}>{item.name}</li>)}
			</ul>
		);
	}
}

// Create an array of items
const items = [
	{ id: 1, name: 'Item 1' },
	{ id: 2, name: 'Item 2' },
	{ id: 3, name: 'Item 3' }
];

// Render the component to the page
ReactDOM.render(<ItemList items={items} />, document.getElementById('root'));
