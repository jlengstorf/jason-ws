import React, { useState } from 'react';

const Newsletter: React.FC<any> = (data) => {
  const { headline, description } = data.data;

  return (
    <section id="newsletter" className="block subscribe-block">
      <div className="block-intro">
        <h2>{headline}</h2>
        <div
          className="lede"
          dangerouslySetInnerHTML={{ __html: description.html }}
        ></div>
      </div>

      <div className="opt-in">
        <div className="opt-in-image">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,c_fill,w_280,h_296/jason.af/opt-in.jpg"
            alt="Illustration of a letter with a heart on the top flap."
          />
        </div>
        <form action="/api/subscribe" method="POST">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
          <button
            type="submit"
            data-sound-hover="pop"
            data-sound-focus="pop"
            data-sound-click="hooray"
          >
            Subscribe
          </button>
          <p className="notice">
            <small>
              I will never share your personal information because I’m not a
              jerk.
            </small>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
