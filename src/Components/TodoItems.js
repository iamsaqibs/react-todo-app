import React, {Component} from 'react';

class TodoItems extends Component {
    createItems(item){
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        let entries = this.props.entries;
        let listItems = entries.map(this.createItems)

        return (
            <ul className={'list'}>
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;