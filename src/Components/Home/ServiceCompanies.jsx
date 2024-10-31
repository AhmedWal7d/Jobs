import React from 'react';
import Slider from 'react-slick';
import imguser2 from "../../Img/company logo.png";
import { useTranslation } from 'react-i18next';

export default function ServiceCompanies() {
    const { t } = useTranslation();
    const services = [
        {
            id: 1,
            image: imguser2,
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
            id: 3,
            image: imguser2,
            name: "Service 3",
            description: "Lorem ipsum dollar",
            price: "150 EGP"
        },
        {
            id: 3,
            image: imguser2,
            name: "Service 3",
            description: "Lorem ipsum dollar",
            price: "150 EGP"
        },
        {
            id: 3,
            image: imguser2,
            name: "Service 3",
            description: "Lorem ipsum dollar",
            price: "150 EGP"
        },
        {
            id: 3,
            image: imguser2,
            name: "Service 3",
            description: "Lorem ipsum dollar",
            price: "150 EGP"
        },
        {
            id: 3,
            image: imguser2,
            name: "Service 3",
            description: "Lorem ipsum dollar",
            price: "150 EGP"
        },
        // Add more services as needed
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5, // Show 5 items on desktop
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='container mt-5 '>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-bold'>{t("viewall")}</h6>
                <h5 className='fw-bold'> {t("servicecompanies")} </h5>
            </div>
            <Slider {...settings} className='mt-4 pb-5'>
                {services.map(service => (
                    <div key={service.id} className='col-2'>
                        <div className='boxshado d-center flex-column'>
                            <img src={service.image} alt={service.name} className='m-0 p-0' />
                            <h5 className='m-0 p-0 textspan'>{service.name}</h5>
                            <p className='mt-2'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}