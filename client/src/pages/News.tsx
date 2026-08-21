/**
 * Design reminder — 지역을 잇는 공식 문장:
 * civic archive layout, strong year stamps and generous paper-white fields for public records.
 */
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { PageIntro, SectionLabel, SiteLayout } from "@/components/SiteLayout";

const networkingUrl = "/news-feature.jpg";
const articleUrl = "https://atlantak.com/%eb%af%b8%ea%b5%b0%ea%b8%b0%ec%a7%80-%ea%b3%81%ec%97%90%ec%84%9c-%ec%9d%bc%ea%b5%b0-%ed%95%9c%ec%9d%b8%ea%b2%bd%ec%a0%9c%ed%9b%bc%ec%9e%87%eb%b9%8c-%ec%83%81%ec%9d%98-%ec%9d%b4/";

const archive = [
  { year: "2026", title: "전국수학경시대회 훼잇빌 지역 행사 참여", body: "KSEA가 주최한 전국수학경시대회 훼잇빌 지역 행사에 참여해 청소년들의 과학·수학 분야 참여를 지원했습니다.", tag: "차세대" },
  { year: "2020", title: "사업 운영을 위한 세무 세미나", body: "공인회계사를 초청해 자영업자, 임대사업자, 소규모 사업자를 위한 세금보고와 사업 운영 정보를 나누었습니다.", tag: "실용정보" },
  { year: "2019", title: "차세대 리더 양성 교육 세미나", body: "지역 학부모와 주민을 대상으로 차세대 교육과 리더십의 중요성을 함께 나누는 자리를 마련했습니다.", tag: "교육" },
  { year: "2018", title: "한인업소록 및 생활정보 가이드 발간", body: "지역 한인업소 정보와 생활 안내를 담아 소비자·사업체·신규 정착자를 잇는 정보 기반을 만들었습니다.", tag: "지역연결" },
  { year: "2015", title: "한인 친선·교류 골프대회 개최", body: "훼잇빌, 랄리, 그린스보로 지역 한인들이 함께한 친선과 교류의 행사를 열었습니다.", tag: "네트워크" },
];

export default function News() {
  return (
    <SiteLayout>
      <PageIntro number="02" eyebrow="NEWS & ARCHIVE" title={<>지금까지의<br /><em>활동 기록.</em></>} description="사업인 지원, 교육, 지역사회 교류까지. 훼잇빌 한인상공회의소가 이어 온 주요 활동입니다." />

      <section className="feature-news">
        <SectionLabel number="FEATURE" label="RECENT STORY" />
        <article className="feature-news-card">
          <div className="feature-news-image"><img src={networkingUrl} alt="2025 훼잇빌 한인 1세대를 위한 감사잔치 현장" /><span>2025 감사잔치 · Gates Four Country Club</span></div>
          <div className="feature-news-copy">
            <div className="feature-news-meta"><CalendarDays size={15} /><span>2026 · ATLANTA K</span></div>
            <h2>미군기지 곁에서 일군 한인경제…<br /><em>훼잇빌 상의 이끈 여성들</em></h2>
            <p>지역 한인경제의 성장과 상공회의소의 설립 배경, 여성 지도자들이 이어 온 리더십, 그리고 사업인 협력·차세대 교육·지역 문화교류 활동을 다룬 보도입니다.</p>
            <a href={articleUrl} target="_blank" rel="noreferrer" className="button-link">기사 원문 보기 <ExternalLink size={16} /></a>
          </div>
        </article>
      </section>

      <section className="archive-section">
        <SectionLabel number="ARCHIVE" label="SELECTED MILESTONES" />
        <div className="archive-heading"><h2>일상의 필요에서<br /><span>지역의 자부심까지.</span></h2><p>아래 기록은 공개 보도를 바탕으로 구성했습니다. 최신 일정과 활동은 공식 Facebook 채널에서 확인할 수 있습니다.</p></div>
        <div className="archive-list">
          {archive.map((item) => <article className="archive-item" key={item.year + item.title}><div className="archive-year"><span>{item.year}</span><small>RECORD</small></div><div className="archive-copy"><span>{item.tag} · 공개 보도 기록</span><h3>{item.title}</h3><p>{item.body}</p></div><a href={articleUrl} target="_blank" rel="noreferrer" aria-label={`${item.title} 관련 기사 보기`}><ArrowUpRight size={19} /></a></article>)}
        </div>
      </section>

      <section className="news-bottom-cta">
        <p className="eyebrow light">GALLERY</p><h2>사진으로 보는<br />상공회의소의 활동.</h2><Link href="/gallery" className="button-link button-link--light">갤러리로 이동 <ArrowUpRight size={16} /></Link>
      </section>
    </SiteLayout>
  );
}
