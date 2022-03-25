import { useEffect, useState } from "react";

const SearchQueryInput = ({ urlQuery, setInputQuery }) => {
  const [value, setValue] = useState(urlQuery);

  const handleChangeInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputQuery(value);
    }, 1300);
    return () => {
      window.clearTimeout(timer);
    };
  }, [value, setInputQuery]);

  return (
    <div>
      <span className="inputText">
        <b>Enter an adress :</b>
      </span>
      <input autoFocus type="text" value={value} onChange={handleChangeInput} />
    </div>
  );
};

export default SearchQueryInput;
