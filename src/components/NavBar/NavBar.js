import React from 'react'
import Radium from 'radium'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    padding: '0 18px',
    boxShadow: '0 2px 4px 0 rgba(68, 68, 68, 0.35)',
    backgroundColor: '#fff',
  },
  column: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    margin: 'auto 0',
  },
  input: {
    height: 30,
    border: 'none',
  },
  verticalSeparator: {
    borderLeft: '1px solid #cecaca',
    margin: '0 20px',
  },
  minimized: {
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
}

const NavBar = () => (
  <div>
    <div style={styles.root}>
      <div style={styles.column}>
        <div style={styles.logo}>React Redux Starter</div>
      </div>
      <div style={styles.column}>
        <div>Welcome</div>
      </div>
    </div>
  </div>
)

export default Radium(NavBar)
