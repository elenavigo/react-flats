import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    const { flats, selectedFlat, selectFlat } = props;
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === selectedFlat.name}
          selectFlat={selectFlat}
          index={index}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
