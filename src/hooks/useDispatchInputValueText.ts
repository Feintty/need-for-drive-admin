import { useDispatch } from "react-redux";

export const useDispatchInputValueText = (
  action: (actionObj: any) => any,
  key: string
) => {
  const dispatch = useDispatch();
  const setter = (value: string) => {
    dispatch(action({ [key]: value }));
  };
  return setter;
};
