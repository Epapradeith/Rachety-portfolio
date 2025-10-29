"use client";
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Home, Briefcase, Code, GraduationCap, Mail, Moon, Sun, Github, Linkedin, Phone, Send, CheckCircle, Database, Cloud, TestTube, Server, Cpu, Award, MapPin, FileText, MessageCircle, Globe, Terminal, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [activeExperience, setActiveExperience] = useState(0);
  const [floatingSnippets, setFloatingSnippets] = useState([]);

  const codeSnippets = [
    'const react = () => {}',
    'function buildApp()',
    'import { useState }',
    'npm install package',
    'git commit -m "fix"',
    'export default App',
    'async/await',
    'map() filter() reduce()',
    '<Component />',
    'useEffect(() => {})',
    'SELECT * FROM users',
    'docker build -t app',
    'npm run dev',
    'console.log("Hello")',
    'try { } catch(e) {}',
    'class Developer {}',
    'const api = await fetch()',
    'if (true) return',
    'for (let i = 0; i++)',
    'while (condition) {}',
    'let x = 10;',
    'return response.json()',
    'axios.get("/api")',
    'mongoose.connect()',
    'redis.set("key")',
    'JWT.sign(payload)',
    'beforeEach(() => {})',
    'describe("test")',
    'it("should work")',
    'expect(result).toBe()',
  ];

  useEffect(() => {
    const snippets = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 25,
      animationDelay: Math.random() * 15,
      fontSize: 11 + Math.random() * 5,
      opacity: 0.12 + Math.random() * 0.13
    }));
    setFloatingSnippets(snippets);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);

      const sections = ['home', 'skills', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: 'Java', icon: <Coffee className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <Terminal className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <Code className="w-4 h-4" /> },
        { name: 'Python', icon: <Terminal className="w-4 h-4" /> },
        { name: 'C++', icon: <Code className="w-4 h-4" /> },
        { name: 'C', icon: <Code className="w-4 h-4" /> }
      ],
      gradient: 'from-rose-400 via-pink-400 to-rose-500'
    },
    {
      category: 'Frontend Development',
      icon: <Cpu className="w-6 h-6" />,
      items: [
        { name: 'React.js', icon: <Globe className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Globe className="w-4 h-4" /> },
        { name: 'Angular', icon: <Globe className="w-4 h-4" /> },
        { name: 'HTML5', icon: <Code className="w-4 h-4" /> },
        { name: 'CSS3', icon: <Code className="w-4 h-4" /> },
        { name: 'Tailwind', icon: <Code className="w-4 h-4" /> }
      ],
      gradient: 'from-blue-400 via-cyan-400 to-blue-500'
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
        { name: 'Express.js', icon: <Server className="w-4 h-4" /> },
        { name: 'Spring Boot', icon: <Server className="w-4 h-4" /> },
        { name: 'REST APIs', icon: <Globe className="w-4 h-4" /> },
        { name: 'GraphQL', icon: <Database className="w-4 h-4" /> },
        { name: 'Microservices', icon: <Server className="w-4 h-4" /> }
      ],
      gradient: 'from-green-400 via-emerald-400 to-green-500'
    },
    {
      category: 'Databases',
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
        { name: 'DynamoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'Redis', icon: <Database className="w-4 h-4" /> },
        { name: 'Firestore', icon: <Database className="w-4 h-4" /> }
      ],
      gradient: 'from-amber-400 via-orange-400 to-amber-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Google Cloud', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Docker', icon: <Server className="w-4 h-4" /> },
        { name: 'Jenkins', icon: <Server className="w-4 h-4" /> },
        { name: 'CI/CD', icon: <Code className="w-4 h-4" /> },
        { name: 'GitHub Actions', icon: <Github className="w-4 h-4" /> }
      ],
      gradient: 'from-purple-400 via-violet-400 to-purple-500'
    },
    {
      category: 'Testing & QA',
      icon: <TestTube className="w-6 h-6" />,
      items: [
        { name: 'Selenium', icon: <TestTube className="w-4 h-4" /> },
        { name: 'Jest', icon: <TestTube className="w-4 h-4" /> },
        { name: 'JUnit', icon: <TestTube className="w-4 h-4" /> },
        { name: 'Postman', icon: <Globe className="w-4 h-4" /> },
        { name: 'PyTest', icon: <TestTube className="w-4 h-4" /> },
        { name: 'Automation', icon: <Cpu className="w-4 h-4" /> }
      ],
      gradient: 'from-pink-400 via-fuchsia-400 to-pink-500'
    }
  ];

  const experiences = [
    {
      company: 'Code Axis Labs',
      role: 'Software Developer',
      period: 'Jan 2025 - Present',
      location: 'Remote',
      highlights: [
        'Architected Node.js microservices on AWS EC2 handling 50,000+ daily transactions with 99.9% uptime',
        'Built React.js and Angular.js dashboards for 10,000+ users with real-time WebSocket updates',
        'Integrated Stripe, PayPal, and Plaid payment APIs, reducing failed transactions by 35%',
        'Implemented Redis caching with DynamoDB, cutting database queries by 50%',
        'Established CI/CD pipelines reducing deployment time by 60% and production incidents by 70%',
        'Led 6-person development team with code reviews and established coding standards'
      ]
    },
    {
      company: 'Health Tech Solutions',
      role: 'Software Engineering Intern',
      period: 'Aug 2024 - Dec 2024',
      location: 'Birmingham, AL',
      highlights: [
        'Developed healthcare analytics platform using React.js, Node.js, and MongoDB for 5,000+ clinicians',
        'Built HIPAA-compliant REST APIs with encryption at rest/transit and role-based access control',
        'Automated regression test suites with Selenium and Postman covering 150+ critical workflows',
        'Migrated 2M+ patient records from on-premises to Google Cloud Firestore with zero data loss',
        'Created reusable React component library reducing feature development time by 35%'
      ]
    },
    {
      company: 'GEICO',
      role: 'Automation Engineer',
      period: 'Aug 2020 - Dec 2022',
      location: 'Hyderabad, India',
      highlights: [
        'Led test automation initiative using Selenium and Python with 200+ automated test cases',
        'Built page object model framework reducing regression runtime from 8 hours to 3.5 hours',
        'Integrated automated tests into Azure DevOps CI/CD pipelines with nightly regression runs',
        'Developed data-driven testing framework validating 5M+ customer records during migrations',
        'Validated 50+ REST and SOAP API endpoints using Postman collections',
        'Mentored 3 junior QA engineers improving team velocity by 30%'
      ]
    },
    {
      company: 'Value Momentum',
      role: 'Full Stack Engineer',
      period: 'Aug 2018 - Jul 2020',
      location: 'Hyderabad, India',
      highlights: [
        'Developed responsive insurance web applications using React.js, Node.js, and Express.js',
        'Designed REST APIs handling authentication and business logic for 10+ insurance products',
        'Built end-to-end Selenium automation framework reducing QA cycles by 50%',
        'Refactored legacy jQuery codebase into modular React components',
        'Implemented JWT authentication with role-based access control',
        'Optimized frontend performance by 30% through lazy loading and code splitting'
      ]
    }
  ];

