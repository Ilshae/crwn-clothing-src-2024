import { StateType } from "../../types.ts";

export const selectCurrentUser = (state: StateType) => state.user.currentUser;
