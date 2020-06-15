import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class ThankYou extends Component{
    startAgain = () => {
        this.props.history.push('/FeelingFeedback')
    }
    render(){
        return(
            <section>
                {/* this section displays all of the information once again */}
            <h1>THANK YOU!!</h1>
            <h2>Your submissions:</h2>
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
                        {this.props.reduxStore.feedbackReducer.map((info) =>
                        // displays all the submissions once again on the thank you page
                            <tr key={info.id}>
                                <td>{info.feeling}</td>
                                <td>{info.understanding}</td>
                                <td>{info.support}</td>
                                <td>{info.comments}</td>
                            </tr>
                        )}
                    </thead>
                </table>
                <button onClick = {this.startAgain}>Click here to make a new submission!</button>
            </section>
        );
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(ThankYou);