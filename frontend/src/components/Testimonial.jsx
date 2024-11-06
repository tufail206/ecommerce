import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';


// Sample testimonial data
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        position: 'CEO, TechCompany',
        message: 'This is an amazing service! I highly recommend it to everyone.',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Manager, BusinessCo',
        message: 'The team was exceptional and helped us grow our business.',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        id: 3,
        name: 'Samuel Brown',
        position: 'Founder, StartupX',
        message: 'Very professional and reliable. I am very satisfied with the results.',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
];

const TestimonialSlider = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                            <p className="text-gray-600 text-center mb-4">{testimonial.position}</p>
                            <p className="text-gray-700 italic text-center">{`"${testimonial.message}"`}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
