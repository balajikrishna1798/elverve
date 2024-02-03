import React from 'react'
import './full-tech.css'
import Slider from 'react-slick'
const FullTech = () => {
    const techLeft = {
        dots: false,
        infinite: true,
        speed: 5900,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4
              }
            }
          ]
    };
    const techRight = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
          ]
    };
    const tech = [
        {
            title: 'Python'
        },
        {
            title: 'C#'
        },
        {
            title: 'Rails'
        },
        {
            title: 'Node.js'
        },
        {
            title: 'Java'
        },
        {
            title: 'PHP'
        },
        {
            title: 'Swift'
        },
        {
            title: 'React'
        },
        {
            title: '.Net'
        },
    ]
    const techright = [
        {
            title: 'Android'
        },
        {
            title: 'iOS'
        },
        {
            title: 'Golang'
        },
        {
            title: 'Vue.js'
        },
        {
            title: 'C++'
        },
        {
            title: 'JavaScript'
        },
        {
            title: 'Angular'
        },
    ]
    return (
        <div>
        <div className="text-center my-5 py-5 fulltech">
           <h1 className='fulltech-title'>Full Tech stack coverage</h1>
           <p className='fulltech-subtitle'>Our expertise spans across your entire tech stack for complete coverage.</p>
           <div className='technologies'>
              <div className="right-tech">
                 <div className='tech-list'>
                    <Slider {...techLeft}>
                       {
                       tech.map((usetech, i) => {
                       return (
                       <span key={i}>{usetech.title}</span>
                       )
                       })
                       }
                    </Slider>
                    <Slider {...techRight}>
                       {
                       techright.map((techright, i) => {
                       return (
                       <span key={i}>{techright.title}</span>
                       )
                       })
                       }
                    </Slider>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}

export default FullTech