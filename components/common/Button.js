import React from "react";

function Button({ icon, text }) {
  return (
    <div className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold tracking-tighter rounded-lg text-slate-50 bg-slate-800/90 hover:bg-slate-800/60 md:py-3 md:text-lg md:px-6 cursor-pointer ease-in-out duration-300">
      <img className="w-6 h-6 mr-2" src={icon} /> {text}
    </div>
  );
}

export default Button;
