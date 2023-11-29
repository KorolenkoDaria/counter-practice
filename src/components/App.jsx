import { Component } from 'react';

import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";

import { Container } from "./App.styled";


class App extends Component {
  state = {
    isShowModal: false,
  }

  showModal = () => {
    this.setState({ isShowModal: true })
  }
  closeModal = () => {
    this.setState({ isShowModal: false })
  }
  render() {
    return (
    <Container>
       <Header showModal={this.showModal} />
        <Counter />
        <ToDoList />
        {this.state.isShowModal && <Modal closeModal={this.closeModal}> Some </Modal>}
        
    </Container>
  );  
}
}

export default App;
