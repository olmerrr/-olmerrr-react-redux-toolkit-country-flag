import { useSelector } from "react-redux";
import {useAppDispatch} from "store";
import { SingleValue } from "react-select";

import { Region } from "types";
import { setRegion } from "./controls-slice";
import { selectRegion } from "./controls-selectors";
import { CountryOption } from "./CustomSelect";

type onSelect = (reg: SingleValue<CountryOption>) => void;
export const useRegion = ():[Region | "", onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);
  const handleSelect: onSelect = (reg) => {

    if (reg) {
      dispatch(setRegion(reg.value || ""))
    } else dispatch(setRegion(""))
  }
  return [region, handleSelect]
}