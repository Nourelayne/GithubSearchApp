import React from 'react';
import Form from './Form.js';
import CardList from './CardList.js';

export default class App extends React.Component{
  state = {
     profiles : []
  };
  
  addProfiles = (profile)=>{
      const previousProfiles = this.state.profiles;
      this.setState({
         profiles : [...previousProfiles, profile]
      });
  }

  deleteProfiles = (profileId)=>{
      const newProfiles = this.state.profiles.filter(p => p.id !== profileId);
      this.setState({
         profiles : [...newProfiles]
      });
  }

  showProfile = (profileLogin)=>{
      window.location.href = `https://github.com/${profileLogin}`;
  }

  render(){
    return (
        <div>
          <Form addProfiles={this.addProfiles} />
          <CardList profiles= {this.state.profiles} deleteProfile = {this.deleteProfiles} showProfile = {this.showProfile}/>
        </div >
     );
  }
}