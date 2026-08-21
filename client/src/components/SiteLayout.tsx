/**
 * Design reminder — 지역을 잇는 공식 문장:
 * contemporary civic editorial layout, archival labels, civic navy and restrained red.
 */
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight, Facebook } from "lucide-react";
import { useEffect, useState } from "react";

const logoUrl = "/logo.png";
// 푸터 로고 — 이미지 파일 대신 파일 안에 직접 내장(별도 업로드/경로 불필요)
const logoWide = "data:image/png;base64,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";

const navItems = [
  { label: "About", labelKr: "소개", href: "/about" },
  { label: "News", labelKr: "소식", href: "/news" },
  { label: "Gallery", labelKr: "갤러리", href: "/gallery" },
  { label: "Contact", labelKr: "문의", href: "/contact" },
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/about" className="brand-lockup" aria-label="훼잇빌 한인상공회의소 소개 페이지">
      <img className={compact ? "brand-logo brand-logo--compact" : "brand-logo"} src={logoUrl} alt="훼잇빌 한인상공회의소 공식 로고" />
      {!compact && (
        <span className="brand-copy">
          <strong>훼잇빌 한인상공회의소</strong>
          <small>KOREAN AMERICAN CHAMBER OF COMMERCE · FAYETTEVILLE, NC</small>
        </span>
      )}
    </Link>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href || (location === "/" && item.href === "/about") ? "nav-link is-active" : "nav-link"}>
                <span>{item.label}</span><small>{item.labelKr}</small>
              </Link>
            ))}
          </nav>
          <a className="header-fb" href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer">
            <Facebook size={15} aria-hidden="true" /> <span>Facebook</span><ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button className="menu-trigger" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link">
                <span className="mobile-nav-index">0{index + 1}</span><span>{item.label}</span><small>{item.labelKr}</small><ArrowUpRight size={18} />
              </Link>
            ))}
            <a className="mobile-facebook" href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer"><Facebook size={17} /> 공식 Facebook 페이지</a>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-seal" style={{ display: "inline-flex", alignItems: "center", background: "#fffdfa", borderRadius: "12px", padding: "12px 18px", width: "fit-content" }}><img src={logoWide} alt="훼잇빌 한인상공회의소 로고" style={{ width: "auto", height: "46px", objectFit: "contain", display: "block" }} /></div>
        <div className="footer-title">
          <p className="eyebrow light">KACC FAYETTEVILLE, NC</p>
          <h2>훼잇빌에서 함께 성장해 온<br />한인 상공인들의 보금자리.</h2>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/kacc.faync" target="_blank" rel="noreferrer">Facebook 공식 채널 <ArrowUpRight size={15} /></a>
          <p>© {new Date().getFullYear()} Korean American Chamber of Commerce of Fayetteville NC.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: React.ReactNode; description: string }) {
  return (
    <section className="page-intro">
      <div className="page-intro-number">{number}</div>
      <div className="page-intro-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-description">{description}</p>
      </div>
    </section>
  );
}

export function SectionLabel({ label, number }: { label: string; number: string }) {
  return <div className="section-label"><span>{number}</span><i /><p>{label}</p></div>;
}
