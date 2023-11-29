import { Wrapper, Title, ListGroup } from "./ToDoList.styled";

import arr from "../../todo.json";

import ToDo from "../ToDo/ToDo";

import { Component } from "react";

class ToDoList extends Component {
    state = {
    todoList: arr,
    }

    handleCheckCompleted = (id) =>{
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.map((todo) => todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo)
        }
    })
    }
    handleDelete = (id) => {
        this.setState((prevState) => { 
            return {
                todoList:  prevState.todoList.filter((todo) => todo.id !== id)
            }
        } )
    }

    render() {
        return (
            <Wrapper>
                <Title>My To-Do list</Title>
                    <ListGroup>
                    {this.state.todoList.map((todo) => (<ToDo key={todo.id} todo={todo} handleCheckCompleted={this.handleCheckCompleted} handleDelete={this.handleDelete } />))}
                    </ListGroup>
            </Wrapper>
        )
}
}

export default ToDoList;