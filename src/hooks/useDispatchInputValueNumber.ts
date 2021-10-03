import { useDispatch } from "react-redux";

export const useDispatchInputValueNumber = (
  action: (actionObj: any) => any,
  key: string
) => {
  const dispatch = useDispatch();
  const setter = (value: string) => {
    if (!isNaN(Number(value))) {
      dispatch(action({ [key]: Number(value) }));
    }
  };
  return setter;
};
