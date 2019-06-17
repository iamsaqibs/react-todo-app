import React, {Component} from 'react';

class TodoItems extends Component {


    constructor (props) {
        super(props);

        this.createItems = this.createItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    deleteItem(key){
        // console.log(key);
        this.props.delete(key);
    }

    createItems(item){
        return <li key={item.key} onClick={ () => this.deleteItem(item.key)}>{item.text}</li>
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