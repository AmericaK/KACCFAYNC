/**
 * Design reminder — 지역을 잇는 공식 문장:
 * formal civic contact page with high contrast, clear next step, no invented contact particulars.
 */
import { ArrowUpRight, Facebook, Handshake, MessageCircleMore, UsersRound } from "lucide-react";
import { PageIntro, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export default function Contact() {
  return (
    <SiteLayout>
      <PageIntro number="04" eyebrow="CONTACT" title={<>언제든<br /><em>연락 주세요.</em></>} description="회원 교류, 지역 협력, 행사 제안 등 상공회의소와 나누고 싶은 이야기는 공식 Facebook 메시지로 연락해 주세요." />
      <section className="contact-main">
        <SectionLabel number="CONNECT" label="START A CONVERSATION" />
        <div className="contact-grid">
          <div className="contact-statement"><h2>궁금한 점이 있으시면<br />편하게 <span>연락</span><br />주세요.</h2><p>훼잇빌 한인상공회의소는 한인 사업인과 지역사회의 의견과 제안을 언제나 환영합니다.</p></div>
          <div className="contact-action-card"><div className="contact-action-icon"><MessageCircleMore size={28} strokeWidth={1.45} /></div><p className="eyebrow">OFFICIAL CONTACT CHANNEL</p><h3>Facebook 메시지로<br />문의하기</h3><p>공식 Facebook 페이지의 메시지 기능을 통해 활동·행사·협력 관련 문의를 남겨 주세요.</p><a className="button-link" href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer"><Facebook size={16} /> Kacc Fay NC 열기 <ArrowUpRight size={16} /></a></div>
        </div>
      </section>
      <section className="contact-topics">
        <SectionLabel number="TOPICS" label="WHAT WE CAN CONNECT" />
        <div className="topic-list">
          <article><span>01</span><Handshake size={27} strokeWidth={1.35} /><h3>사업·지역 협력</h3><p>지역 프로젝트, 기관 간 교류, 커뮤니티 파트너십에 관한 제안</p></article>
          <article><span>02</span><UsersRound size={27} strokeWidth={1.35} /><h3>회원 네트워크</h3><p>한인 사업체 연결, 신규 정착 정보, 비즈니스 교류에 관한 문의</p></article>
          <article><span>03</span><MessageCircleMore size={27} strokeWidth={1.35} /><h3>행사·소식 안내</h3><p>지역 행사, 교육 프로그램, 상공회의소 활동에 관한 질문과 공유</p></article>
        </div>
      </section>
      <section className="contact-closing"><p className="eyebrow light">FAYETTEVILLE · NORTH CAROLINA</p><h2>가까이에서,<br />함께하겠습니다.</h2><a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer" className="round-arrow round-arrow--light" aria-label="Facebook으로 문의하기"><ArrowUpRight size={29} /></a></section>
    </SiteLayout>
  );
}

