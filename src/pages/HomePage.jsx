import React from 'react'
import NavColumn from '../components/NavColumn'
import FileUpload from '../components/FileUpload'
import CourseDisplay from '../components/CourseDisplay'
import Welcome from '../components/Welcome'
import RightColum from '../components/RightColumn'

const HomePage = () => {
    return (
        <div className=' max-sm:flex-col max-sm:h-auto h-screen flex w-full justify-center ' >
            <NavColumn />
            <div className='flex flex-col justify-between max-sm:w-full'>
                <Welcome />
                <CourseDisplay />
            </div>
            <RightColum />
        </div>
    )
}

export default HomePage