import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';

export function generateStaticParams(){
  return projects.map((p)=>({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }){
  const project = projects.find((p)=>p.slug===params.slug);
  return { title: project ? `${project.title} — Fahid Hasan` : 'Project — Fahid Hasan' };
}

export default function ProjectDetail({ params }: { params: { slug: string } }){
  const project = projects.find((p)=>p.slug===params.slug);
  if(!project) return <><Navbar/><main className="project-detail"><div className="container"><Link href="/#projects" className="back-link">← Back to projects</Link><h1 className="detail-title">Project not found</h1></div></main><Footer/></>;
  return <><Navbar/><main className="project-detail"><div className="container"><Link href="/#projects" className="back-link">← Back to projects</Link><div className="detail-grid"><div className="detail-card"><div className="modal-label">PROJECT DETAILS</div><h1 className="detail-title">{project.title}</h1><div className="modal-stack">{project.stack}</div><div className="detail-section"><h3>Main Technology Stack Used</h3><p>{project.stack}</p></div><div className="detail-section"><h3>Brief Description</h3><p>{project.description}</p></div><div className="detail-section"><h3>Challenges Faced While Developing</h3><p>{project.challenges}</p></div><div className="detail-section"><h3>Potential Improvements & Future Plans</h3><p>{project.future}</p></div><div className="modal-links">{project.live && <a href={project.live} className="btn btn-primary" target="_blank">Live Project ↗</a>}<a href={project.github} className="btn btn-outline" target="_blank">GitHub Repository →</a></div></div><aside>{project.image?<div className="detail-thumb"><img src={project.image} alt={project.title}/></div>:<div className="detail-thumb"><span className="pj-thumb-ph">{project.title}</span></div>}<div className="about-panel"><div className="about-quote">AI Summary</div><p className="about-p">This project shows Fahid’s practical ability to plan, design and build useful software with a clean interface and real-world development logic.</p><div className="about-chips">{project.stack.split(' · ').map((s)=><span className="tag" key={s}>{s}</span>)}</div></div></aside></div></div></main><Footer/></>
}
