/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './HomePage'
import ChunkedNotesDisplay from './ChunkedNotesDisplay'
import QuizPage from '../components/Quiz'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import Sample from './Sample'
import CoursePageBanner from './CourseBanner'
import SignUpPage from './SignUp'
import DashboardPage from './Dashboard'

function LandingPage() {
  return (
    <div>
      <QuizPage />


      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <Hero />
 <AboutUs /> */}
 {/* <Sample /> */}
{/* <SignUpPage /> */}
<DashboardPage />


    </div>
  )
}

export default LandingPage