import React from "react";

function Section({ h, bg, sub, title, incontent, outcontent }) {
  return (
    <div className={`relative w-full ${h} ${bg}`}>
      <div className="w-fit mx-[22%] pt-64">
        <span className="text-2xl text-blue-500 font-semibold">{sub}</span>
        <p className="w-fit mt-8 text-5xl text-slate-800 font-semibold leading-snug">
          {title}
        </p>
        {incontent}
      </div>
      {outcontent}
    </div>
  );
}

export default Section;
