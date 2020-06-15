import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import Axios from 'axios';

class Review extends Component{
    //posts the information inputs to the dom and refreshes the page
    reviewButton = (event) => {
        console.log('inside reviewButton');
        console.log('inside feelingReducer', this.props.reduxStore.inputReducer);
        event.preventDefault();
        Axios({
            method: 'POST',
            url: '/submit',
            data: this.props.reduxStore.inputReducer
        })
        window.location.reload(false);
    }
    //button to go to the thankyou page
    continueButton = () => {
        this.props.history.push('/ThankYou')
    }
    render(){
        return(
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <thead>
                        {/* shows the recent submissions */}
                        {this.props.reduxStore.feedbackReducer.map((info) => 
                            <tr key={info.id}>
                                <td>{info.feeling}</td>
                                <td>{info.understanding}</td>
                                <td>{info.support}</td>
                                <td>{info.comments}</td>
                            </tr>
                        )}
                    </thead>
                </table>
            </section>
            <label for = 'review'>Click here first to submit, then go to the next page! </label>
                <button id="review" onClick={this.reviewButton} >Click to Submit</button>
                <button id='done' onClick={this.continueButton}>Click to go to the next page</button>
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Review);