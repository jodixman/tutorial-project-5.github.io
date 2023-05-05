import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button'

const CardDeal = () =>(
  <section className={layout.section}>
    {/*------ Kiri ------*/}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>better card deal <br className='sm:block hidden'/> ub few easy steps.</h2>
      <p className={`${styles.paragraph}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Saepe minus sequi commodi odit nesciunt quas sit quae neque, eaque repellat.</p>

      <Button styles='mt-10'/>
    </div>

    {/*------ Kanan ------*/}
    <div className='{layout.sectionImg'>
      <img src={card} alt="card" className='w-full h-full'/>
    </div>

  </section>
)

export default CardDeal