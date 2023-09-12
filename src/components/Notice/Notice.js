import { useEffect, useState } from "react";
import styled from "styled-components";
import { slides } from "./slides";


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

  <PrevButton onClick={goToPreviousSlide}> 이전~</PrevButton>

    <SliderContainer>
      <Slider style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImage src={slide.imageSrc} alt={slide.imageAlt} />
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </Slide>
        ))}
      </Slider>


      <ButtonContainer>
      </ButtonContainer>
    </SliderContainer>

    <NextButton onClick={goToNextSlide}> </NextButton>
  </NoticeContainer>

  );
};

export default Notice;



const NoticeContainer = styled.div`
  overflow: hidden;
  width: 300px;
  position: relative;
  background-color: aliceblue;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  width: 300px;
  position: relative;
  background-color: aliceblue;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 300px; 
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
`;

const PrevButton = styled(Button)`
  transform: translateX(-50%);
`;

const NextButton = styled(Button)`
  transform: translateX(50%);
`;
