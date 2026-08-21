/**
 * Design reminder — 지역을 잇는 공식 문장:
 * a light civic editorial page with offset columns, official labels and restrained red/blue ribbons.
 */
import { ArrowDown, ArrowUpRight, Building2, Handshake, Landmark, Sprout } from "lucide-react";
import { Link } from "wouter";
import { PageIntro, SectionLabel, SiteLayout } from "@/components/SiteLayout";

const heroUrl = "/about-hero.jpg";
const logoUrl = "/logo.png";

const pillars = [
  { icon: Handshake, title: "사업체 협력", body: "회원 사업인이 서로의 업소를 알리고, 정보와 기회를 나눕니다." },
  { icon: Sprout, title: "신규 정착 지원", body: "새로 정착하는 사업자와 이주민이 지역 정보와 네트워크에 닿도록 돕습니다." },
  { icon: Landmark, title: "공동체 기록", body: "선배 세대가 쌓아 온 경험을 기록하고 다음 세대로 잇습니다." },
];

export default function About() {
  return (
    <SiteLayout>
      <section className="about-hero">
        <div className="about-hero-image"><img src={heroUrl} alt="2019년 훼잇빌 한인상공회의소 회장 이·취임식 단체사진" /></div>
        <div className="about-hero-copy">
          <p className="eyebrow light">KOREAN AMERICAN CHAMBER OF COMMERCE · FAYETTEVILLE NC</p>
          <h1>한인 상공인의 든든한 지킴이<br /><em>훼잇빌 한인상공회의소</em></h1>
          <p>포트 브래그와 이웃한 훼잇빌에서, 한인 사업체의 성장과 지역사회와의 협력을 지원합니다.</p>
          <a href="#mission" className="scroll-cue"><ArrowDown size={18} /> 상공회의소가 하는 일</a>
        </div>
        <div className="hero-vertical-tag">FAYETTEVILLE · NORTH CAROLINA</div>
      </section>

      <section id="mission" className="mission-section">
        <SectionLabel number="01" label="OUR ROLE" />
        <div className="mission-main">
          <h2>한인 사업인의 곁에서,<br /><span>실질적인</span> 도움이<br />되도록.</h2>
          <div className="mission-text">
            <p>훼잇빌 한인상공회의소는 회원 사업체의 성장을 돕는 비영리 단체입니다. 사업인 사이의 교류와 정보 공유, 새로 정착하는 사업자 지원, 그리고 한인사회가 쌓아 온 경험을 다음 세대로 잇는 일을 합니다.</p>
            <a className="text-link" href="https://atlantak.com/%eb%af%b8%ea%b5%b0%ea%b8%b0%ec%a7%80-%ea%b3%81%ec%97%90%ec%84%9c-%ec%9d%bc%ea%b5%b0-%ed%95%9c%ec%9d%b8%ea%b2%bd%ec%a0%9c%ed%9b%bc%ec%9e%87%eb%b9%8c-%ec%83%81%ec%9d%98-%ec%9d%b4/" target="_blank" rel="noreferrer">소개 기사 읽기 <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="pillar-list">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return <article className="pillar-card" key={pillar.title}><span>0{index + 1}</span><Icon size={27} strokeWidth={1.45} /><h3>{pillar.title}</h3><p>{pillar.body}</p></article>;
          })}
        </div>
      </section>

      <section className="history-band">
        <div className="history-image"><img src={logoUrl} alt="훼잇빌 한인상공회의소 공식 로고" /></div>
        <div className="history-copy">
          <SectionLabel number="02" label="ROOTED HERE" />
          <p className="history-kicker">FORT BRAGG · FAYETTEVILLE · KOREAN COMMUNITY</p>
          <h2>군사도시 훼잇빌의 역사 속에서,<br />한인 경제의 <em>자리를 만들다.</em></h2>
          <p>훼잇빌 한인사회는 포트 브래그와 인접한 지역의 역사 속에서 성장해 왔습니다. 상공회의소는 국제결혼 한인여성들의 정착 경험과 지역 사업인들의 협력을 바탕으로, 도시의 특성에 맞는 독자적인 역할을 이어가고 있습니다.</p>
        </div>
      </section>

      <section className="leadership-section">
        <SectionLabel number="03" label="LEADERSHIP" />
        <div className="leadership-grid">
          <h2>이어 온 리더십,<br /><span>넓어지는 역할.</span></h2>
          <div className="leadership-note"><Building2 size={30} strokeWidth={1.35} /><p>창립 초기 권혁례 이사장이 조직의 기틀을 세웠고, 김미경 전 회장이 활동의 외연을 넓혔습니다. 현재는 김현철 회장과 임원진이 상공회의소 운영에 참여하고 있습니다.</p><small>공개 보도자료 기준</small></div>
        </div>
      </section>

      <section className="quiet-cta">
        <p className="eyebrow">NEWS</p>
        <h2>지금까지의 활동을<br />살펴보세요.</h2>
        <Link href="/news" className="round-arrow" aria-label="소식 페이지 보기"><ArrowUpRight size={28} /></Link>
      </section>
    </SiteLayout>
  );
}

