import styled from "styled-components";

const Post = ({ title, description, coverImg, userName, views }) => {
  return (
    <PostContainer>      
      <ContentsBox>
        <Img alt="" src={coverImg} />

          
          <Title>{title}</Title>

          <Script>{description}</Script>

          <div style={{display: 'flex', }}>
            <Nickname>
              by{userName}
            </Nickname>
            
            <div>
              <div style={{ marginRight: "5px" }}>{views}</div>
              <img src="assets/img4.png" alt="" style={{width: '20px', height: '20px'}}/>
            </div>
         
          </div>
      </ContentsBox>

    </PostContainer>
  );
};

export default Post;


const PostContainer = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0px 7px  rgba(100, 100, 111, 0.2);
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0px 0px;
`;

const ContentsBox = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Script = styled.p`
  font-size: 15px;

`;

const Nickname = styled.div`
  font-size: 15px;
`;

