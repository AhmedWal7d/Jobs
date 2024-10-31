import React from 'react';
import Slider from "react-slick";
import imguser1 from "../../Img/image & tag.png"; 
import imguser2 from "../../Img/image & tag.png"; 
import imguser3 from "../../Img/image & tag.png";
import { LuPhone } from "react-icons/lu";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { TfiAlert } from "react-icons/tfi";
import { useTranslation } from 'react-i18next';

const services = [
    {
        id: 1,
        image: imguser1,
        name: "Service 1",
        description: "Lorem ipsum dollar",
        price: "100 EGP"
    },
    {
        id: 2,
        image: imguser2,
        name: "Service 2",
        description: "Lorem ipsum dollar",
        price: "200 EGP"
    },
    {
        id: 2,
        image: imguser2,
        name: "Service 2",
        description: "Lorem ipsum dollar",
        price: "200 EGP"
    },
    {
        id: 3,
        image: imguser3,
        name: "Service 3",
        description: "Lorem ipsum dollar",
        price: "150 EGP"
    },
];

export default function TopTaskers() {
    const { t } = useTranslation();
    // إعدادات السلايدر
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    return (
        <>
            <div className='container mt-4'>
                <div className='d-flex justify-content-between'>
                    <h6 className='fw-bold'>{t("viewall")}</h6>
                    <h5 className='fw-bold'>{t("taskers")}</h5>
                </div>

                <Slider {...settings}>
                    {services.map(service => (
                      <>
                      <div key={service.id} className='mt-3 d-flex boxshado p-2 mx-1'>
                            <div className='mx-2'>
                                <img src={service.image} alt={service.name} className='h-imgslider' />
                            </div>
                            <div className='flex-grow-1'>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='spencolor'></div>
                                        <i className="fa-regular fa-heart fa-2x"></i>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='p-0 m-0 fw-bold'>{service.name}</p>
                                        <h5 className='textspan fw-bold p-0 m-0'>{service.description}</h5>
                                    </div>
                                    <div className='mt-2'>
                                        <h5 className='textcolorprice'>{service.price}</h5>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        <div className='d-center bg-transparentspen'>
                                            <LuPhone className='font-25' />
                                        </div>
                                        <div className='d-center bg-transparentspen'>
                                            <TiMessages className='font-25' />
                                        </div>
                                        <div className='d-center bg-transparentspen'>
                                            <AiOutlineInfoCircle className='font-25' />
                                        </div>
                                        <div className='d-center bg-transparentspen text-danger'>
                                            <TfiAlert className='font-25' />
                                        </div>
                                    </div>
                             
                                </div>
                                
                            </div>
                            
                        </div>
                        {/* <div className='mt-2 d-flex justify-content-between w-75 mx-auto'>
                                        <div>
                                            Age: 25Y
                                        </div>
                                        <div>
                                         25 KM
                                        </div>
                                        <div>
                                         1K + Task
                                        </div>
                                    </div> */}
                      </>
                        
                    ))}
                </Slider>
            </div>
        </>
    );
}
