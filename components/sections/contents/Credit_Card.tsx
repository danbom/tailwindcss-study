import React from "react";

function Credit_Card({ src, title, sub }) {
  return (
    <div className="pr-12">
      <img className="w-28 mb-6" src={src} />
      <span className="text-2xl text-slate-700 font-semibold tracking-tighter">
        {title}
      </span>
      <p className="mt-4 text-xl text-slate-500 font-semibold tracking-tighter">
        {sub}
      </p>
    </div>
  );
}

export default Credit_Card;
