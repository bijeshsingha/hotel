'use client'
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Button from '../components/PrimaryButton'

const Rooms = () => {

  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    })

    const handleChange = (ranges) => {
      setDate( ranges.selection )
    }

    const handleClick = () => {
      setOpenDate(!openDate)
    }

  return (
    <div className="pt-[200px] text-center flex flex-col items-center">
      

      
      <button onClick={handleClick}>DAte Range</button>
      {openDate && <DateRangePicker ranges={[date]} onChange={handleChange} />}
    </div>
  );
};

export default Rooms;
