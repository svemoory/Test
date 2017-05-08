import React, { Component } from "react";
import MLSOData from './MLSOData'

//import MLSData from "react-mlsdata";



class App extends Component {
  render() {
/*      return(
    <MLSOData collection="geography" >
      {({ loading, error, data }) => (
        <div>
          {loading && <h2>{`${loading}`}</h2>}
          {data &&  <h2> {data.value[0].Id}</h2>}
        </div>
      )}

    </MLSOData>)*/

       return (
      <div>       
        <MLSOData collection='geography'   >
          {({ loading, error, data }) => (
            <div>
              {loading && <h2>{`${loading}`}</h2>}
              {error && <h2>{`${error}`}</h2>}
              {data && <h1>{data.value[0].CountyName}</h1>}
            </div>
          )}
        </MLSOData>
      </div>
    );
  }
}




export default App;
