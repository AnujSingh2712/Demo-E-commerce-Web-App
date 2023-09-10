import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <>
      <div className="home-container-fluid">
        <div className="home-container">
          <div className="upper-title-container-fluid">
            <div className="upper-title-container">
              <div className="title-content">
                <h1 className="super-cripsy">
                  Super Cripsy
                </h1>

                <h1 className="Cake-zone">CAKEZONE</h1>

                <h1 className="restaurant-location">
                  The Best Cake is London
                </h1>

                <div className="home-button-section">
                  <button className='read-more'>
                    <span className="btn-read">
                      Read More
                    </span>
                  </button>
                  <button className='play-btn'>
                    <span class="material-symbols-outlined play-btn-icon">
                      play_arrow
                    </span>
                    <span className="play-video">Play Video</span>
                  </button>
                </div>
              </div>

            </div>

          </div>


         <div className="about-us-container">
          
         </div>
        </div>
      </div>
    </>
  )
}

export default Home