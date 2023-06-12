import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Holidaylist.css'

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/PublicHolidays/2023/AT');
        setHolidays(response.data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div className="holiday-list-container">
      <h1>List of Holidays</h1>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}>{holiday.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;
