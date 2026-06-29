import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const nav = [
  ['关于我', 'about'],
  ['研究方向', 'focus'],
  ['项目实践', 'projects'],
  ['经历', 'timeline'],
  ['联系', 'contact'],
];

const profile = {
  name: '董沛昕',
  enName: 'Dong Peixin',
  role: '杭州易北智建科技有限公司 副总经理',
  title: '工程师 / 讲师 / 国家一级注册建筑师',
  email: 'RLDPX@163.com',
  education: 'Texas A&M University · Master of Architecture',
  summary:
    '聚焦 AIGC 教育应用、AIGC 辅助设计与建筑设计实践融合，持续推动设计教育、数字化工具与产业场景之间的连接。',
};

const focusCards = [
  {
    id: '01',
    title: 'AIGC 教育应用',
    desc: '将生成式 AI 融入课程、工作坊与研究生培养场景，构建设计教育的新型学习路径。',
  },
  {
    id: '02',
    title: 'AIGC 辅助设计',
    desc: '围绕建筑、空间、文创与视觉表达，探索从概念生成到方案迭代的全流程设计方法。',
  },
  {
    id: '03',
    title: '建筑设计实践',
    desc: '以建筑学背景和设计院实践经验为基础，关注技术、审美与落地实施之间的平衡。',
  },
  {
    id: '04',
    title: '跨界创新研究',
    desc: '参与设计学科虚拟教研室、艺术基金人才培养等项目，推动高校、机构与产业协同。',
  },
];

const projects = [
  {
    type: '国家艺术基金',
    title: '乡村文创产品经营管理人才培训',
    time: '2025.07 - 2025.12',
    desc: '参与国家艺术基金 2025 年度艺术人才培训资助项目，关注文创经营、设计转化与人才培养。',
  },
  {
    type: '江苏艺术基金',
    title: '生活美学与 AIGC 融合下的紫砂雅器人才培养',
    time: '2025.10 - 2025.12',
    desc: '参与艺术人才培养项目，探索传统工艺、生活美学与 AIGC 方法之间的融合路径。',
  },
  {
    type: '省级教改项目',
    title: '基于“融合跨界创新实践”的设计学科虚拟教研室改革与探究',
    time: '2024.12 - 2025.05',
    desc: '参与浙江省“十四五”第二批研究生省级教学改革常规项目，推进设计学科教学组织创新。',
  },
  {
    type: '教学改革',
    title: '校级教育教学改革项目 8 项',
    time: '持续参与',
    desc: '围绕设计教育、数字化教学和课程创新，参与多项校级教育教学改革实践。',
  },
];

const timeline = [
  ['2025.11 - 至今', '杭州易北智建科技有限公司', '副总经理'],
  ['2021.04 - 2025.11', '杭州国美建筑设计研究院有限公司', '建筑设计师'],
  ['2020.10 - 2021.04', '浙江现代建筑设计研究院有限公司', '建筑设计师'],
  ['2015.09 - 2017.05', 'Texas A&M University', '海外学习经历 / 建筑学硕士'],
];

const exchanges = [
  '与多所院校共同参与阿里巴巴 D20 全球设计院长论坛，推动 AIGC 与设计教育前沿议题交流。',
  '参与并指导浙江大学建筑学院 AIGC 设计培训。',
  '参与并指导宁波大学潘天寿建筑与艺术学院 AIGC 设计培训。',
  '参与并指导中国美术学院“为未书”工作坊。',
];

function useScroll() {
  const [state, setState] = useState({ y: 0, vh: 1 });
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setState({ y: window.scrollY, vh: window.innerHeight }));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(raf);
    };
  }, []);
  return state;
}

