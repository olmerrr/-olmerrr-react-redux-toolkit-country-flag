import {useDispatch, useSelector} from "react-redux";
import {clearDetails, loadCountryByName, selectDetails} from "./details-slice";
import {useEffect} from "react";

export const useDetails = (name) => {
  const details = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])
  return details;
}