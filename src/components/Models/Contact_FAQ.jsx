import React from 'react'

function Contact_FAQ() {
  return (
    <>
      <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-box">
        <h3>What are your shipping options?</h3>
        <p>
          We offer free standard shipping on all orders over $100. Express
          shipping is available for an additional fee.
        </p>
      </div>

      <div className="faq-box">
        <h3>What is your return policy?</h3>
        <p>
          We offer a 30-day return policy for all unworn items with tags
          attached. Returns are free and easy.
        </p>
      </div>

      <div className="faq-box">
        <h3>How do I track my order?</h3>
        <p>
          Once your order ships, you'll receive a tracking number via email.
          You can also track your order in your account.
        </p>
      </div>

      <div className="faq-box">
        <h3>Do you ship internationally?</h3>
        <p>
          Yes! We ship to over 25 countries worldwide. International shipping
          rates are calculated at checkout.
        </p>
      </div>
    </div>
    </>
  )
}

export default Contact_FAQ