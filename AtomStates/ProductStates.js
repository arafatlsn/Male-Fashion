import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: [],
});

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const visibleCartUiState = atom({
  key: "visibleCartUiState",
  default: false,
});

export const showAuthModalState = atom({
  key: "showAuthModalState",
  default: false,
});

export const userLoadState = atom({
  key: "userLoadState",
  default: {},
});

export const showLoaderState = atom({
  key: "showLoaderState",
  default: false,
});

export const successSnackbar = atom({
  key: "successSnackbar",
  default: false,
});

export const successSnackbarMssg = atom({
  key: "successSnackBarMssg",
  default: "",
});
