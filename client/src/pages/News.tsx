/**
 * Gallery — 연도별·행사별 실제 활동 사진 아카이브.
 */
import { ArrowUpRight, Facebook, Images } from "lucide-react";
import { PageIntro, SiteLayout } from "@/components/SiteLayout";
import { useEffect } from "react";

const gallery = [
  {
    year: "2026",
    events: [
      { title: "전국수학경시대회 훼잇빌 지역 개최", date: "", photos: ["/gallery/2026-math.jpg"] },
    ],
  },
  {
    year: "2025",
    events: [
      { title: "참전용사·이민 1세대 감사잔치", date: "2025.11.15", photos: ["/gallery/2025-appreciation-01.jpg", "/gallery/2025-appreciation-02.jpg", "/gallery/2025-appreciation-03.jpg", "/gallery/2025-appreciation-04.jpg", "/gallery/2025-appreciation-05.jpg", "/gallery/2025-appreciation-06.jpg", "/gallery/2025-appreciation-07.jpg", "/gallery/2025-appreciation-08.jpg", "/gallery/2025-appreciation-09.jpg"] },
    ],
  },
  {
    year: "2024",
    events: [
      { title: "지역 커뮤니티 홀리데이 나눔", date: "", photos: ["/gallery/2024-holiday.jpg"] },
    ],
  },
  {
    year: "2023",
    events: [
      { title: "제5대 회장 이·취임식", date: "", photos: ["/gallery/2023-inauguration.jpg"] },
    ],
  },
  {
    year: "2022",
    events: [
      { title: "NC 훼잇빌 한인친선 골프대회", date: "", photos: ["/gallery/2022-golf.jpg"] },
    ],
  },
  {
    year: "2021",
    events: [
      { title: "비즈니스 리더 오찬", date: "", photos: ["/gallery/2021-luncheon-01.jpg", "/gallery/2021-luncheon-02.jpg"] },
    ],
  },
  {
    year: "2020",
    events: [
      { title: "코로나19 마스크 기부·지역 나눔", date: "", photos: ["/gallery/2020-covid-01.jpg", "/gallery/2020-covid-02.jpg", "/gallery/2020-covid-03.jpg", "/gallery/2020-covid-04.jpg", "/gallery/2020-covid-05.jpg", "/gallery/2020-covid-06.jpg", "/gallery/2020-covid-07.jpg", "/gallery/2020-covid-08.jpg", "/gallery/2020-covid-09.jpg", "/gallery/2020-covid-10.jpg", "/gallery/2020-covid-11.jpg"] },
      { title: "사업자를 위한 세무 세미나", date: "", photos: ["/gallery/2020-tax.jpg"] },
    ],
  },
  {
    year: "2019",
    events: [
      { title: "제4대 회장 이·취임식", date: "2019.02.24", photos: ["/gallery/2019-inauguration-01.jpg", "/gallery/2019-inauguration-02.jpg", "/gallery/2019-inauguration-03.jpg", "/gallery/2019-inauguration-04.jpg", "/gallery/2019-inauguration-05.jpg", "/gallery/2019-inauguration-06.jpg", "/gallery/2019-inauguration-07.jpg", "/gallery/2019-inauguration-08.jpg", "/gallery/2019-inauguration-09.jpg", "/gallery/2019-inauguration-10.jpg", "/gallery/2019-inauguration-11.jpg", "/gallery/2019-inauguration-12.jpg", "/gallery/2019-inauguration-13.jpg"] },
      { title: "차세대 리더 교육세미나", date: "2019.08.25", photos: ["/gallery/2019-seminar-p-01.jpg", "/gallery/2019-seminar-p-02.jpg", "/gallery/2019-seminar-p-03.jpg", "/gallery/2019-seminar-p-04.jpg", "/gallery/2019-seminar-p-05.jpg", "/gallery/2019-seminar.jpg"] },
      { title: "친선 골프대회", date: "", photos: ["/gallery/2019-golf-01.jpg", "/gallery/2019-golf-02.jpg", "/gallery/2019-golf-03.jpg", "/gallery/2019-golf-04.jpg", "/gallery/2019-golf-05.jpg"] },
      { title: "미주 한인상공회의소(KACC-USA) 교류", date: "", photos: ["/gallery/2019-kaccusa-01.jpg", "/gallery/2019-kaccusa-02.jpg"] },
      { title: "연말 커뮤니티 모임", date: "", photos: ["/gallery/2019-yearend.jpg"] },
    ],
  },
  {
    year: "2018",
    events: [
      { title: "한인업소록·생활정보 가이드 발간", date: "", photos: ["/gallery/2018-directory.jpg"] },
    ],
  },
  {
    year: "2016",
    events: [
      { title: "제15차 세계 한상대회 참가", date: "", photos: ["/gallery/2016-hansang.jpg"] },
    ],
  },
  {
    year: "2015",
    events: [
      { title: "한인 친선 골프대회", date: "", photos: ["/gallery/2015-golf.jpg"] },
    ],
  },
];

export default function Gallery() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <SiteLayout>
      <PageIntro number="03" eyebrow="GALLERY" title={<>사진으로 남긴<br /><em>활동의 기록.</em></>} description="2015년부터 이어 온 훼잇빌 한인상공회의소의 활동을 연도별로 살펴보세요." />
      <section className="gallery-intro-strip"><Images size={22} strokeWidth={1.45} /><p>훼잇빌 한인상공회의소의 실제 활동 사진입니다. <strong>더 많은 현장 사진은 공식 Facebook 아카이브에서 확인하세요.</strong></p><a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer">공식 사진 보기 <ArrowUpRight size={15} /></a></section>
      <div className="gallery-years">
        {gallery.map((yr) => (
          <section className="gallery-year" id={yr.year} key={yr.year}>
            <div className="gallery-year-head"><h2>{yr.year}</h2><span /></div>
            {yr.events.map((ev) => (
              <div className="gallery-event" key={ev.title}>
                <div className="gallery-event-head"><h3>{ev.title}</h3>{ev.date && <span>{ev.date}</span>}</div>
                <div className="gallery-grid">
                  {ev.photos.map((src, j) => (
                    <a className="gallery-thumb" href={src} target="_blank" rel="noreferrer" key={src}><img src={src} alt={ev.title + " " + (j + 1)} loading="lazy" /></a>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
      <section className="facebook-panel"><div><p className="eyebrow light">OFFICIAL PHOTO ARCHIVE</p><h2>더 많은 현장 사진은<br /><em>공식 Facebook에서.</em></h2></div><a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer" className="facebook-button"><Facebook size={19} /> Kacc Fay NC <ArrowUpRight size={17} /></a></section>
    </SiteLayout>
  );
}
