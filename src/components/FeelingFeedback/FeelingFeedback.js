import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class FeelingFeedback extends Component{
    state = {
        studentInfo: {
            feeling: ''
        }
    }
    handleChange = (event) => {
        console.log('this is target', event.target);
        console.log('this is the feeling', this.state.studentInfo.feeling);
        this.setState({
            value: {
                ...this.state.studentInfo,
                feeling: event.target.value
                
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let feelingValue = this.state.value;
        console.log('this is how the student is feeling today', feelingValue);
        this.props.dispatch({
            type: 'GET_INPUT',
            payload: feelingValue
        })
        this.props.history.push('/SupportFeedback')
    }
    render(){
        return(
            
            <section>
                <form>
                    <p>On a scale of one to five, how are you feeling today?</p>
                <label for='feelingInput'>Feeling? </label>
                <input onChange = {this.handleChange} id='feelingInput' type = 'number' value={this.state.feeling} name='feeling'/>
                <button onClick = {this.handleSubmit} id='nextButton'>NEXT</button>
                </form>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </section>
        )
    }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(FeelingFeedback);
