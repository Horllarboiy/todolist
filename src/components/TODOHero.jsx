import React from "react";

const TODOHero = ({ todos_completed, total_todos }) => {
  const d = new Date();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = monthNames[d.getMonth()];
  let monthDay = d.getDate();
  let week = weekNames[d.getDay()];
  let currentTime = d.getHours();
  let year = d.getFullYear();
  let greetingText = "";

  if (currentTime < 12) {
    greetingText = "Good Morning";
  } else if (currentTime < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  return (
    <div>
      <section>
        <p className="text-5xl mt-10 font-semibold text-[#9a9ea8]">{greetingText}</p>
        <div className="flex justify-between items-center my-7">
          <div>
            <p className=" text-white">Today's {week} </p>
            <p className="text-[#5c6b84]">
              {month} {monthDay}, {year}
            </p>
          </div>
          <div className="text-[#5c6b84]">
            <p className="text-center">{todos_completed}/{total_todos}</p>
            <p>Completed Tasks</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TODOHero;
