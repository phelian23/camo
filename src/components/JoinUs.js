import React from 'react'

const JoinUs = () => {
  return (
    <div>
      <div id="join-us" className="join-us-cont d-flex">
        <div className="join-us-cont1">
          <p className="join-us-h2">Join Us</p>
          <p className="join-us-p">
            Members of Camo Limited have been involved in projects or won grants/funding from bodies such as DBEIS, InnovateUK, GCRF, Shell, NRF, DST, TWAS and DFID.
          </p>
          <button className="join-us-button">Learn More</button>
        </div>
        <div className="join-us-cont2">
          <p className="join-us-h2">Contact Us</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Enter message"></textarea>
            </div>
            <button type="submit" className="join-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs