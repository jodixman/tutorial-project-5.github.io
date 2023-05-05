import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () =>(
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      {/* Atas */}
      <div className='w-full flex justify-between items-center md:fkex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What pepole are <br className='sm:block hidden'/> saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos ipsam dolorem vitae illo libero sed rem unde, tempore necessitatibus.</p>
        </div>
      </div>

      {/* Bawa (Card) */}
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
)

export default Testimonials