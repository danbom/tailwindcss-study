import React from "react";

function Remittance() {
  return (
    <>
      <div className="mt-24 space-y-28">
        <div className="flex justify-center items-center ml-[5%] space-x-32">
          <div>
            <p className="flex mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-7 h-7 mr-1"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <g
                  fill="none"
                  stroke="#007ff2"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                >
                  <path d="M16.25 8.92l-1.85 6.71c-.06.2-.34.2-.4 0l-1.8-6.56c-.06-.2-.34-.2-.4 0L10 15.63c-.06.2-.34.2-.4 0L7.75 8.92M15.3 12.35H18M8.7 12.35H6"></path>
                </g>
                <circle cx="12" cy="1.97" r="1.98" fill="#4d9cff"></circle>
                <circle
                  transform="rotate(-60 3.313 6.985)"
                  cx="3.31"
                  cy="6.98"
                  fill="#74b6ff"
                  r="1.98"
                ></circle>
                <circle
                  transform="rotate(-30 3.312 17.015)"
                  cx="3.31"
                  cy="17.02"
                  fill="#007ff2"
                  r="1.98"
                ></circle>
                <circle cx="12" cy="22.03" r="1.98" fill="#4d9cff"></circle>
                <circle
                  transform="rotate(-60 20.687 17.016)"
                  cx="20.69"
                  cy="17.02"
                  fill="#74b6ff"
                  r="1.98"
                ></circle>
                <circle
                  transform="rotate(-30 20.686 6.986)"
                  cx="20.69"
                  cy="6.98"
                  fill="#007ff2"
                  r="1.98"
                ></circle>
              </svg>
              <span className="text-xl text-sky-600 font-semibold tracking-tighter">
                평생 무료 송금
              </span>
            </p>
            <p className="mb-7 text-4xl text-slate-700 font-semibold leading-snug tracking-tighter">
              토스 평생 무료송금으로
              <br /> 모두의 금융에 자유를
            </p>
            <p className="text-xl text-slate-600/70 font-bold tracking-tighter">
              누구에게 보내든 은행 상관 없이, <br />
              이제 토스와 함께 수수료 걱정 없이 송금하세요.
            </p>
          </div>
          <div className="w-[31%]">
            <img className="w-full" src="static/image/section4_2_01.png" />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-24">
          <div className="w-[29%]">
            <img className="w-full" src="static/image/section4_2_02.png" />
          </div>
          <div>
            <p className="flex mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-7 h-7 mr-1"
              >
                <path
                  d="M11.6.7L2.9 4.2c-.4.2-.7.6-.7 1v8.3c0 3.8 4.8 7.5 9.3 9.8.3.1.6.1.9 0 4.5-2.3 9.3-6 9.3-9.8V5.2c0-.4-.2-.8-.6-.9L12.4.7c-.3-.1-.6-.1-.8 0z"
                  fill="#007ff7"
                ></path>
                <path
                  d="M10.9 15.8c-.3 0-.5-.1-.7-.3l-3.4-3.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.7 2.7 4.9-4.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.6 5.6c-.2.2-.4.3-.7.3z"
                  fill="#fff"
                ></path>
              </svg>
              <span className="text-xl text-sky-600 font-semibold tracking-tighter">
                사기계좌 조회
              </span>
            </p>
            <p className="mb-7 text-4xl text-slate-700 font-semibold leading-snug tracking-tighter">
              송금 전 사기 내역 조회로 <br />
              피해를 미리 방지할 수 있어요
            </p>
            <p className="text-xl text-slate-600/70 font-bold tracking-tighter">
              송금 전 토스가 알아서 사기 내역 조회를 해드려요. <br />
              상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
              <br /> 안전하게 송금할 수 있어요.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-[5%] space-x-32">
          <div>
            <p className="flex mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-7 h-7 mr-1"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5m0 21C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5"
                    fill="#afb7c0"
                  ></path>
                  <path
                    d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5"
                    fill="#fff"
                  ></path>
                  <path
                    d="M7.3 15.9c-.3 0-.6-.2-.8-.4-.3-.5-.2-1.1.3-1.4l4.7-3.2c.5-.3 1.1-.2 1.4.3.3.5.2 1.1-.3 1.4l-4.7 3.1c-.2.2-.4.2-.6.2"
                    fill="#ef4452"
                  ></path>
                  <path
                    d="M12 12.8c-.6 0-1-.4-1-1V6.6c0-.6.4-1 1-1s1 .4 1 1v5.2c0 .5-.4 1-1 1"
                    fill="#4e5968"
                  ></path>
                </g>
              </svg>
              <span className="text-xl text-sky-600 font-semibold tracking-tighter">
                자동이체 예약
              </span>
            </p>
            <p className="mb-7 text-4xl text-slate-700 font-semibold leading-snug tracking-tighter">
              은행 점검 시간,
              <br /> 기다릴 필요 없어요
            </p>
            <p className="text-xl text-slate-600/70 font-bold tracking-tighter">
              은행 점검 시간에는 자동이체 예약을 이용해보세요. <br />
              점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
            </p>
          </div>
          <div className="w-[31%]">
            <img className="w-full" src="static/image/section4_2_03.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Remittance;
