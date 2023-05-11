import { useState } from "react";
import { Axios } from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [mainText, setMainText] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    // 뭐라케야됨..?
    Axios.post("http://localhost:3001/api/insert", {
      title: title,
      mainText: mainText,
    }).then(() => {
      alert("succesful insert");
    });
  };

  return (
    <div className="borad">
      <form className="form">
        <label>히히 닉네임</label>
        <input
          type="text"
          className="nickName"
          onChange={(e) => setNickName(e.target.value)}
        />
        <label>히히 비번</label>
        <input
          type="text"
          className="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>히히 제목</label>
        <input
          type="text"
          className="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>히히 본문</label>
        <input
          type="text"
          className="mainText"
          onChange={(e) => setMainText(e.target.value)}
        />
        <button onClick={submit}>submit</button>
      </form>
    </div>
  );
}
