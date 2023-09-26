import { atom, useRecoilState } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

export const useIsLoggedIn = () => {
  return useRecoilState(isLoggedInState);
};
