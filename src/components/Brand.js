import React, { useState, useEffect } from 'react'
import { Responsive } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
const styles = {
  container: {
    height: 100,
    paddingLeft: 20,
    // background: 'linear-gradient(to right, #333, #0083b0)'
    // backgroundColor: 'rgb(128, 224, 208)'
  },
  title: {
    fontFamily: 'Cinzel, serif',
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: 2,
    color: 'rgb(64, 180, 208)',
    lineHeight: '100px',
    // textShadow: '2px 1px rgba(0,0,0,0.5)'
  },
  sub: {
    position: 'absolute',
    top: 45,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    color: 'rgb(64, 200, 208)'
  }
}
export default props => {
  const [left, setLeft] = useState(window.innerWidth)

  useEffect(()=> {
    window.addEventListener('resize', ()=> setLeft(window.innerWidth))
    return () => {
      window.removeEventListener('resize', ()=> setLeft(window.innerWidth))
    }
  })

  return (
    <div style={styles.container}>
      <Fade>
        <h1 style={styles.title} className='animated fadeIn'>
          Keystone Media
        </h1>
      </Fade>
      <Responsive minWidth={500}>
        <h3 className='animated fadeIn' style={Object.assign({}, styles.sub, {left: left - 300})}>
          Websites &middot; Apps &middot; E-commerce
        </h3>
      </Responsive>
    </div>
  )
}