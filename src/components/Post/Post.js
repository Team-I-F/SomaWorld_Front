import * as S from "./style";

const Post = ({ table }) => {
  return (
    <div>
      <h1>{table.tableID}</h1>
      <h1>{table.title}</h1>
      <h1>{table.created}</h1>
      <h1>{table.views}</h1>
      <h1>{table.userNickname}</h1>
      <h1>{table.description}</h1>
    </div>
  );
};

export default Post;
