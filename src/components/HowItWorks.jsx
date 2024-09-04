import HowItWorksVector from '../assets/HowItWorksVector.svg'
import HowItWorksStroke from '../assets/HowItWorksStroke.svg'
const HowItWorks = () => {
    return (
        <div>
            <img src={HowItWorksVector} alt=""
                className='w-full -mb-1' />

            <div className='bg-primaryPink'>
                <h1 className='text-center font-bold text-2xl  '>How It Works</h1>


                <img src={HowItWorksStroke} alt=""
                    className='mx-auto ' />
            </div>

        </div>
    )
}

export default HowItWorks