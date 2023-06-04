import styled from "styled-components";

export const Container = styled.div`
  background-color: #95b9ff;
  display: flex;
  height: 100vh;
`;

export const LoginForm = styled.form`
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 0px 50px 50px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 50%;
`;

export const LoginIcon = styled.img`
  transform: rotate(180deg);
  width: 50px;
  height: 50px;
  margin: 80px 150px;
`;

export const Frame = styled.div`
  margin: 100px 150px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 60px;
`;

export const LoginContainer = styled.div``;

export const FormField = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;

  width: 150px;
  height: 70px;

  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 35px;
  padding: 5px 40px;
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 700;

  align-items: center;
  justify-content: center;

  width: 200px;
  height: 50px;

  background-color: #95b9ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
