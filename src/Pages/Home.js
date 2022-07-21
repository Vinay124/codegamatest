import React from 'react'
import '../Styles/app.css'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'


export default function Home() {
  return (
    <>
    <Banner/>
    <section className='product_section'>
      <div className='container'>
        <div className='box-main'>
          <div className='slider-top'>
            <div className='slider-heading'>
              <h1 className=''>Special Gifts</h1>
              <button className='gift-btn'>View All</button>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kuof5ow0/power-bank/s/e/u/power-bank-dx10s-10000-mah-10000-dx-10s-callmate-original-imag7qzmhzuzfv87.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              
              <span>From ₹494</span>
               <p>Best Selling Styles.!</p>
            </div>
            </div>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kf2v3ww0/diary-notebook/g/h/n/classmate-02005011-original-imafvm2cjehmzdgy.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              <p>Home Furnishing Range</p>
              <span>From ₹494</span>
               <p>Best Selling Styles.!</p>
            </div>
            </div>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kg8avm80-0/watch/n/f/o/vh000010a-van-heusen-original-imafwgaagrcrqcxz.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              <p>Home Furnishing Range</p>
              <span>From ₹494</span>
               <p>Best Selling Styles.!</p>
            </div>
            </div>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kuof5ow0/power-bank/s/e/u/power-bank-dx10s-10000-mah-10000-dx-10s-callmate-original-imag7qzmhzuzfv87.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              <p>Home Furnishing Range</p>
              <span>From ₹494</span>
              <p>Best Selling Styles.!</p>
            </div>
            </div>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/k6tniq80/vehicle-pull-along/p/9/e/mini-friction-powered-4wd-unbreakable-cars-for-kids-big-rubber-original-imafp6gnsvjzjnmh.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              <p>Home Furnishing Range</p>
              <span>From ₹494</span>
              <p>Best Selling Styles.!</p>
            </div>
            </div>
            <div className='card-body'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kuof5ow0/power-bank/s/e/u/power-bank-dx10s-10000-mah-10000-dx-10s-callmate-original-imag7qzmhzuzfv87.jpeg?q=70' alt='/' className='product-img'/>
            <div className='card-heading'>
              <p>Home Furnishing Range</p>
              <span>From ₹494</span>
              <p>Best Selling Styles.!</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className='section-2'>
      <div className='container'>

      </div>
    </section>

    <Footer/>
  </>
  )
}
