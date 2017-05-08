import React, { Component } from "react";
import MLSData from "react-mlsdata";

class Count extends React.Component {
  render() {
    return (
      <h3>

        <strong>

          You have {this.props.data.length}

          Friends

        </strong>

      </h3>
    );
  }
}

const App = () => (
  <div>

    <MLSData collection="Me/Friends">

      {({ loading, error, data }) => (
        <div>

          {loading && <h2>{`${loading}`}</h2>}

          {data &&
            <div>

              <Count data={data.value} />

            </div>}

        </div>
      )}

    </MLSData>

  </div>
);

export default App;
