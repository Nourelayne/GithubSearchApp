import React from 'react';
import './style.css';

export default class Card extends React.Component{
      render(){
          return (
          <div className="github-profile">
    	      <img src={this.props.avatar_url} alt="profile_image"/>
              <div className="info">
                <div className="name">{this.props.name}</div>
                <div className="company">{this.props.company}</div>
              </div>
              <button onClick = {()=>this.props.deleteProfile(this.props.id)}>Delete</button>
    	  </div>
          );
      }
}