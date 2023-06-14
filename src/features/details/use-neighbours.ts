import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useAppDispatch } from "store";

import { loadNeighboursByBorder } from "./details-slice";
import { selectNeighbours } from "./details-selectors";

export const useNeighbours = (borders:string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbours:string[] = useSelector(selectNeighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboursByBorder(borders))
    }
  }, [borders, dispatch])
  return neighbours;
}