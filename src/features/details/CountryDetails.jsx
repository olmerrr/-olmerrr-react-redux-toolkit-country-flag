import {Loader} from "../../components/Loader/Loader";
import {Info} from "./Info";
import {useDetails} from "./use-details";

export const CountryDetails = ({name = "", navigate=Function.prototype}) => {
  const { currentCountry, error, status } = useDetails(name);

  return <div>
    {status === "loading" && <Loader />}
    {error && <h3>{error.message}...</h3>}
    {currentCountry && <Info push={navigate} {...currentCountry} />}
  </div>
}
