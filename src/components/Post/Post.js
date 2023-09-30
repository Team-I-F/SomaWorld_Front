import styled from "styled-components";

const Post = ({ title, description, coverImg, userName, views }) => {
  return (
    <PostContainer>
      <Img alt="" src={coverImg} />
      <ContentsBox>
          <Title>{title}</Title>

          <Script>
            {description}
          </Script>

          <BottomBox>
            <Nickname>
              by {userName}
            </Nickname>
            
            <BottomRight>
              <Views style={{ marginRight: "5px" }}>{views}</Views>
              <BottomImg src={"/assets/img4.png"} alt="" style={{width: '20px', height: '20px'}}/>
            </BottomRight>
          </BottomBox>

      </ContentsBox>

    </PostContainer>
  );
};

export default Post;


const PostContainer = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0px 0px 5px 5px rgba(100, 100, 111, 0.07);
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0px 0px;
  background-color: gray;
`;

const ContentsBox = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.5;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Views = styled.div`
`;

const BottomImg = styled.img`
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Script = styled.div`
  margin-top: 5px;
  overflow: hidden;
  display: -webkit-box; 
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1.5;
  color: gray;
`;

const Nickname = styled.div`
  font-size: 15px;
`;

