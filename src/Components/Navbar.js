import React from 'react'
import "../Styles/app.css"
import { SearchOutlined , DownOutlined } from '@ant-design/icons';

export default function Navbar() {
  return (
    <>
    <header className='header'>
      <div className='container'>
        <nav className='navmain'>
            <div className='logo'>
              <div>
                <h1>MyCart</h1>
              </div>
              <div>
                <span>Explore More</span>
              </div>
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
              <button>
                Cart
              </button>
            </div>
        </nav>
      </div>
    </header>
  </>
  )
}
