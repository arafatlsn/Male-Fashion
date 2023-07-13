import { atom } from "recoil";

export const ActiveNavState = atom({
  key: "pathName",
  default: "/",
});

export const profileModal = atom({
  key:"profileModal",
  default: false
})
