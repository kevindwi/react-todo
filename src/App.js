import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
