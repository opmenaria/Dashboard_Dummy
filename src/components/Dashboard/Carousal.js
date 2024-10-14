import { Card, Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import modl1 from '../../assets/modl1.jpg';
import modl2 from '../../assets/modl2.jpg';
import modl3 from '../../assets/modl3.jpg';
import modl5 from '../../assets/modl5.jpg';
import modl6 from '../../assets/modl6.jpg';

function CustomCarousel() {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const updateSlidesToShow = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setSlidesToShow(3);
        } else if (width >= 768) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(1);
        }
    };

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const employ = [
        { name: "John Doe", position: "Frontend Developer", img: modl1 },
        { name: "Jane Smith", position: "Backend Developer", img: modl2 },
        { name: "Sam Wilson", position: "Fullstack Developer", img: modl3 },
        { name: "Mike Brown", position: "DevOps Engineer", img: modl5 },
        { name: "Emma Davis", position: "Mobile Developer", img: modl6 },
        { name: "John Doe", position: "Frontend Developer", img: modl1 },
        { name: "Jane Smith", position: "Backend Developer", img: modl2 },
        { name: "Sam Wilson", position: "Fullstack Developer", img: modl3 },
        { name: "Mike Brown", position: "DevOps Engineer", img: modl5 },
        { name: "Emma Davis", position: "Mobile Developer", img: modl6 },
    ];

    return (
        <div className="w-full bg-gray-700 flex flex-col overflow-hidden items-center justify-center py-4">
            <div className="max-w-2xl text-center m-2">
                <h5 className="text-2xl text-white mb-2">Lorem ipsum dolor sit amet.</h5>
                <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda, architecto magni qui explicabo dolorem alias id odit doloremque.
                </p>
            </div>

            <Carousel
                arrows
                infinite
                slidesToShow={slidesToShow} // Dynamically set slides based on screen width
                style={{ margin: 'auto', maxWidth: 1000, width: "auto" }}
            >
                {employ.map((emp, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div style={{ padding: '0 10px' }}> {/* Add padding between cards */}
                            <Card
                                hoverable
                                style={{ width: 240, margin: 'auto' }} // Center the card horizontally
                                cover={
                                    <Image
                                        preview={false}
                                        style={{ borderRadius: 10, overflow: 'hidden', maxHeight: 280 }}
                                        src={emp.img}
                                        alt={`${emp.name}'s profile`}
                                    />
                                }
                            >
                                <Card.Meta className=' text-center' title={emp.name} description={emp.position} />
                            </Card>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;
