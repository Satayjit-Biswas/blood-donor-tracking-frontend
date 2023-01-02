import React, { useEffect, useState } from "react";

const Location = () => {
  const [Location, setLocation] = useState({});
  const { latitude, longitude } = Location;
  const url = `https://www.google.com/maps/place/${latitude}N ${longitude}E`;

  const successCallback = (position) => {
    setLocation(position.coords);
    console.log(position.coords);
  };
  const errorCallbacks = (err) => {
    console.log(err);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallbacks);
  });
  return (
    <>
      <div>latitude:- {latitude}</div>
      <div>longitude:-{longitude}</div>
    </>
  );
};

export default Location;
