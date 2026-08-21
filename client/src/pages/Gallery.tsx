/**
 * Design reminder — 지역을 잇는 공식 문장:
 * gallery works like a civic archive: dates, credits and restrained captions keep imagery honest.
 */
import { ArrowUpRight, Facebook, Images } from "lucide-react";
import { PageIntro, SectionLabel, SiteLayout } from "@/components/SiteLayout";

const images = {
  culture: "/gallery-culture.jpg",
  network: "/gallery-network.jpg",
  mentor: "/gallery-mentor.jpg",
  hero: "/gallery-hero.jpg",
};

const galleryItems = [
  { index: "01", category: "CULTURAL EXCHANGE", title: "한복으로 나누는 한국 전통", body: "기념식과 행사에서 한복과 전통문화를 통해 한인의 정체성을 지역사회와 나눕니다.", image: images.culture, style: "gallery-card gallery-card--large" },
  { index: "02", category: "BUSINESS NETWORK", title: "사업인 간의 실질적 연결", body: "친선 골프대회 등 회원 사업인이 한자리에 모여 교류하고 서로의 업소를 알리는 자리를 이어 왔습니다.", image: images.network, style: "gallery-card gallery-card--square" },
  { index: "03", category: "RECOGNITION", title: "함께한 이들을 기리는 자리", body: "지역사회와 상공회의소에 기여한 회원들에게 공로패를 전하며 그 헌신을 기록합니다.", image: images.mentor, style: "gallery-card gallery-card--portrait" },
  { index: "04", category: "COMMUNITY", title: "한인 1세대를 위한 감사잔치", body: "2025년 한인 1세대를 위한 감사잔치 등 세대와 지역을 잇는 만남의 자리를 만들어 갑니다.", image: images.hero, style: "gallery-card gallery-card--wide" },
];

export default function Gallery() {
  return (
    <SiteLayout>
      <PageIntro number="03" eyebrow="GALLERY" title={<>기록으로 남기는<br /><em>우리의 연결.</em></>} description="지역사회, 사업, 문화, 세대를 연결해 온 훼잇빌 한인상공회의소의 활동을 한눈에 살펴보세요." />
      <section className="gallery-intro-strip"><Images size={22} strokeWidth={1.45} /><p>훼잇빌 한인상공회의소의 실제 활동 사진입니다. <strong>더 많은 현장 사진은 공식 Facebook 아카이브에서 확인하세요.</strong></p><a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer">공식 사진 보기 <ArrowUpRight size={15} /></a></section>
      <section className="gallery-section">
        <SectionLabel number="ARCHIVE" label="FOUR SCENES OF CONNECTION" />
        <div className="masonry-gallery">
          {galleryItems.map((item) => <article className={item.style} key={item.index}><img src={item.image} alt={item.title} /><div className="gallery-scrim" /><div className="gallery-card-index"><b>{item.index}</b><small>ARCHIVE</small></div><div className="gallery-card-copy"><span>{item.category} · 활동기록</span><h2>{item.title}</h2><p>{item.body}</p><small>공식 Facebook 아카이브에서 더 보기</small></div></article>)}
        </div>
      </section>
      <section className="facebook-panel"><div><p className="eyebrow light">OFFICIAL PHOTO ARCHIVE</p><h2>더 많은 현장 사진은<br /><em>공식 Facebook에서.</em></h2></div><a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer" className="facebook-button"><Facebook size={19} /> Kacc Fay NC <ArrowUpRight size={17} /></a></section>
    </SiteLayout>
  );
}
