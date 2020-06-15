import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class SupportFeedback extends Component {
    state = {
        studentInfo: {
            support: ''
        }
    }
//changes the support in state
    handleChange = (event) => {
        console.log('this is target', event.target);
        console.log('this is the support', this.state.studentInfo.support);
        this.setState({
            value: {
                ...this.state.studentInfo,
                support: event.target.value

            }
        })
    }
    //brings all the information to index.js in inputReducer
    handleSubmit = (event) => {
        event.preventDefault();
        let supportValue = this.state.value;
        console.log('this is how the student is support today', supportValue);
        this.props.dispatch({
            type: 'GET_INPUT',
            payload: supportValue
        })
        this.props.history.push('/UnderstandingFeedback')
    }
    render(){
        return(
            <div>
                <section>
                    <p>On a scale of one to five, how well have you been supported today?</p>
                    <label for='supportInput'>Support? </label>
                    <input onChange={this.handleChange} id='supportInput' type='number' value={this.state.support} name='support' />
                    <button onClick={this.handleSubmit} id='nextButton'>NEXT</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(SupportFeedback);