import * as S from "./style";
import React, { useState, useEffect } from 'react';
import customAxios from '../../utils/axios/axios';

const Comments = ({ tableId }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    customAxios.get(`/comment/${tableId}`)
      .then((response) => {
        setComments(response.data);
        console.log(comments);
      })
      .catch((error) => {
        console.error('Failed to fetch comments:', error);
      });
  }, [tableId]);

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

  const handleNewCommentSubmit = (event) => {
    event.preventDefault();

    customAxios.post('/comment', { tableId: tableId, comment: newCommentText })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewCommentText('');

            customAxios.get(`/comment/${tableId}`)
            .then((response) => {
              setComments(response.data);
            })
            .catch((error) => {
              console.error('Failed to fetch comments:', error);
            });

      })
      .catch((error) => {
        console.error('Failed to create comment:', error);
      });
  };

  return (
    <div>
      
  <div>
      <S.Text>댓글</S.Text>
      <form onSubmit={handleNewCommentSubmit}>
  
        <S.TextBox type="text" value={newCommentText} onChange={handleNewCommentChange} placeholder="Write a comment..." />
        <button type="submit">Post Comment</button>
      </form>
  
      {comments.map((comment) =>
            <S.Container key={comment.commentId}>
            <S.Img1 src="/assets/img31.png"></S.Img1>
            <S.NickName>{comment.userNickname}</S.NickName>
            <S.Hour>{comment.created}</S.Hour>
            <S.Comment1>{comment.comment}</S.Comment1>
            <S.Arrow1 src="/assets/img26.png"></S.Arrow1>
          </S.Container>
      )}
    
    </div>
    </div>
  );
};

export default Comments;


