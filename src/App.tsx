// https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port

// we need to display a list of address:
// you have to retrieve the list from the url,
// show a loading indicator while fetching,
// then display somes informations from each result.
// => doc: https://adresse.data.gouv.fr/api-doc/adresse

// bonus: use an input to research an other query

import { useEffect, useState } from "react";
import Address from "./components/Address";
import SearchQueryInput from "./components/SearchQueryInput";
import Loader from "./components/Loader";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [inputQuery, setInputQuery] = useState("");
  const intialQuery: string = "8 bd du port";
  const [urlQuery, setUrlQuery] = useState(intialQuery);
  const [addresses, setAddresses] = useState([]);
  const urlAPI: string = "https://api-adresse.data.gouv.fr/search/?q=$";

  useEffect(() => {
    if (inputQuery) {
      const queryArray = inputQuery.split(" ");
      let queryConstruction = "";
      for (let i = 0; i < queryArray.length; i++) {
        if (i === 0) {
          queryConstruction = queryArray[0];
        } else {
          queryConstruction += `+${queryArray[i]}`;
        }
        setUrlQuery(queryConstruction);
      }
    }
  }, [inputQuery]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await fetch(`${urlAPI}${urlQuery}`)
        // await fetch(urlQuery ? `${urlAPI}${urlQuery}` : `${urlAPI}${intialQuery}`)
        .then((res) => res.json())
        .then(({ features }) => {
          setAddresses(features);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }
    fetchData();
  }, [setLoading, urlQuery]);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <h1>Addresses list</h1>
      <SearchQueryInput setInputQuery={setInputQuery} urlQuery={urlQuery} />
      <Address addresses={addresses} />
    </div>
  );
}
