/*eslint-disable*/
import React from 'react';
import Loader from 'react-loader-spinner';

const divStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  timeout: 3000,
};

export default class Loaders extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Loader type="Oval" color="#3d5575" height={100} width={200} />
      </div>
    );
  }
}
