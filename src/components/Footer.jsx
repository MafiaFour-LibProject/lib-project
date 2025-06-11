


const Footer = () => {
  return (
     <div>
<footer id="contact">
        <div class="footer-content">
          <div class="footer-column">
            <h1 className="text-red-100">Address</h1>
            <p>200, BTL Street,Accra</p>
          </div>

          <div class="footer-column">
            <h1>Reach Out</h1>
            <p>+233 550 661 765</p>
            <p>info@mf-lib.com</p>
          </div>

          <div class="footer-column">
            <h1>Navigation</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Books</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              {/* <li>
                <a href="#">Contact</a>
              </li> */}
            </ul>
          </div>

          <div class="footer-column">
            <h1>Newsletter</h1>
            <p>Stay updated with our latest Library!</p>
            <form action="#" method="post" class="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email for newsletter"
                required
              />
              <button type="submit">Subscribe</button>
            </form>

            <p>Subscribe newsletters to get updates</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 MF Library. All rights reserved.</p>
        </div>
      </footer>
     </div>
  );
};

export default Footer;
