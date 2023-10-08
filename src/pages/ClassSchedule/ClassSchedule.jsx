// src/components/ClassSchedule.js

import { useState } from "react";
import ClassTime from "../../components/ClassTime/ClassTime";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("Sunday");

  const handleClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-white font-bold mb-4 text-center">
        Class Schedule
      </h1>
      <div className="flex space-x-2 justify-center">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`px-4 py-2 rounded-lg ${
              selectedDay === day
                ? "bg-orange-500 text-white"
                : "bg-gray-900  font-bold"
            }`}
            onClick={() => handleClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {selectedDay && (
          <div className=" p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-white  mb-2">
              {`${selectedDay}'s`} Schedule
            </h2>
            {<ClassTime></ClassTime>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassSchedule;
