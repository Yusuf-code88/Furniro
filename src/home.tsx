import './home.css'
import { Link } from "react-router-dom";

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
        <Link to="/main.tsx">Перейти на страницу "О нас"</Link>
        </div>
       </div>
        </div>
      </header>
      <div className="case1" style={{backgroundImage:`url(/src/img/fon.svg)`}}>
        
      </div>
     </section>
    </>
  )
}

export default App
