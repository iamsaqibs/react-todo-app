import React, {Component} from 'react';

class TodoList extends Component {
    constructor (props){
        super(props);

        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem (e){
        if (this._inputElement.value !== ''){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
            };

            this.setState((prevState)=> {
                return prevState.item.concat(newItem);
            })
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
            </div>
        );
    }
}

export default TodoList;