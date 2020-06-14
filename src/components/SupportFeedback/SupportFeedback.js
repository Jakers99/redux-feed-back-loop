import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback'

class SupportFeedback extends Component {
    render(){
        return(
            <div>
                <section>
                    <h2>Hello</h2>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(SupportFeedback);