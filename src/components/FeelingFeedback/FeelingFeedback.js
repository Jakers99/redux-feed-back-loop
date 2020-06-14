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
        console.log('this is target', event.target);
        console.log('this is the feeling', this.state.value.feeling);
        this.setState({
            value: {
                ...this.state.value,
                [event.target.feeling]: event.target.value
                
            }
        })
    }
    render(){
        return(
            <section>
                <label for='feelingInput'>one of five</label>
                <input onChange = {this.handleChange}id='feelingInput' type = 'number'/>
            </section>
        )
    }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(FeelingFeedback);
