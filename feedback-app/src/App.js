import React from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'

export default function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
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