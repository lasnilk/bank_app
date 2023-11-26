import {features} from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, i}) => (
   <div className={`flex flex-row p-6 rounded-[20px] ${i !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="" className='object-contain w-1/2 h-1/2'/>
      </div>
      <div className='flex flex-col flex-1 ml-3'>
        <h4 className='text-[18px] font-poppins font-semibold leading-[23px] mb-1'>{title}</h4>
        <p className='text-[16px] font-poppins text-dimWhite font-normal leading-[24px] mb-1'>{content}</p>
      </div>
   </div>
)

const Business = () => (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='hidden sm:block'/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles={`mt-10`}/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) =>(
          <FeatureCard key={feature.id} {...feature} index={i}/>
        ))}
      </div>
    </section>
)

export default Business;