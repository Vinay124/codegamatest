import React ,{useState, useEffect} from 'react';
import '../Styles/app.css'

export const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] =useState(data);
  const [loading, setLoading] = useState(false);

  return (
    <>
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
             <img src='https:rukminim1.flixcart.com/image/150/150/kuof5ow0/power-bank/s/e/u/power-bank-dx10s-10000-mah-10000-dx-10s-callmate-original-imag7qzmhzuzfv87.jpeg?q=70' alt='/' className='product-img'/>
             <div className='card-heading'>
              <p></p>
               <span>From ₹494</span>
                <p>Best Selling Styles.!</p>
            </div>
          </div>
         </div>
        </div>
       </div>
     </section>
     </>
  )
}

