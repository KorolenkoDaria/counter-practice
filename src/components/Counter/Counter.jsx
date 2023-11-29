import {Wrapper,CounterMain,Title, Indicator,Button, ButtonWrapper} from './Counter.styled'
import { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0,
};
    handleClick = (e) => {

        if (e.target.lastChild.nodeValue === "+") {
            this.setState((prevState) => ({
              value: prevState.value + 1,
            }));
          } else if (e.target.lastChild.nodeValue === "-") {
            this.setState((prevState) => ({
              value: prevState.value - 1,
            }));
          }
}
    render()
        {
            return (
                <Wrapper>
                        <CounterMain>
                            <Title>Counter</Title>
                        <Indicator>{ this.state.value}</Indicator>
                            <ButtonWrapper>
                                <Button onClick={this.handleClick}>+</Button>
                                <Button onClick={this.handleClick}>-</Button>
                            </ButtonWrapper>
                        </CounterMain>
        
                </Wrapper >
                )
      }
  
}
export default Counter;
