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
          <h2>한인 사업인의 곁에서,<br /><span>실질적인</span> 도움이 되도록.</h2>
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
          <h2>군사도시 훼잇빌의 토양 위에,<br /><span style={{ color: "#b8413d" }}>한인경제의 뿌리를 깊게 내리다.</span></h2>
          <p>훼잇빌 한인사회는 포트 브래그와 인접한 지역의 역사 속에서 성장해 왔습니다. 상공회의소는 국제결혼 한인여성들의 정착 경험과 지역 사업인들의 협력을 바탕으로, 도시의 특성에 맞는 독자적인 역할을 이어가고 있습니다.</p>
        </div>
      </section>

      <section className="leadership-section">
        <SectionLabel number="03" label="LEADERSHIP" />
        <div className="leadership-cols">
          <div className="leadership-col">
            <a className="lead-photo" href="https://tinyurl.com/2nydfxb6" target="_blank" rel="noreferrer" style={{ display: "block" }}><img src="/leadership-group.jpg" alt="훼잇빌 한인상공회의소 임원진" /></a>
            <h2>로컬 한인상공인의 리더십,<br /><span>글로벌 한상으로 이어지다.</span></h2>
          </div>
          <div className="leadership-col">
            <div className="lead-photo lead-photo--portrait"><img src="/president.jpg" alt="훼잇빌 한인상공회의소 김현철 회장" /></div>
            <div className="president-name"><span>회장 · PRESIDENT</span><strong>김현철</strong></div>
            <p>훼잇빌 한인상공회의소는 노스캐롤라이나 훼잇빌 지역 한인 사업체의 성장과 성공, 협력을 지원하고 증진하기 위해 설립된 비영리 단체입니다. 회원 간 네트워크 형성, 정보 공유, 경제 발전을 통해 지역 비즈니스 공동체를 강화하는 것을 목표로 합니다. 또한 지역사회와의 협력과 소통을 통해 한인 비즈니스의 권익을 대표하고 신규 사업자를 돕는 역할을 합니다.</p>
          </div>
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

