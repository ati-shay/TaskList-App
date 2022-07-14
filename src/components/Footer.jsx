import React from 'react'

const Footer = () => {
  let footerStyle={
    position: "fixed",
    bottom:"0",
    width: "100%",
  }
  let divStyle={
    height:"15vh",
  }
  return (
    <div style={divStyle}>
    <footer className='bg-dark text-light py-3 mt-10' style={footerStyle}>
      <p className='text-center'>&copy; All rights reserved</p>
      </footer>
      </div>
  )
}

export default Footer