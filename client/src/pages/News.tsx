/**
 * Design reminder — 지역을 잇는 공식 문장:
 * civic archive layout, strong year stamps and generous paper-white fields for public records.
 */
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { PageIntro, SectionLabel, SiteLayout } from "@/components/SiteLayout";

const networkingUrl = "/news-feature.jpg";
const articleUrl = "https://atlantak.com/%eb%af%b8%ea%b5%b0%ea%b8%b0%ec%a7%80-%ea%b3%81%ec%97%90%ec%84%9c-%ec%9d%bc%ea%b5%b0-%ed%95%9c%ec%9d%b8%ea%b2%bd%ec%a0%9c%ed%9b%bc%ec%9e%87%eb%b9%8c-%ec%83%81%ec%9d%98-%ec%9d%b4/";
const gratitudeArticleUrl = "https://tinyurl.com/4pznhcsv";
const videoUrl = "https://www.youtube.com/watch?v=CTFVAwed78Y";
const foundingPresidentUrl = "https://tinyurl.com/stn348rx";

const archive = [
  { year: "2026", title: "전국수학경시대회 훼잇빌 지역 개최", body: "재미한인과학기술자협회(KSEA)와 함께 4~11학년 학생을 위한 전국수학경시대회 훼잇빌 지역 대회를 성 김대건 안드레아 성당에서 열었습니다.", tag: "차세대" },
  { year: "2025", title: "참전용사·이민 1세대 감사잔치", body: "게이트 포 골프&컨트리클럽에서 한국전 참전용사와 65세 이상 이민 1세대를 초청해 감사잔치를 열었습니다. 약 250명이 참석해 1세대의 정착 이야기를 나눴습니다.", tag: "공동체" },
  { year: "2024", title: "지역 커뮤니티 홀리데이 나눔", body: "연말을 맞아 지역 이웃과 함께하는 홀리데이 나눔·선물 전달로 지역사회에 감사를 전했습니다.", tag: "지역나눔" },
  { year: "2023", title: "제5대 회장 이·취임식", body: "게이트 포 골프&컨트리클럽에서 이·취임식을 열고, 김미경 회장에 이어 김현철 회장이 상공회의소를 이끌게 되었습니다.", tag: "리더십" },
  { year: "2022", title: "NC 훼잇빌 한인친선 골프대회", body: "회원과 지역 한인이 함께한 친선 골프대회로 사업인 간 교류의 장을 이어 갔습니다.", tag: "네트워크" },
  { year: "2021", title: "비즈니스 리더 오찬", body: "지역 사업인들이 한자리에 모여 정보를 나누고 협력을 논의하는 비즈니스 리더 오찬을 열었습니다.", tag: "네트워크" },
  { year: "2020", title: "코로나19 마스크 기부·지역 나눔", body: "코로나19 시기, 지역 한인 업소와 이웃에 마스크를 전달하며 어려운 시기를 함께 견뎠습니다.", tag: "지역나눔" },
  { year: "2020", title: "사업자를 위한 세무(Tax) 세미나", body: "공인회계사 Andrew Hong을 초청해 자영업자·임대사업자·소규모 사업자를 위한 세금보고 정보를 나눴습니다.", tag: "실용정보" },
  { year: "2019", title: "신임 회장 취임과 차세대 교육세미나", body: "권혁례 회장에 이어 김미경 회장이 취임했으며(현지 언론 보도), 임한규 교수를 초청해 차세대 리더 양성 교육세미나를 열었습니다.", tag: "리더십" },
  { year: "2019", title: "연말 커뮤니티 모임", body: "회원과 지역 한인이 함께한 연말 커뮤니티 모임으로 한 해의 활동을 마무리했습니다.", tag: "공동체" },
  { year: "2018", title: "한인업소록 및 생활정보 가이드 발간", body: "지역 한인업소 정보와 생활 안내를 담은 「훼잇빌 한인 비즈니스 디렉토리 & 생활정보 가이드」를 발간해 소비자·사업체·신규 정착자를 이었습니다.", tag: "지역연결" },
  { year: "2016", title: "제15차 세계 한상대회 참가", body: "회장단이 제15차 세계 한상대회에 참가해 지역 경제 현안과 한상 네트워크 확대를 논의했습니다.", tag: "한상네트워크" },
  { year: "2015", title: "친선 골프대회 개최", body: "게이트 포 골프&컨트리클럽에서 훼잇빌·랄리·그린스보로 지역 한인이 함께한 친선 골프대회를 열었습니다.", tag: "네트워크" },
];

export default function News() {
  return (
    <SiteLayout>
      <PageIntro number="02" eyebrow="NEWS & ARCHIVE" title={<>지금까지의<br /><em>생생한 활동 기록</em></>} description="사업인 지원, 교육, 지역사회 교류까지. 훼잇빌 한인상공회의소가 이어온 주요 활동입니다." />

      <section className="feature-news">
        <SectionLabel number="FEATURE" label="RECENT STORY" />
        <article className="feature-news-card">
          <div className="feature-news-image"><img src={networkingUrl} alt="2025 훼잇빌 한인 1세대를 위한 감사잔치 현장" /><span>2025 감사잔치 · Gates Four Country Club</span></div>
          <div className="feature-news-copy">
            <div className="feature-news-meta"><CalendarDays size={15} /><span>2026 · ATLANTA K</span></div>
            <h2>군기지 곁에서 일군 한인경제<br /><em>훼잇빌 상의 이끈 여성들</em></h2>
            <p>지역 한인경제의 성장과 상공회의소의 설립 배경, 여성 지도자들이 이어 온 리더십, 그리고 사업인 협력·차세대 교육·지역 문화교류 활동을 다룬 보도입니다.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href={articleUrl} target="_blank" rel="noreferrer" className="button-link">기사 원문 보기 <ExternalLink size={16} /></a>
              <a href={gratitudeArticleUrl} target="_blank" rel="noreferrer" className="button-link">감사잔치 기사 <ExternalLink size={16} /></a>
              <a href={videoUrl} target="_blank" rel="noreferrer" className="button-link">행사 영상 보기 <ArrowUpRight size={16} /></a>
              <a href={foundingPresidentUrl} target="_blank" rel="noreferrer" className="button-link">권혁례 초대회장 기사 <ExternalLink size={16} /></a>
            </div>
          </div>
        </article>
      </section>

      <section className="archive-section">
        <SectionLabel number="ARCHIVE" label="SELECTED MILESTONES" />
        <div className="archive-heading"><h2>일상의 필요에서<br /><span>지역의 자부심까지.</span></h2><p>아래 기록은 상공회의소 자료와 공개 보도를 바탕으로 정리했습니다. 최신 일정은 공식 Facebook에서 확인하실 수 있습니다.</p></div>
        <div className="archive-list">
          {archive.map((item) => <article className="archive-item" key={item.year + item.title}><div className="archive-year"><span>{item.year}</span><small>RECORD</small></div><div className="archive-copy"><span>{item.tag} · 활동 기록</span><h3>{item.title}</h3><p>{item.body}</p></div><Link href={`/gallery#${item.year}`} aria-label={`${item.title} 사진 보기`}><ArrowUpRight size={19} /></Link></article>)}
        </div>
      </section>

      <section className="news-bottom-cta">
        <p className="eyebrow light">GALLERY</p><h2>사진으로 보는<br />상공회의소의 활동.</h2><Link href="/gallery" className="button-link button-link--light">갤러리로 이동 <ArrowUpRight size={16} /></Link>
      </section>
    </SiteLayout>
  );
}
