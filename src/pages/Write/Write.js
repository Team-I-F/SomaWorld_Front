// import { useEffect, useState } from "react";
// import { axios } from "axios";
// import { useParams } from "react-router-dom";

// export default function Write() {
//   const { boardID } = useParams();

//   const [title, setTitle] = useState("");
//   const [mainText, setMainText] = useState("");

//   const submit = () => {
//     // axios
//     //   .post("/board/insert", {
//     //     tableInfoId: tableInfoId,
//     //     title: title,
//     //     userNickname: userNickname,
//     //     description: description,
//     //   })
//     //   .then(
//     //     (response) => {
//     //       console.log(response);
//     //     },
//     //     (error) => {
//     //       console.log(error);
//     //     }
//     //   );
//     // console.log();
//   };

//   useEffect(() => console.log(boardID), []);
//   return (
//     <div className="board">
//       <form className="form">
//         <div>
//           <input type="text" onChange={(e) => setTitle(e.target.value)} />
//           <input type="text" onChange={(e) => setMainText(e.target.value)} />
//           <input type="text" onChange={(e) => setMainText(e.target.value)} />
//           <input type="text" onChange={(e) => setMainText(e.target.value)} />

//           <div>
//             <button>게시글 등록</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import OrEdit from "./Section/OrEdit";

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [IsForUpdate, setIsForUpdate] = useState(false);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };

  const onSubmitArticle = (event) => {
    event.preventDefault();
    const article = { title: TitleValue, content: ContentValue };
    console.log(article);
  };

  return (
    <OrEdit
      titleValue={TitleValue}
      contentValue={ContentValue}
      handleTitleChange={onTitleChange}
      handleContentChange={onContentChange}
      handleSubmit={onSubmitArticle}
      updateRequest={IsForUpdate}
    />
  );
}

export default RegisterPage;
