import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}