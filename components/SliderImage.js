/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';
import Center from './Center';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `https://picsum.photos/id/${id}/1920/1080`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="w-full" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}


export default function SliderImage() {
  return (
    <Swiper

    // install Swiper modules
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 1000 }}
    pagination={{ clickable: true }}
  >
    {createSlide()}
    {createSlide()}
    {createSlide()}
    {createSlide()}
  </Swiper>
  )
}
