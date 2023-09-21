import { useEffect, useState } from "react";
import { createGallery } from "../../utils/api/gallery";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Gallerys = () => {
  const navigate = useNavigate();

  const [createGallData, setCreateGalldata] = useState({
    galleryName: ""
  });

  const handleGallWrite = async () => {
    try {
      const data = {
        ...createGallData,
      };
      const createdGall = await createGallery(data);
      alert("갤러리 생성 성공!");
      navigate("/");
    } catch (error) {
      alert("갤러리 생성 실패..");
      console.log("갤러리 생성 실패:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateGalldata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(createGallData)
  };


  useEffect(() => {

  }, []);

  return (
    <GallerysContainer>
      <HeaderContainer>
        <StyledLink to={"/"}>
          <BackIcon src="./assets/img13.png" alt="X"/>
        </StyledLink>
      </HeaderContainer>

      <CreateBox>
        <img src="./assets/img16.png" alt="흠.."/>
        <Input
          type="text"
          name="galleryName"
          placeholder="갤러리 이름 입력!"
          value={createGallData.galleryName}
          onChange={handleInputChange}
        />
        <CreateButton onClick={handleGallWrite}>확인</CreateButton>    
  
      </CreateBox>
    </GallerysContainer>
  );
};

export default Gallerys;

const GallerysContainer = styled.div`
  width: 100%;  
  height: 100%;
`;

const HeaderContainer = styled.div`
  position: sticky;
  display: flex;
  width: 100%;  
  height: 80px;
  border-bottom: 1px solid #b0b0b0;
  align-items: center;
  z-index: 1;
  background-color: white;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 30px;
`;

const BackIcon = styled.img`
  width: 35px;
  height: 35px;
`

const CreateBox = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 81px);
  gap: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 35px;
  padding: 5px 40px;
  font-size: 18px;
`;

const CreateButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  color: white;
  background-color: #95B9FF;
  border: none;
  border-radius: 25px;
  padding: 5px 20px;
`;
