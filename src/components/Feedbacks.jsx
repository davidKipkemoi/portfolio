import {motion} from 'framer-motion'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import {testimonials} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'

const FeedBackCard = ({index,testimonial,name,designation,company,image})=>(
  <motion.div
  variant={fadeIn("","spring",index*0.5,0.75)}
  className='bg-black-200 p-9 rounded-3xl sm:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48]px'> "</p>
    <p>
      {testimonial}

    </p>
  </motion.div>
)
const Feedbacks = () => {
  return (
    <div className='mt-2 bg-black rounded-[20px] '>
      <div className={`${styles.padding} 
       bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
              What Others Say
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
         {testimonials.map((testimonial,index)=>(
            <FeedBackCard 
            key={testimonial.name}
            index = {index}
            {...testimonial}
            />
         ))

         }
      </div>
    </div>
  )
}

export default Feedbacks