/**
 * Design reminder — 지역을 잇는 공식 문장:
 * contemporary civic editorial layout, archival labels, civic navy and restrained red.
 */
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight, Facebook } from "lucide-react";
import { useEffect, useState } from "react";

const logoUrl = "/logo.png";
const markUrl = "/logo.png";

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
        <div className="footer-seal"><img src={markUrl} alt="훼잇빌 한인상공회의소 로고" /></div>
        <div className="footer-title">
          <p className="eyebrow light">KACC FAYETTEVILLE, NC</p>
          <h2>훼잇빌에서 함께 일해 온<br />한인 사업인들의 자리.</h2>
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
