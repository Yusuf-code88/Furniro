import './home.css'

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
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Shop</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
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
    </>
  )
}

export default App
