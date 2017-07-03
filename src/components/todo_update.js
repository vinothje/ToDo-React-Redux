import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newToDo } from '../actions/index';

class ToDoUpdate extends Component {
    onSubmitClick(values) {
        console.log(values);
        new Promise((resolve, reject) => {
            this.props.newToDo(values);
            resolve('success');
        }).then((sucess) => {
            this.props.history.push("/");
        });
    }
    renderField(field) {
        return (
          <div className="form-group">
              <label>{field.label}</label>
              <input type="text"
                     className="form-control"
                     value="abcd"
                     placeholder={field.val}
                     {...field.input}
              />
          </div>
        );
    }
    render() {
        console.log('ID:' + this.props.match.params.id);
        console.log('todo list', this.props.todolist);
        let todo_obj = {};
        if(this.props.match.params.id) {
            todo_obj = _.find(this.props.todolist, (todo) => { return todo.todo_id == this.props.match.params.id } );
            console.log('too obj ', todo_obj);
        }
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmitClick.bind(this))}>
                <Field
                    name="todo_id"
                    label="ToDo ID"
                    val={todo_obj ? todo_obj.todo_id : ''}
                    component={this.renderField}
                />
                <Field
                    name="todo_name"
                    label="ToDo Name"
                    val={todo_obj ? todo_obj.todo_name : ''}
                    component={this.renderField}
                />
                <Field
                    name="todo_desc"
                    label="ToDo Desc"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link
                    to="/">Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    console.log(values);
}

function mapPropsToState(state) {
    return {
        todolist : state.todolist
    }
}

export default reduxForm({
    validate,
    form: 'NewToDoForm'
})(connect(mapPropsToState, {newToDo}) (ToDoUpdate));
