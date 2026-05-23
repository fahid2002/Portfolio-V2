import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export async function POST(request) {
  const { question = '', mode = 'assistant' } = await request.json();
  const q = String(question).toLowerCase();
  let answer = 'I can answer about Fahid’s skills, projects, education, availability and contact information.';

  if (mode === 'contact-helper') {
    answer = `Hello Fahid,\n\nI hope you are doing well. I am interested in discussing a project or collaboration with you. ${question}\n\nPlease let me know when you are available.\n\nThank you.`;
  } else if (q.includes('available')) {
    answer = 'Yes, Fahid is available for work, freelance projects and collaboration.';
  } else if (q.includes('skill')) {
    answer = `Fahid’s skills include ${profile.skills.flatMap((s) => s.items).join(', ')}.`;
  } else if (q.includes('project') || q.includes('built')) {
    answer = `Fahid has built projects such as ${projects.map((p) => p.title).join(', ')}.`;
  } else if (q.includes('contact') || q.includes('email')) {
    answer = `You can contact Fahid at ${profile.email} or WhatsApp ${profile.displayPhone}.`;
  } else if (q.includes('education')) {
    answer = 'Fahid is studying B.Sc. in Computer Science & Engineering at Daffodil International University, Dhaka, Bangladesh.';
  }

  return NextResponse.json({ answer });
}
