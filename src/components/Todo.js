import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({todos, completeTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  return todos.map((todo, index) => (
    <Grid container>
      <Grid item>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              className={todo.isComplete ? 'FormControlLabel checked':'FormControlLabel'}
              control={<Checkbox key={todo.id} onClick={() => completeTodo(todo.id)}/>}
              key={index}
              label={todo.text}
            />
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  ))
}

export default Todo
