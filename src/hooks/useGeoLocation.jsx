import React, { useState } from 'react';
import { useEffect } from 'react';



const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded:false,
        coordinates: {lat:"", lng:""},
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude.toFixed(4),
                lng: location.coords.longitude.toFixed(4),
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
           error: {
            code: error.code,
            message: error.message,
           },
        });
        
    };


    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message:"Geolocation not supported",
            });

        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }, []);

     


  return location;
};

export default useGeoLocation;
