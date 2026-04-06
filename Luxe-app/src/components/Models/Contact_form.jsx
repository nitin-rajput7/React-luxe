import React from 'react'

function Contact_form() {
  return (
   <>
    <section className="contact-section">

      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2>Contact Information</h2>

        <div className="info-box">
          <div className="icon">&#9993;</div>
          <div>
            <h4>Email</h4>
            <p>support@luxefashion.com</p>
            <p>info@luxefashion.com</p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon"><i class="fa-solid fa-phone"></i></div>
          <div>
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
            <p>+1 (555) 765-4321</p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">
 
<i class="fa-solid fa-map-pin"></i></div>
          <div>
            <h4>Address</h4>
            <p>123 Fashion Avenue</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon"><i class="fa-solid fa-alarm-clock"></i></div>
          <div>
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="map-box">
          <iframe src="https://www.google.com/maps/@28.466317,77.040534,16z?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" frameborder="0"></iframe>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <h2>Send Us a Message</h2>

        <form className='contact-form'>
          <div className="row">
           <label htmlFor="first-name">First Name <input type="text" placeholder="First Name *" /></label>
           <label htmlFor="last-name">Last Name<input type="text" placeholder="Last Name *" /></label>
          </div>

          <label htmlFor="e-mail">Email*<input type="email" placeholder="Email *" /></label>
         <label htmlFor="phone">Phone*<input type="text" placeholder="Phone" /></label> 
          <label htmlFor="Subject">Subject*<input type="text" placeholder="Subject *" /></label>

          <label htmlFor="textarea">Message<textarea placeholder="Tell us more about your inquiry..."></textarea></label>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
   </>
  )
}

export default Contact_form 