import React from "react";

function Investment() {
  return (
    <>
      <div className="flex relative justify-center w-full">
        <div className="relative w-[600px] h-[936px]">
          <img
            className="absolute w-[57%] left-32 top-24"
            src="static/image/section7_5_stock_01.png"
          />
          <img
            className="absolute w-full h-full z-10"
            src="static/image/iPhone12_Clay_Shadow.png"
          />
        </div>
        <div className="absolute flex flex-wrap space-x-4 top-[67.5%]">
          {Array.from(Array(7), (_, i) => String(i + 2)).map((index) => (
            <img
              className="w-44"
              src={`static/image/section7_5_stock_0${index}.png`}
            />
          ))}
        </div>
        <div className="absolute text-2xl text-slate-600 font-semibold">
          <div className="flex space-x-[500px] mt-96 text-left">
            <p>
              이해하기 쉬운 용어
              <br />
              설명이 필요 없는 <br />
              직관적인 화면 구성
            </p>
            <p>
              송금처럼 쉬운 구매 경험 <br />
              그리고 투자 판단에 <br />
              도움을 주는 콘텐츠까지
            </p>
          </div>
          <p className="text-center mt-[500px]">
            별도 앱 설치 없이 토스에서 바로, <br />
            토스증권으로 나만의 투자를 시작해 보세요.
          </p>
        </div>
      </div>
    </>
  );
}

export default Investment;
