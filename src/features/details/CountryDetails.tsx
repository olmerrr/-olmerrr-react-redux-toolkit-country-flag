import {Loader} from "components/Loader/Loader";
import {Info} from "./Info";
import {useDetails} from "./use-details";
import {NavigateFunction} from "react-router-dom";

interface CountryDetailsProps {
  name?:string,
  navigate: NavigateFunction
}
export const CountryDetails = ({ name="", navigate }:CountryDetailsProps) => {
  const { currentCountry, error, status } = useDetails(name);

  return <div>
    {status === "loading" && <Loader />}
    {error && <h3>{error}...</h3>}
    {currentCountry && <Info push={navigate} {...currentCountry} />}
  </div>
}
