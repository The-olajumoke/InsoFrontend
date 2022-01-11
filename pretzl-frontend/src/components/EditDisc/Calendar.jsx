import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { BsClock} from "react-icons/bs";

function Calendar(props) {
  const {
    setCalendarMode,
    calendarMode,
    setSaveState,
    setstarterPrompt,
    setPostInsp,
    setpostAs,
    setscores,
    setCalendar,
    calendar,
    setShowCalDate,
    date,
  } = props;
  return (
    <div className="settingsMainCont">
      <div className="settingsTop">
        <h3 className="settingsName ">Calendar</h3>
        <div className="settingsControl">
          <label className="switch">
            <input
              type="checkbox"
              name="reports"
              id="calendar"
              onChange={(e) => {
                setCalendarMode(!calendarMode);
                setSaveState(true);
              }}
            />
            <span className="slider round"></span>
          </label>
          {calendar ? (
            <MdKeyboardArrowUp
              className="settingsIcon"
              onClick={() => setCalendar(!calendar)}
            />
          ) : (
            <MdKeyboardArrowDown
              className="settingsIcon"
              onClick={() => {
                setstarterPrompt(false);
                setPostInsp(false);
                setpostAs(false);
                setscores(false);
                setCalendar(true);
              }}
            />
          )}
        </div>
      </div>

      {calendar && (
        <div className={`postInspMore ${calendarMode ? "" : "unactive"}`}>
          <div className="calItem">
            <h4 className="limit">open</h4>
            <div className="calendarOption">
              <div className="calendarTime">
                <BsClock className="calIcon" />
                8:00 <span>AM</span>
              </div>
              <button
                className="calendarInput"
                onClick={() => setShowCalDate(true)}
              >
                {date[0].toLocaleString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  year: "numeric",
                  month: "long",
                })}
              </button>
            </div>
          </div>

          <div className="calItem">
            <h4 className="limit">close</h4>
            <div className="calendarOption">
              <div className="calendarTime">
                <BsClock className="calIcon" />
                11:59 <span>PM</span>
              </div>
              <button
                className="calendarInput"
                onClick={() => setShowCalDate(true)}
              >
                {date[1].toLocaleString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  year: "numeric",
                  month: "long",
                })}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
