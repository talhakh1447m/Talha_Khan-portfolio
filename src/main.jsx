import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserRound, FolderKanban, Code2, BriefcaseBusiness, GraduationCap,
  Award, Image as ImageIcon, Mail, FileText, Home, X, Minus, Square,
  Github, Linkedin, Instagram, ExternalLink, Search, Command, CheckCircle2,
  MapPin, Phone, Download, ChevronRight, Palette, Monitor, LayoutPanelTop,
  PenTool, GitBranch, Users, Lightbulb, Eye, BookOpen
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "hotel",
    title: "Hotel Management System",
    description: "A full-stack hotel management system with room management, bookings, payments and an admin workflow.",
    image: "/projects/hotel.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    category: "Full Stack",
    github: "https://github.com/talhakh1447m",
    live: "#"
  },
  {
    id: "portfolio",
    title: "Interactive 3D Portfolio",
    description: "A cinematic digital workspace with draggable windows, responsive UI, project filters and immersive presentation.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Framer Motion", "UI/UX"],
    category: "Web Design",
    github: "https://github.com/talhakh1447m",
    live: "#"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description: "A responsive shopping interface with product discovery, filtering, cart flow and secure checkout concepts.",
    image: "/projects/ecommerce.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "UI/UX",
    github: "https://github.com/talhakh1447m",
    live: "#"
  },
  {
    id: "insurance",
    title: "AI Insurance Analysis Chatbot",
    description: "An AI-powered assistant concept that analyzes insurance information, summarizes policies and helps users understand coverage.",
    image: "/projects/portfolio.jpg",
    technologies: ["Python", "Flask", "AI", "Chatbot"],
    category: "Full Stack",
    github: "https://github.com/talhakh1447m",
    live: "#"
  },
  {
    id: "medibooth",
    title: "MediBooth System",
    description: "A web-based campus health service platform designed to streamline student health support and record management.",
    image: "/projects/ecommerce.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    category: "Web Design",
    github: "https://github.com/talhakh1447m",
    live: "#"
  },
  {
    id: "statistical",
    title: "Statistical Engine",
    description: "A DBMS mini-project for dataset analysis with Spearman correlation, parabolic regression and interactive visualizations.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Python", "DBMS", "Charts"],
    category: "UI/UX",
    github: "https://github.com/talhakh1447m",
    live: "#"
  }
];

const assignments = [
  { id:"ai", title:"PEAS Representation", subject:"Artificial Intelligence", type:"AI Practical", description:"Intelligent-agent analysis using the PEAS framework.", image:"/assignments/assign1.jpg", tags:["AI","Python"] },
  { id:"dbms", title:"DBMS ER Diagram", subject:"Database Management Systems", type:"DBMS Assignment", description:"Database entities, relationships and schema design.", image:"/assignments/assign2.jpg", tags:["DBMS","SQL"] },
  { id:"os", title:"OS Process States", subject:"Operating System", type:"OS Assignment", description:"Process lifecycle and state-transition analysis.", image:"/assignments/assign3.jpg", tags:["OS","CN"] },
  { id:"cloud", title:"Cloud VM Setup", subject:"Cloud Computing", type:"Cloud Practical", description:"Linux VM setup, permissions and AWS fundamentals.", image:"/assignments/assign4.jpg", tags:["AWS","Linux"] }
  { id:"ewem-pledge", title:"EWEM-Pledge", subject:"Environmental & Waste/Energy Management", type:"EWEM Assignment", description:"My commitment to a sustainable future, focused on responsible technology use, waste reduction, e-waste responsibility and sustainable practices.", image:"/assignments/ewem-pledge.jpeg", tags:["EWEM","Sustainability"] }
  ,{ id:"ewem-crossword", title:"EWEM-Crossword", subject:"Environmental & Waste/Energy Management", type:"EWEM Activity", description:"An E-Waste Mastermind crossword activity covering e-waste, recycling, environmental impacts and responsible electronic waste management.", image:"/assignments/ewem-crossword.jpeg", tags:["EWEM","E-Waste","Sustainability"] }
];

