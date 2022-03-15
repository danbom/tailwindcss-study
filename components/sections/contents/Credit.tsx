import React from "react";
import Credit_Card from "./Credit_Card";

function Credit() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-32 mt-24">
      <Credit_Card
        src="static/image/icon-credit-grade-check-2.png"
        title="내 신용점수"
        sub={
          <>
            언제 어디서든, 원할 때 간편하게 <br />
            KCB, NICE 신용점수를 한 곳에서 확인할 수<br />
            있어요.
          </>
        }
      />
      <Credit_Card
        src="static/image/icon-credit-grade-up-2.png"
        title="신용점수 올리기"
        sub={
          <>
            통신비, 일반 납부내역 등의 서류를 <br />
            토스에서 바로 제출해 신용점수를 올릴 수<br />
            있어요.
          </>
        }
      />
      <Credit_Card
        src="static/image/icon-alarm-3.png"
        title="신용관리 알림"
        sub={
          <>
            신용점수에 변동이 생기면 토스가 알람을 보내드려요.
            <br />
            나의 신용점수가 바뀔 때마다 바로 확인하세요.
          </>
        }
      />
      <Credit_Card
        src="static/image/icon-bulb-2.png"
        title="신용관리 팁"
        sub={
          <>
            신용점수 관리가 막막하다면?
            <br />
            신용관리 팁 콘텐츠를 한번 읽어보세요.
          </>
        }
      />
    </div>
  );
}

export default Credit;
