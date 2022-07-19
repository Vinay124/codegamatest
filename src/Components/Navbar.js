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
        
      </div>
    </header>
    <div className='menuheader'>
      <div className='container'>
      <div className='down-menu'>
        <div>
        <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt="/"/>
            <span>Top Offers</span>
            </a>
          </div>
        <div>
        <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' alt="/"/>
              <span>Grocery</span>
              </a>
        </div>
        <div>
        <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt="/"/>
              <span>Fashion</span>
              </a>
        </div>
        <div>
        <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' alt="/"/>
              <span>Electronics</span>
              </a>
        </div>
        <div>
          <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt="/"/>
              <span>Home</span>
              </a>
        </div>
        <div>
          <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' alt="/"/>
              <span>Appliances</span>
              </a>
        </div>
        <div>
          <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt="/"/>
              <span>Travel</span>
              </a>
        </div>
        <div>
          <a href='/'>
            <img className="zoneimg"  src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' alt="/"/>
              <span>Beauty, Toys & More</span>
              </a>
        </div>
          </div>
      </div>
    </div>
  </>
  )
}
