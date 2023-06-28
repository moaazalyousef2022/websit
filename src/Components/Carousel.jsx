import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Circle from './Circle';

const Carousel = ({ circleData }) => {
  const CustomNextArrow = props => (
    <div
      className="custom-next-arrow"
      onClick={props.onClick}
      style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: '1',
        color: '#000',
        fontSize: '20px',
      }}
    >
      {'>'}
    </div>
  );

  const CustomPrevArrow = props => (
    <div
      className="custom-prev-arrow"
      onClick={props.onClick}
      style={{
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: '1',
        color: '#000',
      }}
    >
      {'<'}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container" style={{ height: '400px', width: '100%', position: 'relative' }}>
      <Slider {...settings}>
        {circleData.map((item, index) => (
          <div className="col-md-6 col-sm-6" key={index}>
            <Circle name={item.name} ratio={item.ratio}></Circle>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-prev:before,
        .slick-next:before {
          color: #000000;
        }

        .custom-prev-arrow,
        .custom-next-arrow {
          background-color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Carousel;
