import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { listToDo, deleteToDo } from '../actions/index';

class ToDoList extends Component {
    componentDidMount() {
        this.props.listToDo();
    }
    onClickDelete(todo) {
        console.log(todo);
        this.props.deleteToDo(todo);
    }
    renderList() {
        return _.map(this.props.todolist, todo => {
           return (
               <li className="list-group-item" key={todo.todo_id}>
                 <Link to={`/todo/${todo.todo_id}`}>{todo.todo_name}
                 </Link>
                   <button className="btn btn-danger pull-xs-right"
                           onClick={this.onClickDelete.bind(this, todo)}>Delete</button>
               </li>
           );
        });
    }
    render() {
        console.log(this.props.todolist);
        return (
            <div className="div-container">
                <div className="text-xs-right">
                <Link to="/todo/new" className="btn btn-primary">
                    Add New
                </Link>
                </div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todolist: state.todolist
    }
}

export default connect(mapStateToProps, { deleteToDo, listToDo })(ToDoList);
