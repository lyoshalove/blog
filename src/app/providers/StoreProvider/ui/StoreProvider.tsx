import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { StateSchema, createReduxStore } from "../config";
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps extends PropsWithChildren<unknown> {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
