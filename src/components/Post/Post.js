import styled from "styled-components";

const Post = ({ title, description, coverImg, userName }) => {
  return (
    <PostTap>
      <Img alt="" src={coverImg} />
      <BottomBox>
        <Texts>
          <Title>{title}</Title>

          <Script>{description}</Script>

          <div style={{ display: "flex" }}>
            <Nickname>{userName}</Nickname>
            <view>
              <div style={{ marginRight: "5px" }}>6</div>
              <like src="assets/img4.png" type="button"></like>
            </view>
          </div>
        </Texts>
      </BottomBox>
    </PostTap>
  );
};

export default Post;


const PostTap = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0px 0px;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 50%;

  border-radius: 0px 0px 10px 10px;
`;

const Texts = styled.div`
  background-color: white;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Script = styled.p`
  font-size: 15px;
  height: 65px;
`;

const Nickname = styled.div`
  font-size: 15px;
`;

const view = styled.div`
  font-size: 15px;
  float: right;
  display: flex;
  vertical-align: right;
  margin-left: auto;
  /* margin: 10px; */
`;

const like = styled.img`
  width: 20px;
  height: 20px;
`;
