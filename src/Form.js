import React from 'react';
import axios from 'axios';
import './style.css';

export default class Form extends React.Component{
    state = {username : ''};

    handleChange = event => {
        this.setState({ username: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp  = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.addProfiles(resp.data);
        this.setState({username: ''});
    }
    
    render(){
      return (
          <div>
             <h1>The Github Cards App</h1>
             <form onSubmit = {this.handleSubmit}>
                 <input type="text" value ={this.state.username} placeholder="Username..." onChange={this.handleChange} required />
                 <button>Search</button>
             </form >
          </div>
       );
    }
  }