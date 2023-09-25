import React,{useState,useEffect,useRef} from 'react'
import {motion} from 'framer-motion'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'

import {styles} from '../styles'
import emailjs  from '@emailjs/browser'
const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading]=useState(false);

  const handleChange = (e)=>{
    const {target} = e
    const {name,value} = target
    setForm({
      ...form,
      [name]:value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_lf6dyff",
      "template_cpjpmuj",
      {
        from_name:form.name,
        to_name:"David Kipkemoi",
        from_email:form.email,
        to_email:"davidkipkemoi30@gmail.com",
        message:form.message

      },
      "I08jIsfyPl6I2kbfd"
    ).then(
      ()=>{
        setLoading(false);
        setForm({
          name:'',
          email:'',
         message:'',
        })
      }
    ).catch(Error)
  }
  return (
    <div
    className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className='flex=[0.75] bg-black-100 p-8 rounded-2xl w-1/2'
      >
          <p className={styles.sectionSubText}>Contact US</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

           <form 
          onSubmit={handleSubmit}
           className='mt-12 flex flex-col gap-8'
           ref={formRef}>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Enter Your Name</span>
              <input 
              type="text"
              name="name"
              value={form.name}
              placeholder='What is Your Name ?'
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-2xl outline-none border-none font-medium'
              onChange={handleChange}              />
              
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Enter Your Email</span>
              <input 
              type="text"
              name="email"
              value={form.email}
              placeholder='What is Your Email ?'
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-2xl outline-none border-none font-medium'
              onChange={handleChange}              />
              
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea 
              type="text"
              name="message"
              rows={7}
              value={form.message}
              placeholder='Enter your Message'
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-2xl outline-none border-none font-medium'
              onChange={handleChange}              />
              
            </label>
            <button
            type='submit'
            className='bg-tertiary py-4 px-8 rounded-xl w-full outline-none text-white font-bold shadow-md shadow-primary'
            >
              {loading ?"Sending...":"Send"}
            </button>
            </form> 
      </motion.div>
      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-1/2'
      >
      <EarthCanvas/>
      </motion.div>
    </div>
   
  )
}

export default SectionWrapper(Contact,"contact")