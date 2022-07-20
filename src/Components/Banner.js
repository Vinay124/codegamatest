import React from 'react'
import '../Styles/app.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Banner() {

    const BannarSlider = {
        //autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause:true,
        items:1,
        loop: true,
    };

  return (
    <>
    <section className='banner_section'>
      <div className='container'>
      <OwlCarousel {...BannarSlider} className="owl-theme" margin={10} nav>
        <div class="item" id='bannerimg'>
          <img src="https://rukminim1.flixcart.com/flap/3376/560/image/b820735717414883.jpg?q=50" />
        </div>
        <div class="item" id='bannerimg'>
          <img src="https://rukminim1.flixcart.com/flap/3376/560/image/8d8c292a102363ce.jpg?q=50" />
        </div>
        <div class="item" id='bannerimg'>
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/9aa2d15ca0682b72.jpg?q=50" />
        </div>
        <div class="item" id='bannerimg'>
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/7563f6ab6d0de200.jpg?q=50" />
        </div>
        <div class="item" id='bannerimg'>
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/8da4a86eba1d5015.jpg?q=50" />
        </div>
      </OwlCarousel>
      </div>
    </section>
    </>
  )
}
