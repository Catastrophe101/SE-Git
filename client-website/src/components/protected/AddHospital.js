import React, { Component } from 'react'
import { saveHospital } from '../../helpers/auth'
export default class AddHospital extends Component {
  state = { loginMessage: null }
    handleSubmit = (e) => {
      e.preventDefault()
      saveHospital(this.hospitalname.value, this.hospitalno.value,this.hospitaladdress.value,this.pincode.value,this.company.value,this.title.value)
    window.location.href='/';
    }
  render () {
    return (
      <div>
      <div className="col-sm-12 ">
        <br />
        <br />
        <br />
        <h1 > Request an RFP/RFI </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" ref={(hospitalname) => this.hospitalname = hospitalname} placeholder="Name"/>
          </div>
          <div className="form-group">
            <label>Phone No</label>
              <input className="form-control" ref={(hospitalno) => this.hospitalno = hospitalno} placeholder="Phone No"/>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input className="form-control" ref={(hospitaladdress) => this.hospitaladdress = hospitaladdress} placeholder="Email Address"/>
          </div>
          <div className="form-group">
            <label>Company</label>
            <input className="form-control" ref={(company) => this.company = company} placeholder="Company"/>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" ref={(title) => this.title = title} placeholder="Title"/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <input className="form-control" ref={(pincode) => this.pincode = pincode} placeholder="Message"/>
          </div>
          <div>
          <button type="submit" className="btn btn-primary">Send Request</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}
