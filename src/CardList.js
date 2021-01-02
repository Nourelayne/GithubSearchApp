import React from 'react';
import Card from './Card.js';

export default class CardList extends React.Component{
    render(){
          return (
              <div>
                 {this.props.profiles.map(profile => <Card key ={profile.id} {...profile} deleteProfile = {this.props.deleteProfile}/>)}
              </div>
          );
    }
}