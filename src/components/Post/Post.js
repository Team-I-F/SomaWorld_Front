import styled from "styled-components";

const Post = ({ title, description, coverImg, userName, views }) => {
  return (
    <PostContainer>
      <Img alt="" src={coverImg} />
      <ContentsBox>
          <Title>{title}</Title>

          <Script>
            {description}
            한 세줄정도 넣을건데 좀 귀찮기는 하다
            한 세줄정도 넣을건데 좀 귀찮기는 하다
            한 세줄정도 넣을건데 좀 귀찮기는 하다
            한 세줄정도 넣을건데 좀 귀찮기는 하다
          </Script>

          <BottomBox>
            <Nickname>
              by{userName}
            </Nickname>
            
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{ marginRight: "5px" }}>{views}</div>
              <img src="assets/img4.png" alt="" style={{width: '20px', height: '20px'}}/>
            </div>
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
`;

const ContentsBox = styled.div`
  padding: 20px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Script = styled.div`
  margin: 10px auto;
  overflow: hidden;
  display: -webkit-box; 
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Nickname = styled.div`
  font-size: 15px;
`;

