const SearchResults = ({flightdata}) => {

      return (
          <table >
            {/* add columnsheadings */}
            <thead>
              <tr>
                <th>Departure</th>
                <th>Duration</th>
                <th>Arrival</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody data-testid="flight-results">{
          flightdata && flightdata.length>0 ? flightdata.map((el)=><tr>
            <td>{el.departure}</td>
            <td>{el.duration}</td>
            <td>{el.arrival}</td>
            <td>{el.price}</td>
          </tr>) :""
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  