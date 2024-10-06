import React from 'react';
import Card from './Card';
import products from './Products';

const App = () => {
  return (
    <div className="app">
      {products.map(({ id, price, title, location, time, imageUrl }) => (
        <Card
          key={id}
          price={price}
          title={title}
          location={location}
          time={time}
          imageUrl={imageUrl}
        />
      ))}
       {products.map(({ id, price, title, location, time, imageUrl }) => (
        <Card
          key={id}
          price={price}
          title={title}
          location={location}
          time={time}
          imageUrl={imageUrl}
        />
      ))}
       {products.map(({ id, price, title, location, time, imageUrl }) => (
        <Card
          key={id}
          price={price}
          title={title}
          location={location}
          time={time}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};


export default App;

