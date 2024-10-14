import FooterVector from '../assets/FooterVector.svg'
import FacebookIcon from '../assets/FacebookIcon.svg'
import Instagram from '../assets/Instagram.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import X from '../assets/X.svg'

const Footer = () => {
  return (
    <>
      <div>
        <img src={FooterVector} alt=""

          className="mx-auto w-full"
        />
      </div>
      <div className="bg-primaryOrange h-48 w-full flex flex-col md:flex-row justify-around items-center">
        <div>Say Goodbye to Boring Study <br /> Sessions!</div>
        <div>Copyright @ 2024 TeloSoma.all right reserved.</div>
        <div className='flex  flex-row items-center gap-8'>
          <p>Follow Us</p>
          <div className='flex  flex-row items-center gap-2'>
            <img src={FacebookIcon} alt="icon" />
            <img src={Instagram} alt="icon" />
            <img src={LinkedIn} alt="icon" />
            <img src={X} alt="icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer