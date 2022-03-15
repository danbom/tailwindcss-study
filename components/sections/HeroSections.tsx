/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../common/Button";
import Section from "./Section";
import Home_Comsumption from "./contents/Home_Comsumption";
import Remittance from "./contents/Remittance";
import Loans from "./contents/Loans";
import Credit from "./contents/Credit";
import Investment from "./contents/Investment";

const navigation = [
  { name: "회사 소개", href: "#" },
  { name: "고객센터", href: "#" },
  { name: "자주 묻는 질문", href: "#" },
  { name: "공동인증서 관리", href: "#" },
  { name: "채용", href: "#" },
];

export default function HeroSections() {
  return (
    <div className="relative">
      <div className="w-full mx-auto">
        <div className="relative mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 tracking-tighter">
          {/* header */}

          <main>
            {/* section1 */}
            <div className="h-screen sm:text-center lg:text-center">
              <p className="w-fit mx-auto pt-44 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl  md:leading-snug space-y-6">
                금융의 모든 것<br /> 토스에서 쉽고 간편하게
              </p>

              <div className="w-fit mt-5 mx-auto sm:mt-8 sm:flex sm:justify-center md:mt-16 lg:justify-center">
                <div className="rounded-md shadow">
                  <Button
                    icon="/static/image/applekorea.png"
                    text="App Store"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    icon="/static/image/googleplay.png"
                    text="Google Play"
                  />
                </div>
              </div>
            </div>
            {/* section2 */}
            <div className="flex items-center w-full h-[603px] bg-slate-50">
              <p className="w-fit mx-auto text-3xl text-center font-semibold leading-normal">
                내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
                <br /> 이제껏 경험 못 했던 쉽고 편리한 금융 서비스, <br />
                토스와 함께라면 당신의 일상이 새로워질 거예요.
              </p>
            </div>
            {/* section3 */}
            <Section
              h="h-[1687px]"
              sub="홈 · 소비"
              title={
                <>
                  내 돈 관리, <br />
                  지출부터 일정까지 <br />
                  똑똑하게
                </>
              }
              bg={undefined}
              content={undefined}
            >
              <Home_Comsumption />
            </Section>
            {/* section4 */}
            <Section
              h="h-[2310px]"
              bg="bg-slate-50"
              sub="송금"
              title={
                <>
                  간편하고 안전하게 <br /> 수수료는 평생 무료로, <br />
                  이런 송금 써보셨나요?
                </>
              }
              content={undefined}
            >
              <Remittance />
            </Section>
            {/* section5 */}
            <Section
              h="h-[1326px]"
              sub="대출"
              title={
                <>
                  여러 은행의 조건을
                  <br />
                  1분 만에
                  <br />
                  확인해보세요
                </>
              }
              content={
                <>
                  <p className="w-fit mt-64 text-5xl text-slate-700 font-semibold leading-snug tracking-tighter">
                    한도는 <span className="text-slate-600">높게,</span>
                    <br />
                    금리는 <span className="text-slate-500">낮게,</span>
                    <br />
                    부담은 <span className="text-slate-300">적게.</span>
                  </p>
                  <p className="w-fit mt-10 text-xl text-slate-700 font-semibold leading-snug">
                    앉은 자리에서 여러 은행의 한도와 금리를 비교하고
                    <br />
                    내게 꼭 맞는 대출을 찾아보세요.
                    <br />
                    신용, 비상금, 대환, 주택담보대출 모두 가능해요.
                  </p>
                </>
              }
              bg={undefined}
            >
              <Loans />
            </Section>
            {/* section6 */}
            <Section
              h="h-[1686px]"
              bg="bg-slate-50"
              sub="신용"
              title={
                <>
                  금융 생활의 첫 걸음,
                  <br />
                  신용점수를 미리
                  <br />
                  무료로 관리하세요
                </>
              }
              content={<Credit />}
            >
              {undefined}
            </Section>
            {/* section7 */}
            <Section
              h="h-[1723px]"
              sub="투자"
              title={
                <>
                  투자,
                  <br />
                  모두가 할 수 있도록
                </>
              }
              bg={undefined}
              content={undefined}
            >
              <Investment />
            </Section>
          </main>
        </div>
      </div>
      {/* section1 background */}
      <div className="absolute w-full top-0">
        <img
          className="w-full h-screen object-cover"
          src="static/image/section1.jpg"
          alt=""
        />
      </div>
      {/* section1 gradient */}
      <div className="absolute top-0 w-full h-[11%] bg-gradient-to-t from-white/0 to-white/100"></div>
    </div>
  );
}
