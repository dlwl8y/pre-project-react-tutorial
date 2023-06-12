import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';

const ChangeButtonClick = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeButtonClick onClick={onIncrease}>+</ChangeButtonClick>
          <ChangeButtonClick onClick={onDecrease}>-</ChangeButtonClick>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
