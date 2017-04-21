import React, { Component } from 'react';
import MotivationList from './MotivationList'
import {database, firebaseListToArray} from '../utils/firebase';

class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motivations: []
    }
  }
  componentWillMount(){
    //Write your code here

    database.ref('/motivational').on('value', data=>{
      const results = firebaseListToArray(data.val());
      console.log('Motivations: ', results);
      // change state of motivations array
      this.setState({
        motivations: results
      });
    });
  } 

  render(){
    //Write your const to pass down the state to the MotivationList.js Component
    const motivation = this.state.motivations.map((motivation)=>{
      return <MotivationList key={motivation.id} description={motivation.description}/>
    });

    return(
      <section>
      <div className="row memes">
        {motivation}
      </div>
    </section>
    )
  };
}

export default Motivation;