const work = [
  { id:"design1", title:"Web UI Exploration", category:"UI/UX", description:"Dark dashboard and product interface study.", image:"/work/work1.jpg" },
  { id:"design2", title:"Purple Visual Study", category:"Graphic Design", description:"Neon-inspired visual composition.", image:"/work/work2.jpg" },
  { id:"design3", title:"Minimal Poster Design", category:"Poster", description:"Monochrome typography and editorial layout.", image:"/work/work3.jpg" },
  { id:"design4", title:"Mumbai Night Visual", category:"Other", description:"Cinematic cityscape composition.", image:"/work/work4.jpg" }
];

const nav = [
  ["home","Home",Home],["about","About",UserRound],["projects","Projects",FolderKanban],
  ["assignments","Assignments",BookOpen],["skills","Skills",Code2],["experience","Experience",BriefcaseBusiness],
  ["education","Education",GraduationCap],["certificates","Certificates",Award],["work","My Work",ImageIcon],
  ["contact","Contact",Mail],["resume","Resume",FileText]
];

const skills = [
  ["UI/UX Design", Palette],["Responsive Design", Monitor],["Wireframing", LayoutPanelTop],
  ["Prototyping", PenTool],["Git", GitBranch],["GitHub", Github],
  ["Problem Solving", Lightbulb],["Collaboration", Users],["Attention to Detail", Eye]
];

