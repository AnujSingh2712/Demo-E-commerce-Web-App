import React, { useState } from 'react'
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const showLoginModalHandler = () => {
    setShowLoginModal(!showLoginModal);
  }
  const handleClose = () => {
    setShowLoginModal(!showLoginModal);
  }
  return (
    <>
      <div className="navbar-container-fluid">
        <div className="navbar-container">

          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <ul className="navbar-items">
            <li className="navbar-item-list">Home</li>
            <li className="navbar-item-list">About Us</li>
            <li className="navbar-item-list">Menu and Pricing</li>
            <li className="navbar-item-list">Master Chefs</li>
            <li className="navbar-item-list">Pages</li>
            <li className="navbar-item-list">Contact us</li>
          </ul>

          <ul className="login-register">
            <li className="login-items">Register</li>
            <span>
              <p className='divider'>/</p>
            </span>
            <li className="login-items" onClick={showLoginModalHandler}>Login</li>
          </ul>

        </div>
      </div>

      {
        showLoginModal && (
          <>
            <Modal show={showLoginModal} onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <form action="" className="login-form">
                  <input type="email"
                    placeholder='Enter your email...'
                    name='email'
                  />
                 
                  <input type="password"
                    placeholder='Enter your password...'
                    name='password'
                  />

                </form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
      }
    </>
  )
}

export default Navbar