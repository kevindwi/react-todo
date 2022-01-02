import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

// import List from './/List';

const Form = (props) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Add new task" value={input} onChange={handleChange} />
        <Button sx={{ m: 2 }} type="submit" variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
      </form>
    </>
  );
}

export default Form
