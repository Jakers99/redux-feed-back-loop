import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class CommentFeedback extends Component {
    state = {
        studentInfo: {
            comment: ''
        }
    }
//when the input is used, it changes the comment value in the state
    handleChange = (event) => {
        console.log('this is target', event.target);
        console.log('this is the comment', this.state.studentInfo.comment);
        this.setState({
            value: {
                ...this.state.studentInfo,
                comment: event.target.value

            }
        })
    }
    //brings all the information to index.js in inputReducer
    handleSubmit = (event) => {
        event.preventDefault();
        let commentValue = this.state.value;
        console.log('this is how the student is comment today', commentValue);
        this.props.dispatch({
            type: 'GET_INPUT',
            payload: commentValue
        })
        this.props.history.push('/Review')
    }
    render() {
        return (
            <div>
                <section>
                    <p>Do you have anything you would like to add?</p>
                    <label for='commentInput'>Comments? </label>
                    <input onChange={this.handleChange} id='commentInput' type='text' value={this.state.comment} name='comment' />
                    <button onClick={this.handleSubmit} id='nextButton'>NEXT</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(CommentFeedback);