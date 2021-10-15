import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "",
      rating: null,
      business_id: this.props.business_id,
      user_id: this.props.currentUser
    };
  }

  render() { 
    return ( 
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form">
          
        </form>
      </div>
     );
  }
}
 
export default ReviewForm;