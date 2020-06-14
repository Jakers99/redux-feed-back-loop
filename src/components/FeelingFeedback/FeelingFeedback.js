import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class FeelingFeedback extends Component{
    state = {
        value: {
            feeling: ''
        }
    }
    handleChange = (event) => {
        console.log('this is target', event.target.id);
        console.log('this is the feeling', this.state.value.feeling);
        this.setState({
            value: {
                ...this.state.value,
                [event.target.feeling]: event.target.value
                
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
                <label for='feelingInput'>one of five</label>
                <input onChange = {this.handleChange} id='feelingInput' type = 'number'/>
                <button onClick = {this.handleSubmit} id='nextButton'>NEXT</button>
            </section>
        )
    }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(FeelingFeedback);