function App() {
  const [open, setOpen] = useState(["about","projects","assignments","work"]);
  const [front, setFront] = useState("projects");
  const [query, setQuery] = useState("");
  const [command, setCommand] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); setCommand(true);
      }
      if (e.key === "Escape") setCommand(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const launch = (id) => {
    setOpen(prev => prev.includes(id) ? prev : [...prev, id]);
    setFront(id);
    setCommand(false);
  };
  const close = (id) => setOpen(prev => prev.filter(x => x !== id));
  const visibleProjects = projects.filter(p => {
    const matchesFilter = projectFilter === "All" || p.category === projectFilter;
    const q = query.toLowerCase();
    return matchesFilter && (!q || `${p.title} ${p.description} ${p.technologies.join(" ")}`.toLowerCase().includes(q));
  });

  return (
    <main className="workspace">
      <div className="ambient" />
      <div className="brand">TK</div>

      <aside className="sidebar">
        {nav.slice(1).map(([id,label,Icon]) => (
          <button key={id} className="side-item" onClick={() => launch(id)} title={label}>
            <span><Icon size={22}/></span><small>{label}</small>
          </button>
        ))}
      </aside>

      <section className="hero">
        <p className="eyebrow">Welcome to my world</p>
        <h1>TALHA<br/>KHAN</h1>
        <p className="role">Designer <b>•</b> Developer <b>•</b> Creative Technologist</p>
        <p className="intro">Creative and detail-oriented Information Technology student passionate about web development, UI/UX, visual design and building engaging digital experiences.</p>
        <button className="workspace-btn" onClick={() => launch("projects")}>Open Workspace <ChevronRight size={20}/></button>
      </section>

      <div className="window-layer">
        <AnimatePresence>
          {open.includes("about") && <Window id="about" title="About Me" onClose={close} front={front} setFront={setFront} initial={{x:515,y:80}}>
            <About />
          </Window>}
          {open.includes("projects") && <Window id="projects" title="Projects" onClose={close} front={front} setFront={setFront} initial={{x:992,y:45}}>
            <Projects query={query} setQuery={setQuery} filter={projectFilter} setFilter={setProjectFilter} items={visibleProjects}/>
          </Window>}
          {open.includes("skills") && <Window id="skills" title="Skills" onClose={close} front={front} setFront={setFront} initial={{x:520,y:430}}>
            <Skills />
          </Window>}
          {open.includes("experience") && <Window id="experience" title="Experience" onClose={close} front={front} setFront={setFront} initial={{x:960,y:600}}>
            <Experience />
          </Window>}
          {open.includes("assignments") && <Window id="assignments" title="Assignments" onClose={close} front={front} setFront={setFront} initial={{x:455,y:505}}>
            <Assignments onOpen={setSelectedAssignment} />
          </Window>}
          {open.includes("work") && <Window id="work" title="My Work" onClose={close} front={front} setFront={setFront} initial={{x:950,y:650}}>
            <Work />
          </Window>}
          {open.includes("education") && <Window id="education" title="Education" onClose={close} front={front} setFront={setFront} initial={{x:620,y:190}}>
            <Education />
          </Window>}
          {open.includes("certificates") && <Window id="certificates" title="Certificates" onClose={close} front={front} setFront={setFront} initial={{x:620,y:160}}>
            <Certificates />
          </Window>}
          {open.includes("contact") && <Window id="contact" title="Contact" onClose={close} front={front} setFront={setFront} initial={{x:620,y:220}}>
            <Contact />
          </Window>}
          {open.includes("resume") && <Window id="resume" title="Resume" onClose={close} front={front} setFront={setFront} initial={{x:620,y:180}}>
            <Resume />
          </Window>}
        </AnimatePresence>
      </div>

      <div className="music-card">
        <div className="music-icon">♫</div>
        <div><strong>Focus Mode</strong><small>Lo-fi Beats</small></div>
        <div className="wave">〰〰〰</div>
        <span>◀</span><b>▶</b><span>▶</span>
      </div>

      <div className="clock-card"><span>☀</span><div><b>{new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}</b><small>{new Date().toLocaleDateString([], {month:"short",day:"numeric",year:"numeric"})}</small></div></div>

      <Dock launch={launch} />

      <div className="socials">
        <a href="https://github.com/talhakh1447m" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={22}/></a>
        <a href="https://www.linkedin.com/in/talha-khan-0141b635a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={22}/></a>
        <a href="https://www.instagram.com/talhakh1447m" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={22}/></a>
      </div>

      <button className="command-trigger" onClick={() => setCommand(true)}><Command size={15}/> Ctrl K</button>

      <AnimatePresence>
        {selectedAssignment && <AssignmentViewer assignment={selectedAssignment} onClose={() => setSelectedAssignment(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {command && <motion.div className="command-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setCommand(false)}>
          <motion.div className="command-box" initial={{y:-20,scale:.97}} animate={{y:0,scale:1}} onClick={e=>e.stopPropagation()}>
            <div className="command-search"><Search size={18}/><input autoFocus placeholder="Search workspace..." onChange={e=>setQuery(e.target.value)}/><kbd>ESC</kbd></div>
            {nav.map(([id,label,Icon]) => <button key={id} onClick={()=>launch(id)}><Icon size={18}/>{label}<span>↵</span></button>)}
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </main>
  );
}

function Window({id,title,children,onClose,front,setFront,initial}) {
  return <motion.div className={`window window-${id} ${front===id ? "front":""}`} style={{zIndex:front===id?30:10}} initial={{opacity:0,scale:.92,x:initial.x,y:initial.y}} animate={{opacity:1,scale:1,x:initial.x,y:initial.y}} exit={{opacity:0,scale:.92}} drag dragMomentum={false} dragConstraints={{left:-initial.x+20,right:350,top:-initial.y+20,bottom:250}} onPointerDown={()=>setFront(id)}>
    <div className="window-bar">
      <div className="traffic"><i/><i/><i/></div><span>{title}</span><button onClick={()=>onClose(id)}><X size={17}/></button>
    </div>
    <div className="window-content">{children}</div>
  </motion.div>
}

function About(){return <div className="about-grid">
  <img className="profile" src="/profile.jpg" alt="Talha Khan"/>
  <div className="about-info">
    <h2>Talha Khan</h2><p className="muted">B.Tech Information Technology Student</p><p className="muted">Graphic Designer & Web Designer</p>
    <div className="contact-lines"><p><Mail/> talhakh1447m@gmail.com</p><p><Phone/> +91 86573 34389</p><p><MapPin/> Khadak, Mumbai 400009</p></div>
    <h4>Personal Attributes</h4>
    {["Detail-oriented with a passion for creating user-friendly designs.","Strong collaboration and communication skills.","Quick to learn and experiment with new design tools."].map(x=><p className="check" key={x}><CheckCircle2/>{x}</p>)}
  </div>
</div>}

function Projects({query,setQuery,filter,setFilter,items}){return <div>
  <div className="filters"><button className={filter==="All"?"active":""} onClick={()=>setFilter("All")}>All</button>{["Web Design","UI/UX","Full Stack","Branding"].map(x=><button className={filter===x?"active":""} key={x} onClick={()=>setFilter(x)}>{x}</button>)}<div className="mini-search"><Search size={14}/><input placeholder="Search" value={query} onChange={e=>setQuery(e.target.value)}/></div></div>
  <div className="project-list">{items.map(p=><div className="project-card" key={p.id}><div className="project-img"><img src={p.image} alt=""/><span className="play">↗</span></div><div className="project-copy"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="links"><a href={p.github}><Github size={18}/></a><a href={p.live}><ExternalLink size={18}/></a></div></div></div>)}</div>
  <button className="view-all">View All Projects</button>
</div>}

function Assignments({onOpen}){
  const [filter,setFilter]=useState("All");
  const [search,setSearch]=useState("");
  const filtered=assignments.filter(a=>{
    const matchesFilter=filter==="All" || a.tags.includes(filter) || a.subject.toLowerCase().includes(filter.toLowerCase()) || (filter==="Other" && (a.tags.includes("EWEM") || a.tags.includes("Sustainability")));
    const q=search.toLowerCase().trim();
    return matchesFilter && (!q || `${a.title} ${a.subject} ${a.type} ${a.description} ${a.tags.join(" ")}`.toLowerCase().includes(q));
  });
  return <div>
    <div className="assignment-top">
      <div className="filters assignment-filters"><button className={filter==="All"?"active":""} onClick={()=>setFilter("All")}>All</button>{["AI","DBMS","OS","CN","Python","Cloud","Other"].map(x=><button className={filter===x?"active":""} key={x} onClick={()=>setFilter(x)}>{x}</button>)}</div>
      <div className="mini-search assignment-search"><Search size={14}/><input placeholder="Search assignments..." value={search} onChange={e=>setSearch(e.target.value)} /></div>
    </div>
    <div className="assignment-grid">{filtered.map(a=><button className="assignment-card" key={a.id} onClick={()=>onOpen(a)} aria-label={`Open ${a.title}`}>
      <div className="assignment-thumb"><img src={a.image} alt={a.title}/><span className="assignment-open"><ExternalLink size={14}/></span></div>
      <h3>{a.title}</h3><p>{a.type}</p><small>{a.tags.join(" • ")}</small><span className="assignment-view">Open Assignment <ChevronRight size={12}/></span>
    </button>)}</div>
    {filtered.length===0 && <div className="assignment-empty"><BookOpen size={26}/><p>No assignments found.</p></div>}
    <button className="view-all">Showing {filtered.length} Assignment{filtered.length===1?"":"s"}</button>
  </div>
}

function AssignmentViewer({assignment,onClose}){
  return <motion.div className="assignment-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="assignment-viewer" initial={{opacity:0,y:18,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:18,scale:.96}} onClick={e=>e.stopPropagation()}>
      <div className="assignment-viewer-bar">
        <div className="traffic"><i/><i/><i/></div><span>{assignment.title}</span>
        <button onClick={onClose} aria-label="Close assignment"><X size={18}/></button>
      </div>
      <div className="assignment-viewer-body">
        <div className="assignment-preview"><img src={assignment.image} alt={assignment.title}/></div>
        <div className="assignment-details">
          <span className="assignment-status">ASSIGNMENT</span>
          <h2>{assignment.title}</h2>
          <p className="assignment-subject">{assignment.subject} • {assignment.type}</p>
          <p>{assignment.description}</p>
          <div className="tags">{assignment.tags.map(t=><span key={t}>{t}</span>)}</div>
          <div className="assignment-actions">
            <a href={assignment.image} target="_blank" rel="noreferrer" className="assignment-action primary"><ExternalLink size={16}/> Open Full View</a>
            <a href={assignment.image} download className="assignment-action"><Download size={16}/> Download</a>
          </div>
          <p className="assignment-hint">Click outside this window or press the close button to return to Assignments.</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
}

function Work(){return <div><div className="filters"><button className="active">All</button><button>UI/UX</button><button>Graphic Design</button><button>Poster</button><button>Other</button><div className="mini-search"><Search size={14}/><input placeholder="Search my work..." /></div></div><div className="work-grid">{work.map(w=><article className="work-card" key={w.id}><div className="work-thumb"><img src={w.image} alt=""/></div><h3>{w.title}</h3><p>{w.category} • {w.description}</p></article>)}</div><button className="view-all">View All Work <ChevronRight size={15}/></button></div>}

function Skills(){return <div>{[["Web / UI UX",[["UI/UX Design",Palette],["Responsive Design",Monitor],["Wireframing",LayoutPanelTop],["Prototyping",PenTool]]],["Design Tools",[["Photoshop",Palette],["Adobe XD",Palette],["Figma",Palette],["Sketch",Palette],["Illustrator",Palette]]],["Frontend",[["HTML",Code2],["CSS",Code2],["JavaScript",Code2],["Bootstrap",Code2]]],["Others",[["Git",GitBranch],["GitHub",Github],["Problem Solving",Lightbulb],["Collaboration",Users],["Attention to Detail",Eye]]]].map(([group,items])=><section className="skill-group" key={group}><h4>{group}</h4><div className="skill-row">{items.map(([name,I])=><div className="skill-chip" key={name}><I size={23}/><span>{name}</span></div>)}</div></section>)}</div>}

function Experience(){return <div className="timeline">{[
["Software Development Intern","Innovexa Labs, Mumbai • Jan 2025 – Jun 2025","Worked on web application development and software workflows, gaining practical experience with Java, web technologies, databases and deployment tools."],
["Web Designer & Developer","Personal Projects • 2024 – Present","Designing responsive interfaces, portfolio experiences and full-stack mini-projects while exploring modern UI/UX and creative development."]
].map(([t,m,d],i)=><div className="timeline-item" key={t}><div className="timeline-dot">{i===0?<BriefcaseBusiness size={18}/>:<Monitor size={18}/>}</div><div><h3>{t}</h3><small>{m}</small><p>{d}</p></div></div>)}</div>}

function Education(){return <div className="simple-section"><GraduationCap size={38}/><h2>Information Technology</h2><h3>Vidyalankar Institute of Technology</h3><p>B.Tech in Information Technology • 2024–2027</p><div className="tags"><span>Web Design</span><span>UI/UX</span><span>Web Development</span><span>Design Thinking</span></div></div>}
function Certificates(){return <div className="simple-section"><Award size={42}/><h2>Certifications</h2><p>Keep certificate images inside <code>public/certificates/</code> and register them in <code>src/data/certifications.ts</code>.</p></div>}
function Contact(){return <div className="simple-section"><Mail size={40}/><h2>Let's build something</h2><p><a href="mailto:talhakh1447m@gmail.com" className="contact-link"><Mail/> talhakh1447m@gmail.com</a></p><p><a href="tel:+918657334389" className="contact-link"><Phone/> +91 86573 34389</a></p><p><MapPin/> Khadak, Mumbai 400009</p><div className="tags"><a href="https://github.com/talhakh1447m" target="_blank" rel="noreferrer"><span>GitHub</span></a><a href="https://www.linkedin.com/in/talha-khan-0141b635a" target="_blank" rel="noreferrer"><span>LinkedIn</span></a><a href="https://www.instagram.com/talhakh1447m" target="_blank" rel="noreferrer"><span>Instagram</span></a></div></div>}
function Resume(){
  const [pdfReady,setPdfReady]=useState(true);
  return <div className="resume-viewer">
    <div className="resume-toolbar">
      <div className="resume-title"><FileText size={18}/> <span>Talha_Khan_Resume.pdf</span></div>
      <div className="resume-actions">
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-action"><ExternalLink size={15}/> Open</a>
        <a href="/resume.pdf" download className="resume-action"><Download size={15}/> Download</a>
      </div>
    </div>
    {pdfReady ? <iframe
      className="resume-frame"
      src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
      title="Talha Khan Resume"
      onError={()=>setPdfReady(false)}
    /> : null}
    <div className="resume-fallback">
      <FileText size={42}/>
      <h2>Resume Preview</h2>
      <p>Replace <code>public/resume.pdf</code> with your latest PDF to display the complete resume here.</p>
      <a className="resume-btn" href="/resume.pdf" download><Download size={17}/> Download Resume</a>
    </div>
  </div>
}

function Dock({launch}){return <nav className="dock">{nav.map(([id,label,Icon])=><button key={id} onClick={()=>launch(id)} title={label}><Icon size={22}/><small>{label}</small></button>)}</nav>}

createRoot(document.getElementById("root")).render(<App />);
