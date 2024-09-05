import HowItWorksVector from '../assets/HowItWorksVector.svg'
import HowItWorksStroke from '../assets/HowItWorksStroke.svg'
import Step1Img from '../assets/Step1Img.svg'
import Step2Img from '../assets/Step2Img.svg'
import Step3Img from '../assets/Step3Img.svg'
import Step4Img from '../assets/Step4Img.svg'
const HowItWorks = () => {
    return (
        <div>
            <img src={HowItWorksVector} alt=""
                className='w-full -mb-1' />

            <div className='bg-primaryPink pb-10 -md:pt-36'>

                <h1 className='text-center font-bold text-2xl  pt-8 md:text-5xl '>How It Works</h1>




                <div className='pt-40 md:py-40 z-10 relative md:mt-40'>


                    <div className='flex flex-row gap-8 items-center absolute top-14 left-4 md:left-72 md:top-20'>
                        <div className=''>
                            <img src={Step1Img} alt=""
                                className=' border-purple border-8 rounded-3xl md:w-48'
                            />
                        </div>

                        <div className='flex flex-col md:w-1/4 '>
                            <h3 className='text-center font-bold text-2xl'>Step 1: Upload Your Notes</h3>
                            <p className='text-left'>Got a bulky PDF full of notes? No problem! Just upload it, and let us work our magic. We’ll break it down into bite-sized, easy-to-digest study modules so you can focus on what really matters – learning without the overwhelm!</p>
                        </div>
                    </div>






                    <div className='flex md:flex-row flex-row-reverse gap-8 items-center absolute top-96 left-4 md:left-1/3 md:top-1/3'>
                        <div className=''>
                            <img src={Step2Img} alt=""
                                className=' border-green border-8 rounded-3xl md:w-48'
                            />
                        </div>

                        <div className='flex flex-col md:w-96'>
                            <h3 className='text-center font-bold text-2xl'>Step 2: Get Custom Study Modules</h3>
                            <p className='text-left'>We take your notes and turn them into engaging study guides complete with quizzes, interactive content, and summaries. It’s like having a personal tutor – but way cooler</p>
                        </div>
                    </div>







                    <div className='flex flex-row gap-8 items-center absolute top-96 max-sm:bottom-0 max-sm:left-4 left-1/2 md:left-72 md:-bottom-14'>
                        <div className=''>
                            <img src={Step3Img} alt=""
                                className=' border-secondaryOrange border-8 rounded-3xl md:w-48'
                            />
                        </div>

                        <div className='flex flex-col md:w-96'>
                            <h3 className='text-center font-bold text-2xl'>Step 3: Invite Your Study Squad</h3>
                            <p className='text-left'>Learning is more fun with friends, right? Invite your buddies to join your study group and tackle those tough topics together. Share insights, compete in challenges, and motivate each other along the way.</p>
                        </div>
                    </div>











                    <div className='flex md:flex-row flex-row-reverse gap-8 items-center absolute  bottom-0 left-4 md:left-1/3 md:top-3/3'>
                        <div className=''>
                            <img src={Step4Img} alt=""
                                className=' border-secondaryPink border-8 rounded-3xl md:w-48'
                            />
                        </div>

                        <div className='flex flex-col md:w-96'>
                            <h3 className='text-center font-bold text-2xl'>Step 4: Learn, Earn Points, and Level Up</h3>
                            <p className='text-left' >As you complete modules and quizzes, you’ll earn points and badges that show off your progress. The more you learn, the more you level up – unlocking new features, rewards, and, of course, bragging rights</p>
                        </div>
                    </div>




                    <img src={HowItWorksStroke} alt=""
                        className='mx-auto md:ml-96 md:pt-24' />

                </div>

            </div>

        </div>
    )
}

export default HowItWorks