import React, {Component} from 'react';
import TodoItems from './TodoItems';


//TODO: Only styling is remaining

class TodoList extends Component {
    constructor (props){
        super(props);

        this.state = {
            items: [],
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }


    deleteItems(key){
        let afterDelete = this.state.items.filter((item)=> {
            return item.key !== key;
        });

        this.setState(
            {
                items: afterDelete,
            }
        )
    }

    addItem (e){
        if (this._inputElement.value !== ''){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem),
                };
            });

            this._inputElement.value = '';

            // console.log(this.state.items);

            e.preventDefault();
        }
    }

    render() {
        return (
            <div className={'todoListMain'}>
                <div className={'header'}>
                    <form onSubmit={this.addItem}>
                        <input type="text" ref={(a)=> this._inputElement = a} placeholder={'Enter Task'}/>
                        <button type={'submit'}>Add</button>
                    </form>
                </div>

                <TodoItems entries={this.state.items} delete={this.deleteItems}/>
            </div>
        );
    }
}

export default TodoList;