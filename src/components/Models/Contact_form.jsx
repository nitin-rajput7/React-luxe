import React, { useState } from 'react';
import { api } from '../../services/api';

function Contact_form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: `${formData.phone ? `[Phone: ${formData.phone}] ` : ''}${formData.message}`,
      };

      const res = await api.sendMessage(payload);
      if (res.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been received by our concierge team.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: res.message || 'Failed to deliver message. Please try again.',
        });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

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
              <p>concierge@luxefashion.com</p>
              <p>clientcare@luxefashion.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 765-4321</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <i className="fa-solid fa-map-pin"></i>
            </div>
            <div>
              <h4>Atelier Address</h4>
              <p>123 Fashion Avenue, Suite 18</p>
              <p>New York, NY 10001, USA</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h4>Concierge Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Send Us a Message</h2>

          {status.message && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '1rem',
                fontSize: '14px',
                backgroundColor: status.type === 'success' ? '#d1fae5' : '#fee2e2',
                color: status.type === 'success' ? '#065f46' : '#991b1b',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i
                className={`fa-solid ${
                  status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'
                }`}
              ></i>
              {status.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <label>
                First Name *
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </label>
            </div>

            <label>
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
              />
            </label>

            <label>
              Subject *
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
              />
            </label>

            <label>
              Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows="5"
                required
              ></textarea>
            </label>

            <button type="submit" disabled={loading} style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Transmitting Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact_form;