function Header({ dark }) {
  return (
    <header className={`site-header ${dark ? 'dark' : ''}`}>
      <a className="brand" href="#top" aria-label="Dong Peixin home">
        <span>DPX</span>
      </a>
      <nav className="nav" aria-label="页面导航">
        {nav.map(([label, id]) => (
          <a href={`#${id}`} key={id}>{label}</a>
        ))}
      </nav>
      <a className="header-mail" href={`mailto:${profile.email}`}>联系我</a>
    </header>
  );
}

function Hero({ y, vh }) {
  const p = Math.min(1, y / (vh * 0.85));
  return (
    <section className="hero" id="top" style={{ '--p': p }}>
      <div className="hero-stage" aria-hidden="true">
        <div className="orb orb-sun" />
        <div className="orb orb-blue" />
        <div className="orb orb-ink" />
        <div className="glass-band" />
        <div className="hero-word">AIGC</div>
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="kicker">AIGC · Architecture · Design Education</p>
          <h1><span>{profile.name}</span><em>{profile.enName}</em></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary" href="#projects">查看项目实践</a>
            <a className="secondary" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="董沛昕照片">
          <div className="portrait-card">
            <img src="/profile/dong-peixin.webp" alt="董沛昕个人照片" />
          </div>
          <div className="portrait-caption">
            <strong>{profile.title}</strong>
            <span>{profile.education}</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="继续向下浏览">↓</a>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats reveal" id="about">
      <div><b>9年</b><span>设计与产业实践</span></div>
      <div><b>AIGC</b><span>教育应用与辅助设计</span></div>
      <div><b>8项</b><span>校级教育教学改革项目</span></div>
      <div><b>M.Arch</b><span>Texas A&M University</span></div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section reveal">
      <div className="section-label">About</div>
      <div className="about-copy">
        <h2>在设计教育、建筑实践与生成式 AI 之间，建立可落地的创新方法。</h2>
        <p>
          董沛昕，男，工程师，最后学历学位为硕士研究生，毕业于美国 Texas A&M University。
          现任杭州易北智建科技有限公司副总经理，主要研究领域为 AIGC 教育应用与 AIGC 辅助设计。
        </p>
        <p>
          个人工作重点包括：面向高校与设计行业的 AIGC 培训、辅助设计流程搭建、跨学科教学改革、文创与建筑设计实践转化。
        </p>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="focus-section" id="focus">
      <div className="section-head reveal">
        <p>Research Focus</p>
        <h2>研究方向</h2>
      </div>
      <div className="focus-grid">
        {focusCards.map((card) => (
          <article className="focus-card reveal" key={card.id}>
            <span>{card.id}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="sticky-title">
        <p>Selected Work</p>
        <h2>项目实践</h2>
      </div>
      <div className="project-list">
        {projects.map((item, index) => (
          <article className="project-card reveal" key={item.title}>
            <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="project-body">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <time>{item.time}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="section-head reveal">
        <p>Experience</p>
        <h2>经历</h2>
      </div>
      <div className="timeline">
        {timeline.map(([time, org, role]) => (
          <div className="timeline-row reveal" key={`${time}-${org}`}>
            <time>{time}</time>
            <strong>{org}</strong>
            <span>{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Exchange() {
  return (
    <section className="exchange-section reveal">
      <div className="quote-mark">“</div>
      <h2>学术交流与社会服务</h2>
      <div className="exchange-grid">
        {exchanges.map((text) => <p key={text}>{text}</p>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-bg" aria-hidden="true">DPX</div>
      <div className="contact-card reveal">
        <p>Available for</p>
        <h2>AIGC 设计教育、辅助设计流程、课程与工作坊合作</h2>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div className="footer-line">
        <span>Dong Peixin Personal Website · V2.0</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function App() {
  const { y, vh } = useScroll();
  const dark = y > vh * 3.4 && y < vh * 5.4;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('in', entry.isIntersecting));
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header dark={dark} />
      <main>
        <Hero y={y} vh={vh} />
        <Stats />
        <About />
        <Focus />
        <Projects />
        <Timeline />
        <Exchange />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
