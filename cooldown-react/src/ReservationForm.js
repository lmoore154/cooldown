import { browserHistory, Link } from 'react-router'
import React, { Component } from 'react'

class ReservationForm extends Component {

  render() {
    return (
      <form>
        <div className="form-group ">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input type="phone" className="form-control" id="phone" placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email Address"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}



export default ReservationForm
