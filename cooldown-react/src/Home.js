import { browserHistory, Link } from 'react-router'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import React, { Component } from 'react'

import 'react-datepicker/dist/react-datepicker.css'

import ReservationForm from './ReservationForm'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-4 col-md-4">
            <h2>Welcome to Cool Down</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4>Please select a date for your reservation</h4>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange} />
          </div>
          <div className="col-md-8">
            <ReservationForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
