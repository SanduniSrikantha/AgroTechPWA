import React, { useEffect } from 'react';
import 'flowbite'; // Import Flowbite library
import Datepicker from 'flowbite-datepicker/Datepicker';

const Calendar = () => {
  useEffect(() => {
    // Initialize the Datepicker with the default date
    const inlineDatepicker = new Datepicker(document.querySelector('[data-date]'));
  }, []);

  return (

    <div>
      {/* Render the inline datepicker with a default date */}
      <div inline-datepicker data-date="09/29/2023"></div>
    </div>
    
  );
};

export default Calendar;
