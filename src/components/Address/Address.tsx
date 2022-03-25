const Address = ({ addresses }) => {
  if (addresses && addresses.length >= 1) {
    return (
      <>
        {addresses.map(({ properties }) => {
          return (
            <ul key={properties.id}>
              <li>
                <h2>Label : {properties.label}</h2>
                <ul>
                  <li>
                    <b>number:</b> {properties.housenumber}
                  </li>
                  <li>
                    <b>street:</b> {properties.street}
                  </li>
                  <li>
                    <b>city:</b> {properties.city}
                  </li>
                  <li>
                    <b>zipcode:</b> {properties.citycode}
                  </li>
                  <li>
                    <b>country:</b> France
                  </li>
                  <li>
                    <b>rounded score:</b>{" "}
                    {Math.round(properties.score * 100) / 100}
                  </li>
                </ul>
              </li>
            </ul>
          );
        })}
      </>
    );
  }

  return <div className="address">No address found</div>;
};

export default Address;
