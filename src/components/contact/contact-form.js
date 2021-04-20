import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ContactForm() { 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_513nv6e', 'template_t241g0h', e.target, 'user_VfVWKG6WCJ4vDEdQkClCo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={sendEmail}>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='name-area'
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='email-area'
                      placeholder='Email address'
                    ></input>
                    
                  </div>
                  <div className='emaildropdown'>
                  <label for="emails">Who Would You Like To Reach?</label>
                    <select id='emails'
                    type='to'
                    name='recipient'
                    className='form-dropdown'
                    placeholder='recipient address'>
                      <option value="prevention@canyoncreekservices.org">prevention@canyoncreekservices.org</option>
                      <option value="administration@canyoncreekservices.org">administration@canyoncreekservices.org</option>
                      <option value="development@canyoncreekservices.org">development@canyoncreekservices.org</option>
                      <option value="volunteers@canyoncreekservices.org">volunteers@canyoncreekservices.org</option>
                      <option value="business@canyoncreekservices.org">business@canyoncreekservices.org</option>
                      <option value="board@canyoncreekservices.org">board@canyoncreekservices.org</option>
                    </select>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='subject-area'
                      placeholder='Subject'
                    ></input>
                    
                  </div>
                 
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea className='message-area'
                      rows={3}
                      name='message'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <div className='submit-contact'>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