const handleFormSubmit = (e) => {
  e.preventDefault();
  setFormStatus("sending");

  emailjs
    .send(
      "service_j96ip92",      // 🔹 Replace with your actual EmailJS service ID
      "Portfolio_Template",     // 🔹 Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "VCl3Njf0nlVuPnFjI"       // 🔹 Replace with your EmailJS public key
    )
    .then(
      (response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      },
      (error) => {
        console.error("Email send failed:", error);
        setFormStatus("error");
      }
    );
};


  const getSectionLabel = (section) => {
    const labels = {
      'home': 'Home',
      'skills': 'Skills',
      'experience': 'Experience',
      'education': 'Education',
      'contact': 'Contact'
    };
    return labels[section] || 'Home';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'} relative overflow-hidden`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) rotate(5deg);
            opacity: 0;
          }
        }

        .floating-snippet {
          position: fixed;
          font-family: 'Fira Code', monospace;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          z-index: 1;
          animation: floatUp linear infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .fade-in { animation: fadeIn 0.8s ease-out; }
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .slide-in-left { animation: slideInLeft 0.6s ease-out; }
        /*.float-animation { animation: float 3s ease-in-out infinite; }*/
        .pulse-animation { animation: pulse 2s ease-in-out infinite; }

        .delay-100 { animation-delay: 0.1s; animation-fill-mode: both; }
        .delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
        .delay-300 { animation-delay: 0.3s; animation-fill-mode: both; }
        .delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
        }
        
        .nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .sidebar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }

        .sidebar-fixed::-webkit-scrollbar { width: 6px; }
        .sidebar-fixed::-webkit-scrollbar-track { background: transparent; }
        .sidebar-fixed::-webkit-scrollbar-thumb {
          background: ${darkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'};
          border-radius: 3px;
        }

        .content-main {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 100vh;
        }

        .content-offset {
          margin-left: 296px;
          width: calc(100% - 296px);
        }

        .content-full {
          margin-left: 0;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .sidebar-fixed {
            position: relative;
            width: 100%;
            height: auto;
          }
          .content-offset, .content-full {
            margin-left: 0;
            width: 100%;
          }
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${darkMode ? '#1a1a1a' : '#f1f1f1'}; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Floating Code Snippets Background */}
      {floatingSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="floating-snippet"
          style={{
            left: `${snippet.left}%`,
            fontSize: `${snippet.fontSize}px`,
            opacity: snippet.opacity,
            color: darkMode ? '#8b5cf6' : '#6366f1',
            animationDuration: `${snippet.animationDuration}s`,
            animationDelay: `${snippet.animationDelay}s`
          }}
        >
          {snippet.text}
        </div>
      ))}

      {/* LEFT SIDEBAR - Fixed Width */}
      {isScrolled && (
        <aside className={`sidebar-fixed ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl`}>
          <div className="h-full flex flex-col p-4 relative z-10">

            {/* Compact Navigation */}
            <div className={`mb-4 ${darkMode ? 'bg-gray-800/80' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} rounded-xl shadow-lg p-2 fade-in`}>
              <div className="grid grid-cols-5 gap-1 mb-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-item flex items-center justify-center p-2 rounded-lg font-medium transition-all ${activeSection === item.id ? 'active' : darkMode ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-full flex items-center justify-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'} transition-all font-semibold shadow-lg text-xs`}
              >
                {darkMode ? <><Sun className="w-3.5 h-3.5" /> Light</> : <><Moon className="w-3.5 h-3.5" /> Dark</>}
              </button>
            </div>

            {/* Current Section Indicator */}
            <div className={`mb-4 ${darkMode ? 'bg-gradient-to-r from-purple-900/80 to-indigo-900/80' : 'bg-gradient-to-r from-purple-100 to-indigo-100'} rounded-xl p-2 text-center fade-in`}>
              <p className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-0.5`}>Current Section</p>
              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{getSectionLabel(activeSection)}</p>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col items-center slide-in-left space-y-3">
              <div className="relative">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src="/images/profile.jpg"
                    alt="Epapradeith Rachety"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className={`text-base font-bold text-center ${darkMode ? 'text-white' : 'gradient-text'} leading-tight px-2`}>
                Epapradeith Rachety
              </h1>

              <p className={`text-xs text-center leading-relaxed px-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full Stack Software Engineer with 5+ years of experience
              </p>

              <div className="flex flex-col gap-2 w-full px-2">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-2 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold text-xs"
                >
                  <MessageCircle className="w-3 h-3" />
                  Get In Touch
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-center gap-1.5 ${darkMode ? 'bg-gray-800 text-white border border-purple-500' : 'bg-white text-gray-800 border border-purple-400'} px-3 py-2 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold text-xs`}
                >
                  <FileText className="w-3 h-3" />
                  View Resume
                </a>
              </div>

              <div className="flex gap-2 mt-2">
                <a href="mailto:epapradeithrachety03@gmail.com" className={`${darkMode ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white/90 hover:bg-white'} p-2 rounded-lg shadow-md hover:scale-110 transition-all`}>
                  <Mail className={`w-3.5 h-3.5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                </a>
                <a href="tel:+16593057249" className={`${darkMode ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white/90 hover:bg-white'} p-2 rounded-lg shadow-md hover:scale-110 transition-all`}>
                  <Phone className={`w-3.5 h-3.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </a>
                <a href="#" className={`${darkMode ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white/90 hover:bg-white'} p-2 rounded-lg shadow-md hover:scale-110 transition-all`}>
                  <Linkedin className={`w-3.5 h-3.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </a>
                <a href="#" className={`${darkMode ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white/90 hover:bg-white'} p-2 rounded-lg shadow-md hover:scale-110 transition-all`}>
                  <Github className={`w-3.5 h-3.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-auto pt-4 border-t border-gray-700/30">
              <div className={`text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} space-y-1`}>
                <p className="font-medium">📍 Birmingham, AL</p>
                <p>Open to opportunities</p>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* MAIN CONTENT */}
      <main className={`content-main ${isScrolled ? 'content-offset' : 'content-full'} relative z-10`}>

        {/* Home Section - Hero Welcome */}
        <section id="home" className={`min-h-screen flex items-center justify-center p-6`}>
          <div className="max-w-5xl mx-auto w-full">

            {/* Top Navigation Bar - Only visible when not scrolled */}
            {!isScrolled && (
              <div className={`${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-xl rounded-2xl shadow-2xl p-3 mb-12 fade-in`}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-item flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${activeSection === item.id ? 'active' : darkMode ? 'text-gray-300 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        {item.icon}
                        <span className="font-semibold text-sm">{item.label}</span>
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'} transition-all font-semibold shadow-lg`}
                  >
                    {darkMode ? <><Sun className="w-5 h-5" /> Light</> : <><Moon className="w-5 h-5" /> Dark</>}
                  </button>
                </div>
              </div>
            )}

            <div className="text-center fade-in-up">
              {/* Profile Photo - Only visible when not scrolled */}
              {!isScrolled && (
                <div className="flex justify-center mb-8">
                  <div className="relative float-animation">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src="/images/profile.jpg"
                        alt="Epapradeith Rachety"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'gradient-text'}`}>
                Hi, I'm Epapradeith
              </h1>
              <p className={`text-2xl md:text-3xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                Full Stack Software Engineer
              </p>
              <p className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about building scalable enterprise applications with 5+ years of experience in modern web technologies, cloud platforms, and agile development practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#skills"
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all font-bold text-base"
                >
                  View My Work
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className={`flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-white border-2 border-purple-500' : 'bg-white text-gray-800 border-2 border-purple-400'} px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all font-bold text-base`}
                >
                  Get In Touch
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm flex items-center`}>
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-10 fade-in-up">
              <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'gradient-text'}`}>
                Technical Expertise
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Technologies I work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-indigo-100'} backdrop-blur-sm rounded-2xl p-5 shadow-xl card-hover fade-in-up delay-${(idx % 2) * 100}`}
                >
                  <div className={`bg-gradient-to-br ${skill.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {skill.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {skill.items.map((item, i) => (
                      <div
                        key={i}
                        className={`${darkMode ? 'bg-gray-700/50 text-gray-200 border border-gray-600' : 'bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 border border-indigo-200'} px-2.5 py-2 rounded-lg text-xs font-medium text-center hover:scale-105 transition-transform flex items-center justify-center gap-1.5`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section with Tab System */}
        <section id="experience" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm flex items-center`}>
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-10 fade-in-up">
              <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'gradient-text'}`}>
                Work Experience
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Building impactful solutions across industries
              </p>
            </div>

            {/* Experience Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 fade-in-up delay-100">
              {experiences.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExperience(idx)}
                  className={`p-3 rounded-xl font-semibold transition-all text-sm ${activeExperience === idx
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                      : darkMode ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700' : 'bg-white/80 text-gray-700 hover:bg-gray-50 border border-indigo-200'
                    }`}
                >
                  <div className="font-bold mb-0.5">{exp.company}</div>
                  <div className="text-xs opacity-80">{exp.period}</div>
                </button>
              ))}
            </div>

            {/* Experience Content */}
            <div className={`${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-indigo-100'} backdrop-blur-sm rounded-2xl p-6 shadow-2xl fade-in-up delay-200`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {experiences[activeExperience].role}
                  </h3>
                  <div className={`text-lg font-semibold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {experiences[activeExperience].company}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-indigo-50 text-gray-600'} px-3 py-1.5 rounded-full text-xs font-medium`}>
                      <Award className="w-3.5 h-3.5" /> {experiences[activeExperience].period}
                    </span>
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-indigo-50 text-gray-600'} px-3 py-1.5 rounded-full text-xs font-medium`}>
                      <MapPin className="w-3.5 h-3.5" /> {experiences[activeExperience].location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {experiences[activeExperience].highlights.map((highlight, i) => (
                  <div key={i} className={`flex gap-2.5 ${darkMode ? 'bg-gray-700/30' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} p-3 rounded-xl border ${darkMode ? 'border-gray-600' : 'border-indigo-200'}`}>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm flex items-center`}>
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-10 fade-in-up">
              <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'gradient-text'}`}>
                Education
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Academic foundation in Computer Science
              </p>
            </div>

            <div className={`${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-indigo-100'} backdrop-blur-sm rounded-2xl p-8 shadow-2xl card-hover fade-in-up`}>
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-xl shadow-lg flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Master's in Computer Science
                  </h3>
                  <div className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    University of Alabama at Birmingham
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-indigo-50 text-gray-600'} px-4 py-2 rounded-full font-medium text-sm`}>
                      <MapPin className="w-4 h-4" /> Birmingham, AL, USA
                    </span>
                    <span className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-indigo-50 text-gray-600'} px-4 py-2 rounded-full font-medium text-sm`}>
                      <Award className="w-4 h-4" /> Jan 2023 - Dec 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm flex items-center`}>
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-10 fade-in-up">
              <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'gradient-text'}`}>
                Let's Connect
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Have a project in mind? Let's make it happen!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Contact Form */}
              <div className={`${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-indigo-100'} backdrop-blur-sm rounded-2xl p-6 shadow-2xl fade-in-up`}>
                <h3 className={`text-2xl font-bold mb-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Send a Message
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-indigo-50 border-indigo-200 text-gray-800'} border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-sm`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-indigo-50 border-indigo-200 text-gray-800'} border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-sm`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="5"
                      className={`w-full ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-indigo-50 border-indigo-200 text-gray-800'} border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm`}
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" /> Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Social Icons Grid */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:epapradeithrachety03@gmail.com"
                  className={`${darkMode ? 'bg-gradient-to-br from-rose-900 to-pink-900 border border-rose-800' : 'bg-gradient-to-br from-rose-100 to-pink-200 border border-rose-300'} backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover fade-in-up delay-100 flex flex-col items-center justify-center group`}
                >
                  <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/80'} p-5 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Mail className={`w-10 h-10 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${darkMode ? 'text-rose-300' : 'text-rose-700'}`}>Email</p>
                </a>

                <a
                  href="tel:+16593057249"
                  className={`${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900 border border-blue-800' : 'bg-gradient-to-br from-blue-100 to-cyan-200 border border-blue-300'} backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover fade-in-up delay-200 flex flex-col items-center justify-center group`}
                >
                  <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/80'} p-5 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Phone className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Phone</p>
                </a>

                <a
                  href="#"
                  className={`${darkMode ? 'bg-gradient-to-br from-purple-900 to-violet-900 border border-purple-800' : 'bg-gradient-to-br from-purple-100 to-violet-200 border border-purple-300'} backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover fade-in-up delay-300 flex flex-col items-center justify-center group`}
                >
                  <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/80'} p-5 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Linkedin className={`w-10 h-10 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>LinkedIn</p>
                </a>

                <a
                  href="#"
                  className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-400'} backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover fade-in-up delay-400 flex flex-col items-center justify-center group`}
                >
                  <div className="bg-white/90 p-5 rounded-xl group-hover:scale-110 transition-transform">
                    <Github className="w-10 h-10 text-gray-800" />
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${darkMode ? 'bg-gray-900/50 border-t border-gray-800' : 'bg-white/50 border-t border-indigo-200'} backdrop-blur-sm py-6 px-6 relative z-10`}>
          <div className="max-w-6xl mx-auto text-center">
            <p className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              © 2025 Epapradeith Rachety - Full Stack Software Engineer
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;