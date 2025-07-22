import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import { toast } from 'react-hot-toast'
const Form:React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      email : '',
      message : ''

    },
    validationSchema:Yup.object({
      name : Yup.string()
      .min(3,"en az 3 simvoldan ibaret olmalidir")
      .required("Ad sahesi teleb olunur"),
      email : Yup.string()
             .email("Duzgun email daxil edin")
             .required("Email hissesi teleb olunur"),
             message: Yup.string()
             .required ("Mesaj sahesi teleb olunur")
    }),
    onSubmit: (values,{resetForm}) => {
        emailjs.send (
          "service_2nytkzo",
          "template_rm0hypt",
          values,
          "_I0D7i1gW241R9ds4"

        ).then(()=>{
         toast.success("Mesaj ugurla gonderildi!")
         resetForm()
        })
        .catch(()=>{
          toast.error("Mesaj gonderildikde xeta yarandi..")
        })

         
        
    }
  })
  return (


    
    <section className="form-container">
    <h2>Sent A Message</h2>
    <form onSubmit={formik.handleSubmit} action="#" method="post">
        <div className="email-name">
              <div className="mb-3 ad">
              <input type="text" name="name" placeholder="Name*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              />

             {
              formik.touched.name && formik.errors.name && (
                <p className='text-danger small'>{formik.errors.name}</p>
              )
             }
              </div>
           
            <div className="mb-3 ad">
            <input type="email" name="email" placeholder="Email*" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
           {
            formik.touched.email && formik.errors.email && (
              <p className='text-danger small' >{formik.errors.email}</p>
            )
           }
            </div>
          
        </div>
         <div className="mb-2">
         <textarea name="message" placeholder="Messenger" required
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.message}
         ></textarea>
        {
          formik.touched.message && formik.errors.message && (
            <p className='text-danger small'>{formik.errors.message}</p>
          )
        }
         </div>
      
        <button type="submit">Submit</button>
    </form>
   </section>
  )
}

export default Form