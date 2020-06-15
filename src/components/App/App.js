import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback'
import SupportFeedback from '../SupportFeedback/SupportFeedback'
import UnderstandingFeedback from '../UnderstandingFeedback/UnderstandingFeedback'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
class App extends Component {
  
  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    }).then((response) => {
      console.log('Feedback GET Success', response);
      this.props.dispatch({
        type: "FEEDBACK_GET",
        payload: response.data
      })
    }).catch((error) => {
      console.log("Feedback GET Error:", error)
    })
  }

 handleSubmit = () => {
   console.log('next button clicked');
   this.props.history.push('/FeelingFeedback')
 }

  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
          <Link to='/FeelingFeedback'>Click here to go to the FeelingFeedback</Link>
          <Route path = '/FeelingFeedback' component = {FeelingFeedback}/>
          <Route path='/SupportFeedback' component={SupportFeedback} />
          <Route path='/UnderstandingFeedback' component={UnderstandingFeedback} />
          <Route path='/Comments' component={Comments} />
          <Route path = '/Review' component={Review} />
        </Router>
       
        
        <br/>
      </div>
    );
  }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })
export default connect(mapStateToProps)(App);
