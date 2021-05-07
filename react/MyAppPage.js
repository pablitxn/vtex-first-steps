import React from 'react'

const MyAppPage = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

  return (
    <div style={styles}>
      <h1 style={{ marginBottom: '5px' }}>HOLAAAAAA MAIAMEEEE</h1>
      <small style={{ marginBottom: '20px' }}>
        soy un pequeño componente de react c:
      </small>
    </div>
  )
}

export default MyAppPage
