import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback}/>
                                <FeedbackStats />
                                <FeedbackList handleDelete={deleteFeedback}/>
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}