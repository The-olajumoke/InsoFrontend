import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { MdClose } from "react-icons/md";
function CalendarTemp({ date, setDate, setShowCalDate }) {
  return (
    <div className=" font-poppins  p-5 calTemp">
      <MdClose
        className="closeCalendar"
        onClick={() => setShowCalDate(false)}
      />
      <Calendar
        className="react-calendar"
        onChange={setDate}
        value={date}
        selectRange={true}
        nextLabel={<BsArrowDown />}
        prevLabel={<BsArrowUp />}
        defaultView="month"
        // showNavigation={false}
        // showNeighboringMonth={false}
        prev2Label={false}
        next2Label={false}
        navigationLabel={({ date, label, locale, view }) =>
          `${label}
          `
        }
      />
      {/* {date[1].toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        year: "numeric",
        month: "long",
      })}

      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span>
          {date[1].toLocaleString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )} */}
    </div>
  );
}

export default CalendarTemp;
//CHANGE CALENDAR COLOR