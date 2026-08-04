import React, { useState } from 'react';
import { Menu, X, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logo from './assets/logo-transparent.png';

export default function EntropicWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const audiences = [
    {
      title: 'PhDs & Researchers',
      description: 'Translating translational science into fundable ventures — sharpening business models, pricing and pitch narrative without losing scientific rigor.'
    },
    {
      title: 'Entrepreneurs & Founders',
      description: 'Moving from MVP to product with a defensible "special advantage" — the right to win, not just the right to compete.'
    },
    {
      title: 'Investors & Executives',
      description: 'Cutting through AI hype to see where it actually creates ROI, and where it quietly destroys it.'
    },
    {
      title: 'Citizens & Communities',
      description: 'Making automation, cognition and AI literacy legible on the public stage — from TEDx to the classroom.'
    },
    {
      title: 'Vocational & Technical Education',
      description: 'Helping VET institutions win EU and national funding for digital transition — and actually deliver the AI curriculum it pays for. Anchored by an international keynote for INNOTECS and hands-on work with vocational schools.'
    }
  ];

  const programs = [
    {
      partner: 'University of Aveiro — UA Global Leader',
      title: 'From Judgement to Action',
      subtitle: 'Creativity, Critical Thinking & Adaptive Leadership',
      date: 'May 2026',
      audience: 'PhDs & Academic Leadership',
      description: 'A live session challenging Aveiro’s top researchers to escape the "sophisticated prisons" that competence quietly builds. Cognitive experiments, a Research Change Lab and the Cognitive Mashup Challenge push participants past anchoring and learned blindness into real adaptive thinking.'
    },
    {
      partner: 'University of Aveiro — Seed Tech Transfer',
      title: 'Seed Tech Transfer Mentoring',
      subtitle: 'From Lab Breakthrough to Fundable Venture',
      date: 'Ongoing — 2026 cohort',
      audience: 'PhD Researchers & Spin-off Teams',
      description: 'One-on-one mentoring for university research teams — from bioactive glass for healthcare to lunar solar power — sharpening business models, pricing, go-to-market and pitch narrative, with real TAM / SAM / SOM rigor behind deep-tech ambition.'
    },
    {
      partner: 'UNION Venture Builders — Ignition Program',
      title: 'Productisation & Special Advantage',
      subtitle: 'From MVP to Scalable Product',
      date: '2024 — 2026',
      audience: 'Entrepreneurs & Founders',
      description: 'Hands-on sessions guiding founders through the Double Diamond methodology, UX, QA and piloting — then helping them articulate the special advantage that gives their venture the right to win, not just the right to compete.'
    },
    {
      partner: 'INNOTECS — International Network of Technical Schools',
      title: 'AI: A Survival Guide for Humans',
      subtitle: 'INNOTECS Study Visit & General Assembly, Aveiro',
      date: 'May 2026',
      audience: 'European Education Leaders',
      description: 'Invited as AI Specialist for INNOTECS’ international General Assembly, translating automation economics for vocational-education leaders from across Europe into a roadmap their schools can act on now.'
    },
    {
      partner: 'TEDxPorto — Main Stage',
      title: 'Do ADN à IA',
      subtitle: 'A história de uma espécie obsoleta?',
      date: 'March 2025',
      audience: 'General Public',
      description: 'A main-stage talk reframing life itself as an information system — tracing the path from DNA to generative AI — to ask a packed Porto audience what actually makes us worth keeping around.'
    },
    {
      partner: 'TEDxPorto Salon',
      title: 'Inteligência Artificial',
      subtitle: 'A dedicated salon on AI, automation & society',
      date: 'February 2025',
      audience: 'Citizens & Civic Leaders',
      description: 'An intimate TEDx salon on artificial intelligence — automation risk, wealth concentration, and the case for treating AI literacy as a civic skill, not just a corporate one.'
    },
    {
      partner: 'Actemium — VINCI Energies',
      title: 'AI: A Survival Guide for Humans',
      subtitle: 'In-company session on AI & B2B communications',
      date: 'November 2024',
      audience: 'Corporate Teams',
      description: 'A session for Actemium’s communications teams on why "handmade becomes valuable" once automation is easy — with three concrete moves to stay ahead of the competition.'
    },
    {
      partner: 'PeerClub',
      title: 'Artificial Intelligence Training',
      subtitle: 'Closed-door session for a peer network of investors',
      date: 'February 2026',
      audience: 'Investors & Executives',
      description: 'A closed-door session for PeerClub’s peer network of investors and executives on where AI genuinely creates return — and where it quietly destroys it.'
    },
    {
      partner: 'Escola Profissional João de Barros',
      title: 'Fear Factor',
      subtitle: 'Confronting the real driver behind failed ventures',
      date: 'March 2026',
      audience: 'Students & Young Entrepreneurs',
      description: 'A talk for vocational students on the real driver behind most failed ventures — fear — paired with a practical framework to build, test and break things anyway.'
    }
  ];

  const services = [
    {
      title: 'Tech Startup Assessment',
      description: 'Evaluation of technology, market potential, team and IP for investment decisions.'
    },
    {
      title: 'Tech Solution Design',
      description: 'Custom AI/ML, energy and IoT solutions, with R&D project management and lab collaboration.'
    },
    {
      title: 'Interim Executive Leadership',
      description: 'Interim CEO, COO or CTO roles to drive organisational transformation and growth.'
    },
    {
      title: 'Grant Access Consulting',
      description: 'Guidance on grant applications and funding opportunities for growth and innovation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#top" className="flex items-center gap-3">
              <img src={logo} alt="Entropic" className="h-10 w-auto" />
              <span className="hidden sm:block text-sm font-semibold tracking-[0.2em] uppercase text-neutral-900">Entropic Ventures</span>
            </a>

            <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
              <a href="#programs" className="hover:text-neutral-500 transition">Programs</a>
              <a href="#audiences" className="hover:text-neutral-500 transition">Who We Train</a>
              <a href="#services" className="hover:text-neutral-500 transition">Services</a>
              <a href="#contact" className="border border-neutral-900 px-5 py-2 hover:bg-neutral-900 hover:text-white transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4 text-sm font-medium uppercase tracking-wide">
              <a href="#programs" className="block py-2">Programs</a>
              <a href="#audiences" className="block py-2">Who We Train</a>
              <a href="#services" className="block py-2">Services</a>
              <a href="#contact" className="block py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="pt-40 pb-24 px-4 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-6">Training for the AI Transition</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            We train people to think again — before AI does it for them.
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-10 leading-relaxed">
            Entropic Ventures designs and delivers transformational training on AI, creativity and adaptive leadership — for PhD researchers, entrepreneurs, investors, executives, vocational educators and citizens alike. From university auditoriums to the TEDx stage.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#programs" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-neutral-700 transition">
              See Our Programs <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Who We Train */}
      <section id="audiences" className="py-24 px-4 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Who We Transform</h2>
            <p className="text-neutral-500 max-w-sm">One methodology, five audiences — because the same blind spots slow down a lab, a boardroom and a classroom.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-neutral-200">
            {audiences.map((a, idx) => (
              <div key={idx} className="bg-white p-8 hover:bg-neutral-50 transition">
                <span className="block text-5xl font-bold text-neutral-200 mb-6">0{idx + 1}</span>
                <h3 className="text-lg font-bold mb-3">{a.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section id="programs" className="py-24 px-4 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-4">Selected Track Record</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">Signature Training Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 p-8 flex flex-col h-full hover:border-neutral-900 transition">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{p.partner}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400 whitespace-nowrap">{p.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-neutral-500 italic mb-4">{p.subtitle}</p>
                <p className="text-neutral-600 leading-relaxed mb-6 flex-1">{p.description}</p>
                <span className="inline-block self-start text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white px-3 py-1.5">{p.audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-4 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-6">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-snug">
            Intelligence gets you competent. Only deliberate creativity keeps you dangerous.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Every Entropic session is built on the same premise: expertise creates blind spots long before it creates mastery. We use live cognitive exercises, structured change-management labs and real-world case work — not slideware — to help people and organisations see past their own assumptions and act on what they find.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-4">Beyond Training</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Consulting & Advisory Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 hover:bg-neutral-50 transition">
                <h3 className="text-base font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Bring This to Your Organisation</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-neutral-400" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">Location</h3>
              <p className="text-neutral-400">Rua da Índia nº 4 - 3º andar<br/>3080-137 Figueira da Foz, Portugal</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-neutral-400" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">Email</h3>
              <p className="text-neutral-400"><a href="mailto:contact@entropic.pt" className="hover:text-white transition">contact@entropic.pt</a></p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-neutral-400" />
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">Phone</h3>
              <p className="text-neutral-400">+351 914 553 201</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral-500 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Entropic Ventures Unipessoal Lda. All rights reserved.</p>
          <p>NIF: 513 896 678 | Figueira da Foz, Portugal</p>
        </div>
      </footer>
    </div>
  );
}
