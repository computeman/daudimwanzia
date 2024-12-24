import React from "react";
import "./Blogs.css";
import blog1Image from "../assets/images/blog1.png";

const Blogs = () => {
  return (
    <section className="blogs-container" id="blogs">
      <div className="blogs-content">
        <div className="main-title">
          <h2 className="sub-title">My Blogs</h2>
        </div>
        <div className="blogs">
          <div className="blog">
            <img src={blog1Image} alt="Blog Thumbnail" className="blog-image" />
            <div className="blog-text">
              <h4>
                How to Integrate the Mpesa Express API in Flask and React JS
                real world project.
              </h4>
              <p>
                In this blog article, we are going to be creating API routes in
                Flask using the Lipa na Mpesa API and consuming the APIs in
                React JS frontend. The article will demonstrate a practical
                application of Lipa na Mpesa in a simple full stack application,
                where a user is presented with products and a cart where they
                can proceed to checkout, where a prompt (STK Push) is sent to a
                user for payment, payment details stored and success or fail is
                shown to the user, also demonstrating a practical linkage of
                Lipa na Mpesa API to an order, as is in an online checkout
                system where a user makes a payment for certain products.
              </p>
              <a
                href="https://daudimwanzia.hashnode.dev/how-to-integrate-the-mpesa-express-api-in-flask-and-react-js-real-world-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
