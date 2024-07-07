import React from "react";
import { Names } from "./data";
import { decodeUnicode } from "./utils"; // Assuming decodeUnicode is in utils
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import { Mousewheel, Pagination } from 'swiper/modules'; 
import Slide from "./slide";


const Slides = () => {
    return (
        <div className="flex flex-col bg-slate-400 justify-between items-center  rounded shadow-lg   bg-opacity-10 max-w-max overflow-hidden bg-transparent h-100">
            <Swiper 
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="swiper-container"
            >
                {Names.data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Slide
                            number={item.number}
                            name={item.name}
                            transliteration={item.transliteration}
                            enMeaning={item.en.meaning}
                            enDesc={item.en.desc}
                            frMeaning={item.fr.meaning}
                            frDesc={decodeUnicode(item.fr.desc)}
                            found={item.found}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slides;
