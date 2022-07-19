import React from 'react'
import "../Styles/app.css"
import { SearchOutlined , DownOutlined ,ShoppingCartOutlined} from '@ant-design/icons';
import logo from '../images/logo/flipkart.png'
import plus from '../images/logo/golden-star.png'


export default function Navbar() {
  return (
    <>
    <header className='header'>
      <div className='container'>
        <nav className='subheader'>
            <div className='logo'>
                <a href='/'>
                  <img src={logo} className="logos" alt="/"/>
                </a>
                <span>Explore</span>
                <span>Plus</span>
                <img src={plus} className="star" alt="/"></img>
            </div>
            <div className='search'>
              <form className='form-search'>
                <div className='search-box'>
                <input type="text" className='search-field' name="text" placeholder='Search Products, brand and more'/>
                <button className='submit-btn' type='submit'> 
                <SearchOutlined style={{ fontSize: 20, color: "black" }}/></button>
                </div>
              </form>
            </div>
            <div className='Login'>
              <button className='btn-primary'> Login</button>
            </div>
            <div className='sub-nav'>
              <ul>
                <li>Become a Seller</li>
                <li>More <DownOutlined style={{ fontSize: 10, color: "white" }}/></li>
              </ul>
            </div>
            <div className='cart'>
              <a href="/" className='cartm'>
              <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />
              <span>Cart</span>
              </a>
            </div>
        </nav>
        <div className='menuheader'>
            
        </div>
      </div>
    </header>
  </>
  )
}
