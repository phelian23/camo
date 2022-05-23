import React from 'react'

const FocusArea = () => {
  return (
    <div>
      <div id="focus-area" className="focus-area-cont d-flex">
        <h2 className="focus-area-h2">Focus Area</h2>
        <hr className="focus-area-hr" />
        <div className="focus-area-div d-flex">
          <div className="focus-area-div-1">
            <p className="focus-area-h6">
              Knowledge
            </p>
            <div className="focus-area-div-cont">
              <img src="https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg" alt="" />
              <h4 className="focus-area-h4">Big Data</h4>
              <p className="focus-area-p">
              In helping our clients make more data-driven decisions, we assist them in creating a secure and informative knowledge-base from which useful and deep insights can be gleaned. Through the use of smart surveys, intelligent forms and other non-invasive data gathering techniques involving hardware and software components, we ensure that our clients remain up to date with real-time data and other behavioral changes from their own customer base.
              </p>
            </div>
          </div>
          <div className="focus-area-div-1">
            <p className="focus-area-h6">
              Investment
            </p>
            <div className="focus-area-div-cont">
              <img src="https://miro.medium.com/max/3150/2*FMIQlirVkoZ0_w72krYr-w.jpeg" alt="" />
              <h4 className="focus-area-h4">Data Analysis</h4>
              <p className="focus-area-p">
                Beyond the traditional analysis of data, we provide our clients advanced big data analytics and other business intelligence services through the use of artificial intelligence and machine learning tools. This means that we are able to provide deep relationships and accurate projections in real-time based on our novel tools and access to high performance computing (HPC) for multiple scenario analysis.
              </p>
            </div>
          </div>
          <div className="focus-area-div-1">
            <p className="focus-area-h6">
              Technology
            </p>
            <div className="focus-area-div-cont">
              <img src="https://www.qs.com/wp-content/uploads/2021/10/AI-in-higher-education.jpg" alt="" />
              <h4 className="focus-area-h4">
                Artificial Intelligence
              </h4>
              <p className="focus-area-p">
                Understanding the need for speed in today’s world, we have built capacity in advanced design and rapid solution deployment. Ranging from software solutions to hardware prototypes, we have a pandemic-tested network across the world that is capable of scaling up production and deployment while satisfying the highest standards with respect to quality and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FocusArea