import OData from "react-odata";
import React, { Component } from "react";
import buildQuery from 'odata-query';

class ODataAPI extends Component {
  render() {
    const baseUrl ='http://localhost/RETSAPI/Bientity/vGeographyByGeographyTypes';
  //  const filter ={and: [{Period: '2015'}, { GeographyName:'Sunnyvale'},{PeriodType : 'Year'}, {GeographyType:'City'}]} ;
 //  const select =   ['Class','ActiveCount','ContingentCount','PendingCount'];
  const filter='';
  const select='';
   const actual =baseUrl+ buildQuery({ select, filter});

   console.log(actual);
    return (
      <div>
        <OData baseUrl={actual}  options={{ headers: {
    'Accept': 'application/json'
  }}} >
          {({ loading, error, data }) => (
            <div>
              {loading && <h2>{`${loading}`}</h2>}
              {error && <h2>{`${error}`}</h2>}
              {data && <h1>{data.value[0].CountyName}</h1>}
            </div>
          )}
        </OData>
      </div>
    );
  }
}





export default ODataAPI;
