import React from "react";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

function Section({ h, bg, sub, title, content, children }) {
  const AnimatedSub = useScrollFadeIn();
  const AnimatedTitle = useScrollFadeIn();
  return (
    <div className={`relative w-full ${h} ${bg}`}>
      <div className="animate-fadeUp w-fit mx-[22%] pt-64">
        <span {...AnimatedSub} className="text-2xl text-blue-500 font-semibold">
          {sub}
        </span>
        <p
          {...AnimatedTitle}
          className="w-fit mt-8 text-5xl text-slate-800 font-semibold leading-snug"
        >
          {title}
        </p>
        {content}
      </div>
      {children}
    </div>
  );
}

export default Section;
