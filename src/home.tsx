import './home.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from './shop';

function App() {

  return (
    <>
      <section className='section1'>
        <header className='header'>
          <div className="container">
            <div className="header-box">
              <div className="logo-box">
                <img src="/src/img/logo2.svg" alt="" />
              </div>
              <div className="li-box">
                <Router>
                  <div>
                    <nav>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                    <Routes>
                      <Route path="/shop" element={<Shop />} />
                    </Routes>
                  </div>
                </Router>

              </div>
              <div className="icon-box">
                <a href=""><img src="/src/img/human.svg" alt="" /></a>
                <a href=""><img src="/src/img/search.svg" alt="" /></a>
                <a href=""><img src="/src/img/heart.svg" alt="" /></a>
                <a href=""><img src="/src/img/shopping.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </header>
        <div className="case1">
          <div className="container">
            <div className="dis-box">
              <div className="discover">
                <div className="dis-case">
                  <p className='p'>New Arrival</p><br />
                  <h1>Discover Our New Collection</h1><br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <button className='buy-btn'>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section2'>
        <div className="case2">
          <div className="container">
            <div className="browse-box">
              <h1>Browse The Range</h1><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="room-box">
              <div className="din-box">
                <img src="/src/img/din.svg" alt="" />
                <p>Dining</p>
              </div>
              <div className="liv-box">
                <img src="/src/img/liv.svg" alt="" />
                <p>Living</p>
              </div>
              <div className="bed-box">
                <img src="/src/img/bed.svg" alt="" />
                <p>Bedroom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="case3">
          <div className="container">
            <h1>Our Products</h1>
            <div className="prod1-box">
              <div className="syl-box">
                <img src="/src/img/syl.svg" alt="" />
                <section className="text-box">
                  <h2>Syltherine</h2>
                  <p>Stylish cafe chair</p>
                  <h3>Rp 2.500.000</h3>
                </section>
              </div>
              <div className="lev-box">
                <img src="/src/img/lev.svg" alt="" />
                <section className="text-box">
                  <h2>Leviosa</h2>
                  <p>Stylish cafe chair</p>
                  <h3>Rp 2.500.000</h3>
                </section>
              </div>
              <div className="lot-box">
                <img src="/src/img/lot.svg" alt="" />
                <section className="text-box">
                  <h2>Lolito</h2>
                  <p>Luxury big sofa</p>
                  <h3>Rp 7.000.000</h3>
                </section>
              </div>
              <div className="res-box">
                <img src="/src/img/res.svg" alt="" />
                <section className="text-box">
                  <h2>Respira</h2>
                  <p>Outdoor bar table and stool</p>
                  <h3>Rp 500.000</h3>
                </section>
              </div>
            </div>
            <div className="prod2-box">
              <div className="syl-box">
                <img src="/src/img/grif.svg" alt="" />
                <section className="text-box">
                  <h2>Grifo</h2>
                  <p>Night lampr</p>
                  <h3>Rp 1.500.000</h3>
                </section>
              </div>
              <div className="lev-box">
                <img src="/src/img/mug.svg" alt="" />
                <section className="text-box">
                  <h2>Muggo</h2>
                  <p>Small mug</p>
                  <h3>Rp 150.000</h3>
                </section>
              </div>
              <div className="lot-box">
                <img src="/src/img/pin.svg" alt="" />
                <section className="text-box">
                  <h2>Pingky</h2>
                  <p>Cute bed set</p>
                  <h3>Rp 7.000.000</h3>
                </section>
              </div>
              <div className="res-box">
                <img src="/src/img/pot.svg" alt="" />
                <section className="text-box">
                  <h2>Potty</h2>
                  <p>Minimalist flower pot</p>
                  <h3>Rp 500.000</h3>
                </section>
              </div>
            </div>
            <div className="sh-box">
              <button className='show'>Show More</button>
            </div>
          </div>
        </div>
      </section>
      <section className='section3'>
        <div className="container">
          <div className='div'>
            <div className="bea-box">
              <h1>50+ Beautiful rooms
                inspiration</h1><br />
              <p>Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</p><br />
              <button>Explore More</button>
            </div>
            <div className="inner-box">
              <img src="/src/img/inner.svg" alt="" style={{ paddingTop: '48px', paddingLeft: '100px' }} />
              <img src="/src/img/content.svg" style={{ marginLeft: '-380px', marginBottom: '22px' }} alt="" />
              <img src="/src/img/CTA.svg" style={{ marginBottom: '22px' }} alt="" />
              <img src="/src/img/room.svg" alt="" className='room' />
              <button className='arrow'><img src="/src/img/arrow.svg" alt="" /></button>
              <img src="/src/img/room2.png" alt="" className='room2' />
            </div>
          </div>
        </div>
      </section>
      <section className='section4'>
        <div className="container">
          <h3>Share your setup with</h3>
          <h1>#FuniroFurniture</h1>
        </div>
        <div className="dir">
          <img src="/src/img/images.svg" alt="" />
        </div>
      </section>
      <footer className='footer'>
        <div className="container">
          <div className="foot-box">
            <div className="fur-box">
              <h2>Funiro.</h2><br /><br />
              <p>400 University Drive Suite 200 Coral <br /> Gables,<br />
                FL 33134 USA</p>
            </div>
            <div className="link-box">
              <p>Links</p><br /><br /><br />
              <a href="">Home</a><br /><br /><br />
              <a href="">Shop</a><br /><br /><br />
              <a href="">About</a><br /><br /><br />
              <a href="">Contact</a><br /><br /><br />
            </div>
            <div className="help-box">
              <p>Help</p><br /><br /><br />
              <a href="">Payment Options</a><br /><br /><br />
              <a href="">Returns</a><br /><br /><br />
              <a href="">Privacy Policies</a><br /><br /><br />
            </div>
            <div className="help-box">
              <p>Newsletter</p>
              <div className="input-box">
                <form action="">
                  <input type="text" placeholder='Enter Your Email Address' />
                  <button>SUBSCRIBE</button>
                </form>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <p style={{ color: '#000000' }}>2023 furino. All rights reverved</p>
        </div>
      </footer>
    </>
  )
}

export default App
