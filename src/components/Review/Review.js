import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';

class Review extends Component{
    reviewButton = () => {
        console.log('inside reviewButton');
        console.log('inside feelingReducer', this.props.reduxStore.inputReducer);
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
                <button id="review" onClick={this.reviewButton} >SUBMIT</button>
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Review);