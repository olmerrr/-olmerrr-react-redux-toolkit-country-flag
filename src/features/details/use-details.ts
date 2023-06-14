import { useSelector } from "react-redux";
import { clearDetails, loadCountryByName } from "./details-slice";
import {useEffect} from "react";
import {selectDetails} from "./details-selectors";
import {useAppDispatch} from "../../store";

export const useDetails = (name:string) => {
  const details = useSelector(selectDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])
  return details;
}