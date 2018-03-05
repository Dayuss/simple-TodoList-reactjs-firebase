import React, { Component } from 'react';

class Lists extends Component {

    render() {
        const data = this.props.todos
        let Todo = Object.keys(data).map((index) =>{
            return (
                        <li key={index}>
                            <span
                            onClick={() => this.props.toggle(data[index].active, data[index].id)}
                                className={data[index].active ? 'name-list text-strike' : 'name-list normal'}
                            >
                                {data[index].todo} 
                            </span>
                            <span 
                                className='remove-btn'
                                onClick={() => this.props.remove(data[index].id)}
                            >
                                X
                            </span>
                        </li>
                    )
        })
        
        return (
            <ul>
                { Todo }
            </ul>
        )
    }
}

export default Lists