import { atom } from "recoil";
import { NAMESPACE } from "../helpers/config";

export const firebaseAppState = atom({
  key: `[${NAMESPACE}] firebaseApp`,
  default: undefined,
});

export const currentUserState = atom({
  key: `[${NAMESPACE}] currentUser`,
  default: undefined,
});

export const isAuthModalOpenState = atom({
  key: `[${NAMESPACE}] isAuthModalOpen`,
  default: false,
});