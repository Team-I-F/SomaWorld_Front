import { useEffect, useState } from "react";
import styled from "styled-components";
import { slides } from "./slides";

import arrowDown from "../../assets/arrow-down.png";

const Notice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <NoticeContainer>
      <PrevButton onClick={goToPreviousSlide}>
        <ButtonImg src={arrowDown} alt="이전" style={{transform: 'rotate(180deg)'}}/>
      </PrevButton>
     
      <SliderContainer>
        <Slider style={{ transform: `translateX(-${currentIndex * 1500}px)` }}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <SlideImage src={slide.imageSrc} alt={slide.imageAlt} />
              <div style={{fontSize: '25px'}}>
                <h1>{slide.title}</h1>
                <h1>{slide.description}</h1>
              </div>
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
      
      <NextButton onClick={goToNextSlide}>
        <ButtonImg src={arrowDown} alt="다음"/>
      </NextButton>

    </NoticeContainer>
  );
};

export default Notice;

const NoticeContainer = styled.div`
  width: 100%;
  background-color: #95B9FF;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 400px;
  border-radius: 25px;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${(props) => props.width}px;
`;

const Slide = styled.div`
  flex: 0 0 1500px;
  width: 1500px;
  height: 400px;
  display: flex;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 500px;
  height: 500px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
`;

const PrevButton = styled(Button)`
  left: -100px;
  top: 180px;
  transform: translateX(-50%);
  z-index: 1;
`;

const NextButton = styled(Button)`
  right: -100px;
  top: 180px;
  transform: translateX(50%);
`;

const ButtonImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
