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
                      <option value="prevention@canyoncreekservices.org">Community Outreach/ Education/Awareness/Prevention</option>
                      <option value="administration@canyoncreekservices.org">General Organizational Information/ Administration/Executive Director</option>
                      <option value="development@canyoncreekservices.org">Fundraising/Donations</option>
                      <option value="volunteers@canyoncreekservices.org">Volunteering/Internships/Service Projects</option>
                      <option value="business@canyoncreekservices.org"> Human Resources/Billing/Accounts/Grant Reporting</option>
                      <option value="board@canyoncreekservices.org">Board of Directors</option>
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
              <div className="disclaimer">
              If you or someone you know is in need of supportive services related to domestic violence or sexual assault, please either contact our 24 hour hotline at 435-233-5732 for immediate assistance or complete <a href="https://apricot.socialsolutions.com/auth/autologin/org_id/1698/hash/fe63cfb2b7190a8b89cde77419b8d89c5af6ee4e">this</a> form and a member of our team will contact you as soon as possible.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
