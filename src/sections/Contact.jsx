import { useRef,useState } from "react"
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast('پیام شما ارسال شد');
  const notify2 = () => toast('مشکلی پیش آمد')
  const formRef = useRef()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = ({target: { name, value }}) => {setForm({...form, [name]: value })}

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send('service_ybwjt58',
        'template_5gqsi34',
        {
          from_name: form.name,
          to_name: 'Milad',
          from_email:form.email,
          to_email: 'milad.abdi.137997@gmail.com',
          message: form.message
      },
      '9c9UABgvXx_XjFIfd'
    )

    setLoading(false);

    notify()
    
    setForm({
      name:'',
      email:'',
      message:''
    })

    } catch (error) {
      setLoading(false);

      console.log(error);

      notify2()
    }
  }

///////// service_ybwjt58 
/////////template_5gqsi34

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">

        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>

        <div className="contact-container">
          <p className="text-xl font-bold text-white-600 mt-5 text-end">
            اگر به دنبال ساخت یک وبسایت جدید یا توسعه سایتتون هستین ویا خواستار طراحی یک اپلیکیشن یونیک وکارآمود میگردین من میتونم کمکتون کنم 
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <lablel className="space-y-3">
              <p className="field-label text-end mr-5">نام و نام خانوادگی</p>  
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input text-end"
                placeholder="میلاد عبدی"
              />   
            </lablel>
            <lablel className="space-y-3">
              <p className="field-label text-end mr-5">امیل</p> 
              <input
                
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input text-end"
                placeholder="milad.abdi.137997@gmail.com"
              />   
            </lablel>
            <lablel className="space-y-3">
              <p className="field-label text-end mr-5">پیغام شما</p> 
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input text-end"
                placeholder="😅 سلام ، من میخوام تورو استخدام کنم "

              />   
            </lablel>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? ' ...درحال ارسال  ' : 'ارسال پیام'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
              <ToastContainer className="mt-24 font-extrabold" />
            </button>
          </form>
          <div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contact