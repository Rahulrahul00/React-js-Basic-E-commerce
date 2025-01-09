import React from 'react';
import catImg from '../../assets/images/cateImg.png'; // Import image
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Categories.css';



const Categories = () => {


  const catData = [
    {
      name: 'TV',
      img: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-tv-icon-gray-monochrome-style-png-image_1858203.jpg",
    },
    {
      name: 'Mobile',
      img: "https://png.pngtree.com/png-clipart/20240615/original/pngtree-i-phone-mockup-png-image_15340671.png",
    },
    {
      name: 'Laptop',
      img: "https://png.pngtree.com/png-clipart/20220603/original/pngtree-apple-laptop-png-png-image_7902042.png",
    },
    {
      name: 'Audio',
      img: "https://png.pngtree.com/png-clipart/20241007/original/pngtree-blue-gaming-headphones-with-led-lights---3d-render-png-image_16232820.png",
    },
    {
      name: 'Gaming',
      img: "https://png.pngtree.com/png-clipart/20240719/original/pngtree-gaming-controller-3d-rendering-png-image_15587671.png",
    },
    {
      name: 'Appliances',
      img: "https://png.pngtree.com/png-clipart/20240505/original/pngtree-home-appliance-store-set-png-image_15016826.png",
    },
   
  ];

  const settings = {
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true, // Pause when hovered
 

  };

  return (
    <div>
      <div className="cateContainer">
        <div className="cateProductContainer flex align-middle justify-center ">
          <div className="cateProducts w-1/3">
            <Slider {...settings}>
              {catData.map((item,index) => (
                <div key={index}>
                  <div className="product1 w-20 h-20 mt-10  rounded-full">
                    <img src={item.img} alt="Category Image" />
                    <p className='text-center'>{item.name}</p>
                  </div>
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
