import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  ChevronDown,
  Folder,
  Globe,
  Palette,
  Database,
  ShoppingCart,
  BookOpen,
  Clock,
  Users,
  Download,
  Star,
  ArrowRight,
  Zap,
  Target,
  Coffee,
  Heart,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "CENKREDIT NBFC Financial Management",
      description: "Enterprise-grade financial management system for NBFC operations with comprehensive reporting and compliance features.",
      tech: [".NET", "SQL Server", "Angular", "Azure"],
      category: "Enterprise",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "EMC Course Management Platform",
      description: "Comprehensive course management system with real-time updates and intuitive user interface for educational institutions.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "http://46.28.44.139:5175/",
      category: "Education",
      gradient: "from-indigo-600 to-indigo-700",
    },
    {
      title: "Jittec Course Web Platform",
      description: "Dynamic course management solution with integrated e-commerce and payment gateway capabilities.",
      tech: ["Wix Studio", "JavaScript", "Payment Integration"],
      link: "https://aadithyana66.wixsite.com/jittec",
      category: "Education",
      gradient: "from-purple-600 to-purple-700",
    },
    {
      title: "Badminton Court Booking System",
      description: "Professional court booking interface with real-time availability tracking and seamless user experience.",
      tech: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/UnrK8FXuaM4GLoZf57bj5d/Batminton-Court?node-id=0-1&t=F4BTPNlHMHXBvESu-1",
      category: "Design",
      gradient: "from-teal-600 to-teal-700",
    },
    {
      title: "Audit Management System",
      description: "Robust audit management platform with advanced reporting, analytics, and compliance tracking features.",
      tech: ["Figma", "System Design"],
      link: "https://www.figma.com/design/h10cYNI0LtPDy7COOsgw7Q/Audit-App?node-id=298-2398&t=DtYooihVRplm733X-1",
      category: "Enterprise",
      gradient: "from-slate-600 to-slate-700",
    },
    {
      title: "ECart Spices E-commerce",
      description: "Full-featured e-commerce platform for spice trading with comprehensive product management and shopping functionality.",
      tech: ["Wix Studio", "HTML", "CSS", "JavaScript"],
      link: "https://rajishiji45.wixstudio.com/spices/category/all-products",
      category: "E-commerce",
      gradient: "from-orange-600 to-orange-700",
    },
    {
      title: "Krishi Nxt Agricultural Platform",
      description: "Comprehensive agricultural knowledge platform serving thousands of farmers across Kerala with vital farming information.",
      tech: ["Web Development", "CMS", "API Integration"],
      link: "https://aadithyana66.wixsite.com/krishinext",
      category: "Agriculture",
      gradient: "from-green-600 to-green-700",
    },
    {
      title: "VGuard Solar Solutions",
      description: "Next-generation solar energy platform with advanced API integrations and dynamic pricing calculations.",
      tech: ["Wix Studio", "Figma", "JavaScript", "API"],
      link: "https://www.vguardsolartvm.com/",
      category: "Energy",
      gradient: "from-yellow-600 to-yellow-700",
    },
    {
      title: "System Society of India Portal",
      description: "Government portal for Kerala's premier energy festival with advanced content management capabilities.",
      tech: ["Wix Studio", "Figma", "CMS"],
      link: "https://aadithyana66.wixsite.com/ssin",
      category: "Government",
      gradient: "from-cyan-600 to-cyan-700",
    },
    {
      title: "True Will Health E-commerce",
      description: "Full-stack e-commerce solution with advanced inventory management, analytics, and customer relationship features.",
      tech: ["Full Stack", "Database", "Admin Panel"],
      link: "https://aadithyana66.wixsite.com/truewill",
      category: "Healthcare",
      gradient: "from-pink-600 to-pink-700",
    },
  ];

  const skills = [
    { name: "React.js",  category: "Frontend" },
    { name: "JavaScript",  category: "Programming" },
        { name: "MongoDB",category: "Database" },

    { name: "C# / .NET",  category: "Backend" },
    { name: "SQL Server", category: "Database" },
    { name: "HTML5/CSS3",  category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Figma",category: "Design" },
  ];

  const experience = {
    company: "JitTec IT Solutions",
    role: "Front End Engineer",
    duration: "May 2023 - Present",
    location: "Thiruvananthapuram, Kerala",
    highlights: [
      "Developed 10+ responsive web applications using modern tech stack",
      "Optimized application performance by 40% through efficient coding practices",
      "Designed and implemented intuitive UI/UX for 5+ client projects",
      "Led cross-functional teams in delivering high-impact solutions",
      "Integrated complex APIs and third-party services seamlessly",
    ],
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:aadithyana66@gmail.com";
  };

  const handleCVClick = () => {
    alert('CV download would start here. Please ensure you have the PDF file configured.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                Aadithyan<span className="text-blue-600">.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-1">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-Large mb-6">
                Software Engineer 
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Aadithyan DS
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforming ideas into elegant digital solutions. Specializing in front-end development and user experience design with over 2 years of professional experience.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center font-medium"
                >
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 font-medium"
                >
                  Get in Touch
                </button>
                <button
                  onClick={handleCVClick}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 font-medium flex items-center"
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">2.1+</div>
                  <div className="text-sm text-gray-600 mt-1">Years</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600 mt-1">Clients</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    DS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation Driven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I transform complex problems into elegant, user-friendly solutions using cutting-edge technologies and best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Detail Oriented
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every pixel matters. I focus on creating polished, professional applications that exceed client expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                User Focused
              </h3>
              <p className="text-gray-600 leading-relaxed">
                User experience is at the heart of everything I build. I create interfaces that users love to interact with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {experience.role}
                </h3>
                <p className="text-xl text-blue-600 mb-2 font-medium">
                  {experience.company}
                </p>
                <p className="text-gray-600 flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {experience.location}
                </p>
              </div>
              <div className="mt-4 lg:mt-0 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
                {experience.duration}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {experience.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
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
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm"
                    >
                      View Project
                      <ExternalLink className="ml-2" size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {skill.category}
                    </div>
                  </div>
                 
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-blue-600 font-medium">BCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Christ Nagar College, Thiruvananthapuram
              </p>
              <p className="text-gray-600 mb-4">CGPA: 6.5</p>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                2020 - 2023
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Master of Computer Applications
                  </h3>
                  <p className="text-indigo-600 font-medium">MCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Indira Gandhi Open University
              </p>
              <p className="text-gray-600 mb-4">Distance Education</p>
              <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                2024 - Present
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Professional Certification
              </h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Web Application Development with MEAN Stack
              </h4>
              <p className="text-gray-700 mb-2">ICT Academy of Kerala</p>
              <p className="text-gray-600">June 24 - July 22, 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 text-sm break-all">aadithyana66@gmail.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Phone className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-blue-100">+91 6238620105</p>
              <p className="text-blue-100">+91 9188393114</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <MapPin className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-blue-100">Thiruvananthapuram, Kerala</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleEmailClick}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold inline-flex items-center"
            >
              <Mail className="mr-3" size={20} />
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Aadithyan DS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;