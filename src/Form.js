import React, {useState} from 'react'
import axios from 'axios';
import { TextField, Button, Typography, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';

export default function Form(props) {
    const [state, setState] = useState({username : ''});
    const classes = useStyles();

    const handleChange = event => {
        setState({ username: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp  = await axios.get(`https://api.github.com/users/${state.username}`);
        props.addProfiles(resp.data);
        setState({username: ''});
    }
    return (
        <div>
            <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh'}}>
                <Paper style={{ height: '200px', width:'700px', padding:'20px' }}>
                        <Typography variant="h1" className ={classes.typography}>Github Search</Typography>
                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                            <TextField name="username" variant="outlined" label="Username"onChange={handleChange} required/>
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Search</Button>
                        </form>
                </Paper>
            </Grid>
        </div>
    );
}
