import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, User, Briefcase, GraduationCap, Award, Menu, X, ChevronDown, Folder, Globe, Palette, Database, ShoppingCart, BookOpen, Clock, Users, Download, Star, ArrowRight, Zap, Target, Coffee, Heart } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [

     
        {
      title: "Batminton Court Booking System",
      description: "A comprehensive court booking system with real-time availability and user-friendly interface.",
      tech: ["Figma"],
      link: "https://www.figma.com/design/UnrK8FXuaM4GLoZf57bj5d/Batminton-Court?node-id=0-1&t=F4BTPNlHMHXBvESu-1",
      icon: "🏸",
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },

        {
      title: "Audit Management System",
      description: "A robust audit management system with advanced reporting and analytics features.",
      tech: ["Figma"],
      link: "https://rajishiji45.wixstudio.com/spices/category/all-products",
      icon: "📊",
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },

    {
      title: "ECart System for Spices",
      description: "Revolutionary farm management platform with AI-driven analytics and real-time monitoring capabilities.",
      tech: ["Figma", "HTML", "HTMX", "CSS", "JavaScript"],
      link: "https://rajishiji45.wixstudio.com/spices/category/all-products",
      icon: "🌶",
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },
    {
      title: "Krishi Nxt",
      description: "Comprehensive agricultural knowledge platform serving thousands of farmers across Kerala.",
      tech: ["Web Development", "CMS", "API Integration"],
      link: "https://aadithyana66.wixsite.com/krishinext",
      icon: "🌱",
      gradient: "from-blue-400 via-purple-500 to-pink-500"
    },
    {
      title: "VGuard Solar Solutions",
      description: "Next-gen solar energy platform with advanced API integrations and dynamic pricing.",
      tech: ["Wix Studio", "Figma", "JavaScript", "API"],
      link: "https://www.vguardsolartvm.com/",
      icon: "☀",
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      title: "System Society of India",
      description: "Government portal for Kerala's premier energy festival with advanced CMS capabilities.",
      tech: ["Wix Studio", "Figma", "CMS", "JavaScript"],
      link: "https://aadithyana66.wixsite.com/ssin",
      icon: "⚡",
      gradient: "from-purple-400 via-pink-500 to-red-500"
    },
    {
      title: "True Will Health",
      description: "Full-stack e-commerce solution with advanced inventory management and analytics.",
      tech: ["Full Stack", "Database", "Admin Panel"],
      link: "https://aadithyana66.wixsite.com/truewill",
      icon: "💊",
      gradient: "from-indigo-400 via-purple-500 to-pink-500"
    },
    {
      title: "Green Ranni Foods",
      description: "Premium organic food marketplace with seamless shopping experience.",
      tech: ["E-commerce", "Payment Gateway", "CMS"],
      link: "https://greenranni.com/",
      icon: "🥬",
      gradient: "from-green-400 via-emerald-500 to-teal-500"
    }
  ];

  const skills = [
    { name: "React.js", level: 90, icon: "⚛" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "C# / .NET", level: 80, icon: "🔷" },
    { name: "SQL Server", level: 75, icon: "🗄" },
    { name: "HTML5/CSS3", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "UI/UX Design", level: 95, icon: "🎭" },
    { name: "Figma", level: 80, icon: "🎨" }
  ];

  const experience = {
    company: "JitTec IT Solutions",
    role: "Front End Engineer",
    duration: "May 2023 - Present",
    location: "Thiruvananthapuram",
    highlights: [
      "🚀 Developed 10+ responsive web applications using modern tech stack",
      "⚡ Optimized application performance by 40% through efficient coding practices",
      "🎨 Designed and implemented intuitive UI/UX for 5+ client projects",
      "🤝 Led cross-functional teams in delivering high-impact solutions",
      "🔧 Integrated complex APIs and third-party services seamlessly"
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DS
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Purple Gradient Background */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="text-center z-10 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8  ">
              <div className=" mt-5 absolute inset-0 bg-gradient-to-r from-white/30 to-yellow-200/40 rounded-full animate-spin-slow"></div>
              <div className="  mt-5 absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                <img
                  src="images/Profile.jpeg"
                  alt="Aadithyan DS"
                  className="w-full h-full rounded-full object-cover"  
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent animate-pulse">
              Aadithyan DS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-light">
            Crafting Digital Experiences That Matter
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Software Developer • UI/UX Designer • Tech Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group font-semibold hover:bg-yellow-100"
            >
              <span className="mr-2">View My Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              Let's Connect
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-white/80">Projects</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">2.1+</div>
              <div className="text-sm text-white/80">Years Exp</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - White Background */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Innovation Driven</h3>
                </div>
                <p className="text-gray-700">
                  I thrive on turning complex problems into elegant, user-friendly solutions using cutting-edge technologies.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-6 border-l-4 border-pink-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Target className="text-pink-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Detail Oriented</h3>
                </div>
                <p className="text-gray-700">
                  Every pixel matters. I focus on creating polished, professional applications that exceed expectations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-orange-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Heart className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">User Focused</h3>
                </div>
                <p className="text-gray-700">
                  User experience is at the heart of everything I build. I create interfaces that users love to interact with.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700">Started coding in college</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700">Specialized in web development</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700">Joined JitTec IT Solutions</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700">Building amazing projects daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Warm Gradient Background */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white">{experience.role}</h3>
                <p className="text-xl text-white/90 mb-2">{experience.company}</p>
                <p className="text-white/80 flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {experience.location}
                </p>
              </div>
              <div className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold mt-4 lg:mt-0 shadow-lg">
                {experience.duration}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {experience.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start group hover:bg-white/5 rounded-xl p-4 transition-all duration-300">
                  <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.split(' ')[0]}
                  </div>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                    {highlight.substring(highlight.indexOf(' ') + 1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - White Background */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work spanning various industries and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="relative p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-pink-600 transition-colors duration-300 group/link font-medium"
                    >
                      <span className="mr-2">View Project</span>
                      <ExternalLink className="group-hover/link:translate-x-1 transition-transform duration-300" size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Warm Gradient Background */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-white to-yellow-200 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - White Background */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-purple-600 mr-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Computer Applications</h3>
                  <p className="text-purple-600 font-semibold">BCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Christ Nagar College, Thiruvananthapuram</p>
              <p className="text-gray-600 mb-4">CGPA: 6.5</p>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm inline-block shadow-lg">
                2020 - 2023
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 border border-pink-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-pink-600 mr-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Master of Computer Applications</h3>
                  <p className="text-pink-600 font-semibold">MCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Indira Gandhi Open University</p>
              <p className="text-gray-600 mb-4">Distance Education</p>
              <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm inline-block shadow-lg">
                2024 - Present
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <Award className="text-orange-600 mr-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Professional Certification</h3>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Web Application Development with MEAN Stack</h4>
              <p className="text-gray-700 mb-2">ICT Academy of Kerala</p>
              <p className="text-gray-600">June 24 - July 22, 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Blue Background */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 group hover:border-white/40 transition-all duration-300">
              <Mail className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-blue-100">aadithyana66@gmail.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 group hover:border-white/40 transition-all duration-300">
              <Phone className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
              <p className="text-blue-100">+91 8839311146</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 group hover:border-white/40 transition-all duration-300">
              <MapPin className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-blue-100">Thiruvananthapuram, Kerala</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.href = 'mailto:aadithyana66@gmail.com'}
              className="bg-white text-blue-600 px-12 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold group"
            >
              <Mail className="inline mr-3 group-hover:animate-bounce" size={20} />
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Footer - White Background */}
      <footer className="bg-white text-gray-600 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025. All rights reserved. Powered & Secured By Aadithyan.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
        }

        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 3rem;
          }
          .text-7xl {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;