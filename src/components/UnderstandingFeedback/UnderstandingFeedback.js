import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class UnderstandingFeedback extends Component {
    //state for the understanding input
    state = {
        studentInfo: {
            understanding: ''
        }
    }
//when the input is submitted, it changes the value of this.state.studentInfo.understanding 
    handleChange = (event) => {
        console.log('this is target', event.target);
        console.log('this is the support', this.state.studentInfo.understanding);
        this.setState({
            value: {
                ...this.state.studentInfo,
            understanding: event.target.value

            }
        })
    }
    //brings all the information to index.js in inputReducer
    handleSubmit = (event) => {
        event.preventDefault();
        let understandingValue = this.state.value;
        console.log('this is how the student is support today', understandingValue);
        this.props.dispatch({
            type: 'GET_INPUT',
            payload: understandingValue
        })
        //when the next button is clicked, it goes to the comments page
        this.props.history.push('/Comments')
    }
    render() {
        return (
            <div>
                <section>
                    <p>On a scale of one to five, how well have you understood the material today?</p>
                    <label for='understandingInput'>Understanding? </label>
                    <input onChange={this.handleChange} id='understandingInput' type='number' value={this.state.understanding} name='understanding' />
                    <button onClick={this.handleSubmit} >NEXT</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(UnderstandingFeedback);