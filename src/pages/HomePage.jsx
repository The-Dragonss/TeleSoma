/* eslint-disable no-unused-vars */
import React from 'react'
import NavColumn from '../components/NavColumn'
import CourseDisplay from '../components/CourseDisplay'
import Welcome from '../components/Welcome'
import RightColum from '../components/RightColumn'

const HomePage = () => {
    return (
        <div className='  h-screen flex w-full justify-center ' >
            <NavColumn />
            <div className='flex flex-col justify-between'>
                <Welcome />
                <CourseDisplay />
            </div>
            <RightColum />
        </div>
    )
}

export default HomePage