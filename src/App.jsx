import React, { useState } from 'react';
import { Menu, X, Mail, MapPin, Phone } from 'lucide-react';

export default function EntropicWebsite() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const trainings = [
{ date: '2026-05-29', title: 'UA Global Leader', location: 'University of Aveiro' },
{ date: '2026-05-18', title: 'INNOTEC Aveiro', location: 'Aveiro' },
{ date: '2026-05-13', title: 'Podcast Enbiente: IA tem o potencial de ser a maior burla da Historia?', location: 'Online' },
{ date: '2026-05-12', title: 'UNION SRS - Productisation', location: 'Online' },
{ date: '2026-03-03', title: 'Escola Joao de Barros - Fear Factor', location: 'Figueira da Foz' },
{ date: '2026-02-19', title: 'PeerClub - Artificial Intelligence Training', location: 'Online' },
{ date: '2025-03-29', title: 'TEDxPorto - A Grande Questao', location: 'Porto' },
{ date: '2025-03-14', title: 'PiGo Workshop', location: 'Aveiro' },
{ date: '2025-03-13', title: 'StartupLeiria - StepUp Program', location: 'Leiria' },
{ date: '2025-03-11', title: 'ISEC Coimbra Training', location: 'Coimbra' },
{ date: '2025-02-15', title: 'TEDxPorto Salon', location: 'Porto' },
{ date: '2025-02-05', title: 'NOS Smarthub Launch', location: 'National' },
{ date: '2024-11-07', title: 'Actemium - AI: A Survival Guide for Humans', location: 'International' },
{ date: '2024-10-30', title: 'IEFF - Fear Factor', location: 'Figueira da Foz' },
{ date: '2024-06-24', title: 'UnionVB - Formacao Produto', location: 'Online' },
];

const services = [
{
title: 'Tech Startup Assessment',
description: 'Comprehensive evaluation of technology, market potential, team capabilities, and IP for investment decisions.'
},
{
title: 'Startup Mentoring',
description: 'Personalized guidance and coaching to help early-stage companies navigate challenges and scale successfully.'
},
{
title: 'Tech Solution Design',
description: 'Custom digital, AI/ML, energy, and IoT solutions with R&D project management and laboratory collaboration.'
},
{
title: 'Executive Leadership',
description: 'Interim CEO, COO, or CTO roles to drive organizational transformation and growth.'
},
{
title: 'Innovation Project Design',
description: 'Strategic planning and execution of innovation initiatives aligned with business objectives.'
},
{
title: 'Grant Access Consulting',
description: 'Expert guidance on grant applications and funding opportunities for growth and innovation projects.'
}
];

return (
<div className="min-h-screen bg-white">
<nav className="fixed w-full bg-white shadow-sm z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<h1 className="text-2xl font-bold text-blue-600">Entropic Ventures</h1>
</div>

<div className="hidden md:flex gap-8">
<a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
<a href="#trainings" className="text-gray-700 hover:text-blue-600 transition">Trainings</a>
<a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
</div>

<button
className="md:hidden"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
</div>

{isMenuOpen && (
<div className="md:hidden pb-4 space-y-2">
<a href="#services" className="block text-gray-700 hover:text-blue-600 py-2">Services</a>
<a href="#trainings" className="block text-gray-700 hover:text-blue-600 py-2">Trainings</a>
<a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
</div>
)}
</div>
</nav>

<section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
Empower Your Innovation
</h2>
<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
Entropic Ventures provides strategic consulting, mentoring, and technical expertise to transform startups and drive innovation across industries.
</p>
<a
href="#contact"
className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
>
Get in Touch
</a>
</div>
</section>

<section id="services" className="py-20 px-4">
<div className="max-w-7xl mx-auto">
<h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map((service, idx) => (
<div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
<h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
<p className="text-gray-600">{service.description}</p>
</div>
))}
</div>
</div>
</section>

<section id="trainings" className="py-20 px-4 bg-gray-50">
<div className="max-w-7xl mx-auto">
<h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Past Training Events</h3>
<div className="space-y-4">
{trainings.map((training, idx) => (
<div key={idx} className="bg-white border-l-4 border-blue-600 p-6 rounded hover:shadow-md transition">
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
<div>
<h4 className="text-lg font-semibold text-gray-900">{training.title}</h4>
<p className="text-gray-600 mt-1">{training.location}</p>
</div>
<div className="text-sm font-medium text-blue-600 whitespace-nowrap">
{new Date(training.date).toLocaleDateString('pt-PT', {
year: 'numeric',
month: 'long',
day: 'numeric'
})}
</div>
</div>
</div>
))}
</div>
</div>
</section>

<section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
<div className="max-w-7xl mx-auto">
<h3 className="text-4xl font-bold text-center mb-16">Get in Touch</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<MapPin className="w-12 h-12 mx-auto mb-4" />
<h4 className="text-xl font-semibold mb-2">Location</h4>
<p className="text-blue-100">Rua da India no 4 - 3o andar<br/>3080-137 Figueira da Foz, Portugal</p>
</div>
<div className="text-center">
<Mail className="w-12 h-12 mx-auto mb-4" />
<h4 className="text-xl font-semibold mb-2">Email</h4>
<p className="text-blue-100"><a href="mailto:contact@entropic.pt" className="hover:text-white transition">contact@entropic.pt</a></p>
</div>
<div className="text-center">
<Phone className="w-12 h-12 mx-auto mb-4" />
<h4 className="text-xl font-semibold mb-2">Phone</h4>
<p className="text-blue-100">+351 914 553 201</p>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-8 px-4">
<div className="max-w-7xl mx-auto text-center">
<p>&copy; 2024 Entropic Ventures Unipessoal Lda. All rights reserved.</p>
<p className="text-sm mt-2">NIF: 513 896 678 | Figueira da Foz, Portugal</p>
</div>
</footer>
</div>
);
}
