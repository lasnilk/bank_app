import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () => (
  <section id='product' className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-full h-full relative z-[5]' />
      <div className='absolute -left-1/2 top-0 w-1/2 h-1/2 rounded-full z-[3] white__gradient'/>
      <div className='absolute bottom-0 z-0 w-1/2 rounded-full -left-1/2 h-1/2 pink__gradient'/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='hidden sm:block'/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      <div className='flex flex-wrap mt-6 sm:mt-10'>
        <a href="#"><img src={apple} className='w-[128px] h-[42px] object-contain mr-6 '/></a>
        <a href="#"><img src={google} className='w-[128px] h-[42px] object-contain'/></a>
      </div>
    </div>
  </section>
)

export default Billing