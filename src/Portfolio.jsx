import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────── INLINE STYLES ─────────────────────── */
const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  :root{
    --qblack:#0a0a0a;--qwhite:#ffffff;--qgray:#f5f5f5;--qgray2:#e8e8e8;--qgray3:#999;--qgray4:#555;
    --qred:#e4002b;--qred2:#b8001f;
    --text:#1a1a1a;--text2:#444;--text3:#777;
    --border:#e0e0e0;--border2:#d0d0d0;
    --card:#ffffff;
  }
  body{background:#fff;color:var(--text);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5}
  .topbar{background:var(--qblack);padding:8px 0}
  .topbar-inner{max-width:1200px;margin:0 auto;padding:0 40px;display:flex;justify-content:flex-end;gap:24px}
  .topbar a{color:#aaa;font-size:11px;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer}
  .topbar a:hover{color:#fff}
  nav{background:#fff;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
  .nav-inner{max-width:1200px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:space-between;height:68px}
  .nav-logo{display:flex;align-items:center;gap:10px}
  .logo-mark{width:38px;height:38px;background:var(--qred);border-radius:3px;display:flex;align-items:center;justify-content:center}
  .logo-mark svg{width:22px;height:22px;fill:#fff}
  .logo-text{font-size:1.05rem;font-weight:700;letter-spacing:0.06em;color:var(--text);text-transform:uppercase}
  .logo-text span{color:var(--qred)}
  .nav-links{display:flex;align-items:center;gap:0}
  .nav-links button{background:none;border:none;border-bottom:2px solid transparent;color:var(--text2);font-size:13px;font-weight:500;padding:10px 16px;cursor:pointer;letter-spacing:0.03em;transition:all 0.15s;text-transform:uppercase}
  .nav-links button:hover{color:var(--qred);border-bottom-color:var(--qred)}
  .nav-links button.active{color:var(--qred);border-bottom-color:var(--qred)}
  .nav-cta{background:var(--qred);color:#fff;border:none;padding:9px 20px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;transition:background 0.15s}
  .nav-cta:hover{background:var(--qred2)}
  .hero{background:var(--qblack);color:#fff;min-height:540px;display:flex;align-items:stretch;position:relative;overflow:hidden}
  .hero-left{flex:1;padding:80px 40px 80px 80px;display:flex;flex-direction:column;justify-content:center;max-width:660px}
  .hero-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:20px}
  .hero-eyebrow-line{width:32px;height:2px;background:var(--qred)}
  .hero-eyebrow span{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#aaa}
  .hero h1{font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:700;line-height:1.05;letter-spacing:-0.03em;margin-bottom:22px;color:#fff}
  .hero h1 em{color:var(--qred);font-style:normal}
  .hero-desc{font-size:1.05rem;color:#bbb;max-width:480px;line-height:1.65;margin-bottom:32px}
  .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
  .btn-red{background:var(--qred);color:#fff;border:none;padding:13px 28px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;transition:background 0.15s}
  .btn-red:hover{background:var(--qred2)}
  .btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.35);padding:12px 28px;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;transition:border-color 0.15s}
  .btn-ghost:hover{border-color:#fff}
  .hero-right{width:380px;background:#111;display:flex;flex-direction:column;justify-content:flex-end;padding:40px;position:relative}
  .hero-right-label{font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#555;margin-bottom:12px}
  .hero-stats{display:flex;flex-direction:column;gap:1px}
  .hstat{background:#1a1a1a;padding:18px 20px;display:flex;justify-content:space-between;align-items:center}
  .hstat-num{font-size:2rem;font-weight:700;color:#fff;letter-spacing:-0.04em}
  .hstat-label{font-size:11px;color:#666;text-transform:uppercase;letter-spacing:0.08em;text-align:right;line-height:1.4}
  .hero-bar{height:3px;background:var(--qred);position:absolute;top:0;left:0;right:0}
  .sec{padding:80px 40px}
  .sec-inner{max-width:1200px;margin:0 auto}
  .sec-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:14px}
  .sec-eyebrow-line{width:28px;height:2px;background:var(--qred)}
  .sec-eyebrow span{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--qred)}
  .sec h2{font-size:clamp(1.8rem,3vw,2.6rem);font-weight:700;letter-spacing:-0.03em;line-height:1.1;margin-bottom:12px}
  .sec-sub{font-size:1rem;color:var(--text3);max-width:560px;line-height:1.65;margin-bottom:48px}
  .about-sec{background:var(--qgray)}
  .about-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border2)}
  .about-card{background:#fff;padding:36px 28px}
  .about-card:hover{background:#fafafa}
  .about-num{font-size:2.6rem;font-weight:700;color:var(--qred);letter-spacing:-0.05em;margin-bottom:8px}
  .about-title{font-size:1rem;font-weight:700;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.04em}
  .about-body{font-size:0.875rem;color:var(--text2);line-height:1.65}
  .exp-sec{background:#fff}
  .exp-layout{display:grid;grid-template-columns:1fr 2fr;gap:60px;align-items:start}
  .exp-main-card{border:1px solid var(--border);padding:40px}
  .exp-toprow{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid var(--border)}
  .exp-role{font-size:1.5rem;font-weight:700;letter-spacing:-0.02em;margin-bottom:4px}
  .exp-company{color:var(--qred);font-weight:700;font-size:0.9rem;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:4px}
  .exp-loc{font-size:0.82rem;color:var(--text3)}
  .exp-badge{background:var(--qred);color:#fff;padding:6px 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap}
  .exp-list{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .exp-item{display:flex;gap:12px;align-items:flex-start}
  .exp-item-dot{width:8px;height:8px;background:var(--qred);margin-top:5px;flex-shrink:0}
  .exp-item span{font-size:0.875rem;color:var(--text2);line-height:1.5}
  .proj-sec{background:var(--qgray)}
  .proj-filter{display:flex;gap:4px;margin-bottom:32px;flex-wrap:wrap}
  .filter-btn{background:none;border:1px solid var(--border2);color:var(--text3);padding:7px 16px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;transition:all 0.15s}
  .filter-btn:hover,.filter-btn.on{background:var(--qred);border-color:var(--qred);color:#fff}
  .proj-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--border2)}
  .proj-card{background:#fff;transition:background 0.15s;position:relative;overflow:hidden}
  .proj-card:hover{background:#fafafa}
  .proj-img{height:6px;background:var(--qred)}
  .proj-body{padding:24px}
  .proj-cat-tag{display:inline-block;background:var(--qgray);border:1px solid var(--border);color:var(--text3);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:3px 10px;margin-bottom:12px}
  .proj-title{font-size:0.95rem;font-weight:700;color:var(--text);margin-bottom:8px;line-height:1.3;letter-spacing:-0.01em}
  .proj-desc{font-size:0.8rem;color:var(--text3);line-height:1.6;margin-bottom:14px}
  .proj-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px}
  .ptag{background:var(--qgray);border:1px solid var(--border);color:#555;font-size:10px;font-weight:600;padding:3px 8px;letter-spacing:0.04em}
  .proj-link{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--qred);text-decoration:none;border-bottom:1px solid transparent;transition:border-color 0.15s;cursor:pointer}
  .proj-link:hover{border-bottom-color:var(--qred)}
  .proj-link-arrow{font-size:14px;transition:transform 0.15s}
  .proj-card:hover .proj-link-arrow{transform:translateX(3px)}
  .proj-nda{font-size:12px;color:var(--text3);font-weight:600;letter-spacing:0.06em;text-transform:uppercase}
  .skills-sec{background:#fff}
  .skills-layout{display:grid;grid-template-columns:1fr 3fr;gap:60px;align-items:start}
  .skills-sidebar{border-right:1px solid var(--border);padding-right:40px}
  .skill-cat-label{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text3);padding:8px 0;cursor:pointer;transition:color 0.15s;border-bottom:1px solid var(--border)}
  .skill-cat-label:hover,.skill-cat-label.on{color:var(--qred)}
  .skills-main{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border)}
  .skill-tile{background:#fff;padding:24px;display:flex;align-items:center;justify-content:space-between}
  .skill-tile:hover{background:var(--qgray)}
  .sk-name{font-size:0.9rem;font-weight:700;color:var(--text);margin-bottom:3px}
  .sk-cat{font-size:11px;color:var(--text3);letter-spacing:0.05em;text-transform:uppercase}
  .sk-chip{font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border:1px solid}
  .fe{color:#1a56b0;border-color:#1a56b0;background:#eef3fb}
  .be{color:#6b21a8;border-color:#6b21a8;background:#f5f0fb}
  .db{color:#0369a1;border-color:#0369a1;background:#eef7fc}
  .ds{color:#166534;border-color:#166534;background:#eefbf3}
  .prog{color:#92400e;border-color:#92400e;background:#fdf6ec}
  .st{color:#9f1239;border-color:#9f1239;background:#fdf0f3}
  .edu-sec{background:var(--qgray)}
  .edu-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px}
  .edu-card{background:#fff;border:1px solid var(--border);padding:32px}
  .edu-card-top{display:flex;gap:16px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--border)}
  .edu-icon-sq{width:48px;height:48px;background:var(--qred);display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .edu-icon-sq svg{width:22px;height:22px;fill:#fff}
  .edu-deg-name{font-size:0.95rem;font-weight:700;margin-bottom:3px;line-height:1.2}
  .edu-deg-short{font-size:12px;font-weight:700;color:var(--qred);letter-spacing:0.08em;text-transform:uppercase}
  .edu-school{font-size:0.875rem;color:var(--text2);margin-bottom:4px}
  .edu-meta{font-size:0.8rem;color:var(--text3)}
  .edu-year-badge{display:inline-block;background:var(--qblack);color:#fff;padding:5px 12px;font-size:11px;font-weight:700;letter-spacing:0.06em}
  .cert-strip{background:var(--qblack);color:#fff;padding:28px 32px;display:flex;align-items:center;gap:24px}
  .cert-icon-sq{width:44px;height:44px;background:var(--qred);display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .cert-icon-sq svg{width:20px;height:20px;fill:#fff}
  .cert-body h4{font-size:0.95rem;font-weight:700;margin-bottom:3px;color:#fff}
  .cert-body p{font-size:0.82rem;color:#aaa}
  .contact-sec{background:var(--qblack);color:#fff}
  .contact-sec .sec-eyebrow span{color:#aaa}
  .contact-sec .sec-eyebrow-line{background:var(--qred)}
  .contact-sec h2{color:#fff}
  .contact-sec .sec-sub{color:#888;max-width:560px}
  .contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#2a2a2a;margin-bottom:40px}
  .ccard{background:#111;padding:32px 24px;text-align:left;transition:background 0.15s}
  .ccard:hover{background:#161616}
  .ccard-icon{width:40px;height:40px;background:var(--qred);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
  .ccard-icon svg{width:18px;height:18px;fill:#fff}
  .ccard h3{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#777;margin-bottom:8px}
  .ccard p{font-size:0.875rem;color:#ccc;line-height:1.5}
  .contact-cta{display:flex;gap:12px;flex-wrap:wrap}
  .contact-sec .btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.35);padding:12px 28px;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;transition:border-color 0.15s}
  .contact-sec .btn-ghost:hover{border-color:#fff}
  footer{background:#000;border-top:1px solid #1a1a1a;padding:32px 40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
  .footer-logo{font-size:0.85rem;font-weight:700;color:#555;letter-spacing:0.08em;text-transform:uppercase}
  .footer-logo span{color:var(--qred)}
  footer p{font-size:12px;color:#444}
  @media(max-width:900px){
    .hero{flex-direction:column}.hero-right{width:100%;padding:32px 40px}
    .exp-layout,.skills-layout{grid-template-columns:1fr}
    .skills-sidebar{border-right:none;border-bottom:1px solid var(--border);padding-right:0;padding-bottom:20px}
    .about-grid,.proj-grid,.edu-grid,.contact-grid{grid-template-columns:1fr}
    .exp-list{grid-template-columns:1fr}.skills-main{grid-template-columns:1fr}
    .hero-left{padding:60px 32px}
    .sec{padding:60px 24px}
    .nav-links{display:none}
  }
`;

/* ─────────────────────── DATA ─────────────────────── */
const projects = [
  { t: "CENKREDIT NBFC Financial Management", d: "Enterprise-grade financial management system for NBFC operations with comprehensive reporting and compliance features.", tech: [".NET", "SQL Server", "Angular", "Azure"], cat: "Enterprise" },
  { t: "EMC Course Management Platform", d: "Comprehensive course management system with real-time updates and intuitive UI for educational institutions.", tech: ["React.js", "Node.js", "MongoDB", "Express.js"], cat: "Education", link: "http://46.28.44.139:5175/" },
  { t: "Jittec Course Web Platform", d: "Dynamic course management solution with integrated e-commerce and payment gateway capabilities.", tech: ["Wix Studio", "JavaScript", "Payments"], cat: "Education", link: "https://aadithyana66.wixsite.com/jittec" },
  { t: "Badminton Court Booking System", d: "Professional court booking interface with real-time availability and seamless UX.", tech: ["Figma", "UI/UX Design"], cat: "Design", link: "https://www.figma.com/design/UnrK8FXuaM4GLoZf57bj5d/Batminton-Court?node-id=0-1" },
  { t: "Audit Management System", d: "Robust audit management platform with advanced reporting, analytics, and compliance tracking.", tech: ["Figma", "System Design"], cat: "Enterprise", link: "https://www.figma.com/design/h10cYNI0LtPDy7COOsgw7Q/Audit-App?node-id=298-2398" },
  { t: "ECart Spices E-commerce", d: "Full-featured e-commerce platform for spice trading with comprehensive product management.", tech: ["Wix Studio", "HTML", "CSS", "JS"], cat: "E-commerce", link: "https://rajishiji45.wixstudio.com/spices/category/all-products" },
  { t: "Krishi Nxt Agricultural Platform", d: "Comprehensive agricultural knowledge platform serving thousands of farmers across Kerala.", tech: ["Web Dev", "CMS", "API Integration"], cat: "Agriculture", link: "https://aadithyana66.wixsite.com/krishinext" },
  { t: "VGuard Solar Solutions", d: "Next-gen solar energy platform with advanced API integrations and dynamic pricing calculations.", tech: ["Wix Studio", "Figma", "JS", "API"], cat: "Energy", link: "https://www.vguardsolartvm.com/" },
  { t: "System Society of India Portal", d: "Government portal for Kerala's premier energy festival with advanced content management.", tech: ["Wix Studio", "Figma", "CMS"], cat: "Government", link: "https://aadithyana66.wixsite.com/ssin" },
  { t: "True Will Health E-commerce", d: "Full-stack e-commerce solution with advanced inventory management, analytics, and CRM features.", tech: ["Full Stack", "Database", "Admin Panel"], cat: "Healthcare", link: "https://aadithyana66.wixsite.com/truewill" },
];

const CATEGORIES = ["All", "Enterprise", "Education", "Design", "E-commerce", "Agriculture", "Energy", "Government", "Healthcare"];

const allSkills = [
  { name: "React.js", cat: "Frontend", chip: "Frontend", cls: "fe" },
  { name: "JavaScript", cat: "Programming", chip: "Language", cls: "prog" },
  { name: "HTML5 / CSS3", cat: "Frontend", chip: "Frontend", cls: "fe" },
  { name: "Tailwind CSS", cat: "Styling", chip: "Styling", cls: "st" },
  { name: "C# / .NET", cat: "Backend", chip: "Backend", cls: "be" },
  { name: "Node.js / Express", cat: "Backend", chip: "Backend", cls: "be" },
  { name: "MongoDB", cat: "Database", chip: "Database", cls: "db" },
  { name: "SQL Server", cat: "Database", chip: "Database", cls: "db" },
  { name: "UI/UX Design", cat: "Design", chip: "Design", cls: "ds" },
  { name: "Figma", cat: "Design", chip: "Design", cls: "ds" },
];

const skillCatMap = { "All Technologies": null, "Frontend": "Frontend", "Backend": "Backend", "Database": "Database", "Design": "Design" };

/* ─────────────────────── SVGs ─────────────────────── */
const LayersIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CapIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#fff"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fff"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#fff"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#fff"/>
  </svg>
);

/* ─────────────────────── COMPONENT ─────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [projCat, setProjCat] = useState("All");
  const [skillCat, setSkillCat] = useState("All Technologies");

  const sectionIds = ["home", "about", "experience", "projects", "skills", "education", "contact"];

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const goSec = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects = projCat === "All" ? projects : projects.filter((p) => p.cat === projCat);

  const catFilter = skillCatMap[skillCat];
  const filteredSkills = catFilter ? allSkills.filter((s) => s.cat === catFilter) : allSkills;

  return (
    <>
      <style>{css}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <a onClick={() => goSec("contact")}>Contact</a>
          <a onClick={() => goSec("projects")}>Portfolio</a>
          <a>Kerala, India</a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">
            <div className="logo-mark"><LayersIcon /></div>
            <span className="logo-text">Aadithyan<span> DS</span></span>
          </div>
          <div className="nav-links">
            {sectionIds.map((id) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => goSec(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => (window.location.href = "mailto:aadithyana66@gmail.com")}>
            Hire Me
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero" id="home">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>Front End Engineer · JitTec IT Solutions</span>
          </div>
          <h1>
            Engineering<br />
            digital experiences<br />
            that <em>perform.</em>
          </h1>
          <p className="hero-desc">
            Building high-quality web applications and intuitive interfaces. 2+ years crafting enterprise software, e-commerce platforms, and user-centric design systems.
          </p>
          <div className="hero-btns">
            <button className="btn-red" onClick={() => goSec("projects")}>View Projects</button>
            <button className="btn-ghost" onClick={() => goSec("contact")}>Get in Touch</button>
           <a href="https://aadithyan-d-s.tiiny.site/" target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost">Download CV</button>
            </a>
          </div>

        </div>
        <div className="hero-right">
          <div className="hero-bar" />
          <div className="hero-right-label">Career Overview</div>
          <div className="hero-stats">
            {[
              { num: "10+", label: "Projects\nDelivered" },
              { num: "2.1+", label: "Years\nExperience" },
              { num: "5+", label: "Client\nPartnerships" },
              { num: "40%", label: "Perf.\nOptimization" },
            ].map((s) => (
              <div className="hstat" key={s.num}>
                <span className="hstat-num">{s.num}</span>
                <span className="hstat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="sec about-sec" id="about">
        <div className="sec-inner">
          <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>About me</span></div>
          <h2 style={{ marginBottom: 40 }}>Three principles that drive my work.</h2>
          <div className="about-grid">
            {[
              { n: "01", title: "Innovation-Driven", body: "I transform complex problems into elegant, user-friendly solutions using cutting-edge technologies and modern development practices that scale." },
              { n: "02", title: "Detail-Oriented", body: "Every pixel matters. Polished, professional applications that go beyond requirements — built with precision craftsmanship and exacting standards." },
              { n: "03", title: "User-Focused", body: "User experience sits at the heart of everything I build. Interfaces that feel intuitive and natural — because great software should be invisible." },
            ].map((c) => (
              <div className="about-card" key={c.n}>
                <div className="about-num">{c.n}</div>
                <div className="about-title">{c.title}</div>
                <div className="about-body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sec exp-sec" id="experience">
        <div className="sec-inner">
          <div className="exp-layout">
            <div>
              <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>Work History</span></div>
              <h2>Professional Experience</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text3)", lineHeight: 1.65, marginTop: 12 }}>
                Currently working at JitTec IT Solutions delivering high-impact front-end engineering across enterprise and client-facing products.
              </p>
            </div>
            <div>
              <div className="exp-main-card">
                <div className="exp-toprow">
                  <div>
                    <div className="exp-role">Front End Engineer</div>
                    <div className="exp-company">JitTec IT Solutions</div>
                    <div className="exp-loc">Thiruvananthapuram, Kerala, India</div>
                  </div>
                  <div className="exp-badge">May 2023 — Present</div>
                </div>
                <div className="exp-list">
                  {[
                    "Developed 10+ responsive web applications using modern tech stack",
                    "Optimized application performance by 40% through efficient coding practices",
                    "Designed and implemented intuitive UI/UX for 5+ client projects",
                    "Led cross-functional teams delivering high-impact solutions on schedule",
                    "Integrated complex APIs and third-party services seamlessly",
                  ].map((h) => (
                    <div className="exp-item" key={h}>
                      <div className="exp-item-dot" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="sec proj-sec" id="projects">
        <div className="sec-inner">
          <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>Portfolio</span></div>
          <h2>Featured Projects</h2>
          <p className="sec-sub">A curated selection of work spanning enterprise, education, design, e-commerce, and government sectors.</p>
          <div className="proj-filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${projCat === cat ? " on" : ""}`}
                data-cat={cat}
                onClick={() => setProjCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="proj-grid">
            {filteredProjects.map((p) => (
              <div className="proj-card" key={p.t}>
                <div className="proj-img" />
                <div className="proj-body">
                  <span className="proj-cat-tag">{p.cat}</span>
                  <div className="proj-title">{p.t}</div>
                  <div className="proj-desc">{p.d}</div>
                  <div className="proj-tags">
                    {p.tech.map((t) => <span className="ptag" key={t}>{t}</span>)}
                  </div>
                  {p.link
                    ? <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">
                        View Project <span className="proj-link-arrow">→</span>
                      </a>
                    : <span className="proj-nda">Enterprise · NDA</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="sec skills-sec" id="skills">
        <div className="sec-inner">
          <div className="skills-layout">
            <div className="skills-sidebar">
              <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>Expertise</span></div>
              <h2>Skills &amp;<br />Technologies</h2>
              <p style={{ fontSize: "0.875rem", color: "var(--text3)", lineHeight: 1.65, margin: "16px 0 24px" }}>
                A full-stack skill set with a front-end specialization — from UI frameworks to enterprise back-end systems and product design.
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Object.keys(skillCatMap).map((label) => (
                  <div
                    key={label}
                    className={`skill-cat-label${skillCat === label ? " on" : ""}`}
                    onClick={() => setSkillCat(label)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-main">
              {filteredSkills.map((s) => (
                <div className="skill-tile" key={s.name}>
                  <div>
                    <div className="sk-name">{s.name}</div>
                    <div className="sk-cat">{s.cat}</div>
                  </div>
                  <span className={`sk-chip ${s.cls}`}>{s.chip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="sec edu-sec" id="education">
        <div className="sec-inner">
          <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>Academic Background</span></div>
          <h2>Education</h2>
          <div className="edu-grid">
            {[
              { deg: "Bachelor of Computer Applications", short: "BCA", school: "Christ Nagar College, Thiruvananthapuram", meta: "CGPA: 6.5", year: "2020 – 2023" },
              { deg: "Master of Computer Applications", short: "MCA", school: "Indira Gandhi Open University", meta: "Distance Education · In Progress", year: "2024 – Present" },
            ].map((e) => (
              <div className="edu-card" key={e.short}>
                <div className="edu-card-top">
                  <div className="edu-icon-sq"><CapIcon /></div>
                  <div>
                    <div className="edu-deg-name">{e.deg}</div>
                    <div className="edu-deg-short">{e.short}</div>
                  </div>
                </div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta" style={{ marginBottom: 16 }}>{e.meta}</div>
                <div className="edu-year-badge">{e.year}</div>
              </div>
            ))}
          </div>
          <div className="cert-strip">
            <div className="cert-icon-sq"><StarIcon /></div>
            <div className="cert-body">
              <h4>Web Application Development with MEAN Stack</h4>
              <p>ICT Academy of Kerala &nbsp;·&nbsp; June 24 – July 22, 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec contact-sec" id="contact">
        <div className="sec-inner">
          <div className="sec-eyebrow"><div className="sec-eyebrow-line" /><span>Let's Connect</span></div>
          <h2>Let's build<br />something together.</h2>
          <p className="sec-sub">Ready to bring your ideas to life? Open to new projects, collaborations, and opportunities.</p>
          <div className="contact-grid">
            <div className="ccard">
              <div className="ccard-icon"><MailIcon /></div>
              <h3>Email</h3>
              <p>aadithyana66@gmail.com</p>
            </div>
            <div className="ccard">
              <div className="ccard-icon"><PhoneIcon /></div>
              <h3>Phone</h3>
              <p>+91 6238620105<br />+91 9188393114</p>
            </div>
            <div className="ccard">
              <div className="ccard-icon"><PinIcon /></div>
              <h3>Location</h3>
              <p>Thiruvananthapuram<br />Kerala, India</p>
            </div>
          </div>
          <div className="contact-cta">
            <button className="btn-red" onClick={() => (window.location.href = "mailto:aadithyana66@gmail.com")}>
              Send a Message
            </button>
            <a href="www.linkedin.com/in/aadithyan-d-s" target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost">View LinkedIn</button>
            </a>
            <a href="https://aadithyan-d-s.tiiny.site/" target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost">Download CV</button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Aadithyan<span> DS</span></div>
        <p>© 2025 Aadithyan DS. All rights reserved.</p>
      </footer>
    </>
  );
}