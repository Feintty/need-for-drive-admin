import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducersCombiner";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
