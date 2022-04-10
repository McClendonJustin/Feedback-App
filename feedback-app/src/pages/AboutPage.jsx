import React from 'react'
import Card from '../Components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this Project.</h1>
            <p>This is a React app to leave feedback about a product or service.</p>
            <p>Version: 1.0.0</p>
            <p><a href='/'>Back to Home</a></p>
        </div>
    </Card>
  )
}

export default AboutPage