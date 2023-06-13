import { store } from "./store/store";

const appDispatch = (action) => store.dispatch(action);

export { store, appDispatch };