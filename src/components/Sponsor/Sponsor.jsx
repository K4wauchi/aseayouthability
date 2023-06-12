import React from 'react'

import { Helmet } from 'react-helmet'

import './sponsor.css'

const Sponsor = (props) => {
  return (
    <div className="sponsor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="sponsor-sponsor">
        <img
          src="/external/image54304-e6c8-1500w.png"
          alt="image54304"
          className="sponsor-image5"
        />
        <div className="sponsor-section-title">
          <span className="sponsor-text">
            <span>OUR PARTNERS</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sponsor