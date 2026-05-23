import Link from 'next/link';
import { projects, designWorks } from '@/data/projects';

export default function ProjectsSection(){
 const groups = projects.reduce((a,p)=>{(a[p.category] ||= []).push(p); return a;},{});
 return <section className="projects-sec" id="projects"><div className="container"><div className="eyebrow"><span className="eyebrow-label">Projects</span><span className="eyebrow-line"></span></div><h2 className="sec-heading" style={{marginBottom:'2.5rem'}}>What I&apos;ve <span className="hi">Built</span></h2>
 {Object.entries(groups).map(([cat,list])=><div className="pc" key={cat}><div className="pc-head"><span className="pc-icon">{cat==='Web Projects'?'🌐':cat==='Java Desktop Apps'?'☕':'📡'}</span><span className="pc-title">{cat}</span><span className="pc-count">{String(list.length).padStart(2,'0')}</span><span className="pc-line"></span></div><div className="pg">{list.map(p=><div className="pj-card" key={p.slug}><div className="pj-thumb">{p.image?<img src={p.image} alt={p.title}/>:<div className="pj-thumb-ph">{p.title}</div>}</div><div className="pj-body"><div className="pj-name">{p.title}</div><div className="pj-stack">{p.shortStack}</div><div className="pj-desc">{p.description}</div><div className="pj-links">{p.live && <a href={p.live} className="pj-link live" target="_blank">Live ↗</a>}<a href={p.github} className="pj-link gh" target="_blank">GitHub</a><Link href={`/projects/${p.slug}`} className="pj-link details">Details →</Link></div></div></div>)}</div></div>)}
 <div className="pc"><div className="pc-head"><span className="pc-icon">🎨</span><span className="pc-title">Figma Designs & Posters</span><span className="pc-line"></span></div><div className="design-grid">{designWorks.map(d=><div className="design-item" key={d.title}><div style={{fontSize:'1.8rem',opacity:.35}}>◈</div><div className="design-label">{d.title}</div><div className="design-sub">{d.type}</div></div>)}</div></div>
 </div></section>
}
