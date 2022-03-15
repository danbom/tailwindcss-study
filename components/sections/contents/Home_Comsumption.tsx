import React from "react";

function Home_Comsumption() {
  return (
    <>
      <div className="absolute w-full top-64">
        <div className="absolute w-[600px] h-[936px] right-[17%]">
          <img
            className="absolute w-[57%] left-32 top-24"
            src="static/image/section3_home_01.png"
          />
          <img
            className="absolute w-full h-full"
            src="static/image/iPhone12_Clay_Shadow.png"
          />
        </div>
        <div className="absolute w-[600px] h-[936px] left-[17%] top-80">
          <img
            className="absolute w-[57%] left-32 top-24"
            src="static/image/section3_home_02.png"
          />
          <img
            className="absolute w-full h-full"
            src="static/image/iPhone12_Clay_Shadow.png"
          />
        </div>
      </div>

      <p className="absolute w-fit top-[1230px] right-[20%] text-2xl text-slate-700 font-semibold">
        토스에 계좌와 카드를 연결해 보세요. <br />
        잔고, 대출·투자 내역은 기본, <br />
        카드 실적 달성과 일자별 소비와 수입을 <br />한 번에 볼 수 있어요.
      </p>
    </>
  );
}

export default Home_Comsumption;
