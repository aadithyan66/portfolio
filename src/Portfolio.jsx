import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, User, Briefcase, GraduationCap, Award, Menu, X, ChevronDown } from 'lucide-react';

// Load Poppins font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

// Apply Poppins font to body
document.body.style.fontFamily = '"Poppins", sans-serif';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    technical: ['HTML5 & CSS3', 'JavaScript', 'C#', 'React.js', 'ASP.NET MVC', 'Web API', 'SQL Server', 'Tailwind CSS'],
    professional: ['Communication', 'Time Management', 'Creative Problem Solving', 'Team Collaboration', 'UI/UX Design']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: '"Poppins", sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aadithyan DS
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                <img src="images/Profile.jpeg" alt="" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aadithyan DS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Software Developer specializing in modern web technologies and user-friendly applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={18} />
                Thiruvananthapuram, Kerala, India
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="mr-2" size={18} />
                aadithyana66@gmail.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="mr-2" size={18} />
                +91 8839311146
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <User size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Profile Summary</h3>
                <p className="text-blue-100 leading-relaxed">
                  A highly creative and detail-oriented Software Developer with 1+ year of experience in developing, 
                  testing and delivering responsive, user-friendly websites and web applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Code className="text-blue-600 mb-3" size={32} />
                <h4 className="text-xl font-semibold mb-2">Technical Expertise</h4>
                <p className="text-gray-600">
                  Proficient in modern web technologies including HTML5, CSS3, JavaScript, C#, .NET, 
                  and frameworks like React.js and ASP.NET MVC.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Briefcase className="text-purple-600 mb-3" size={32} />
                <h4 className="text-xl font-semibold mb-2">Professional Focus</h4>
                <p className="text-gray-600">
                  Skilled at collaborating with cross-functional teams to optimize user experience 
                  and drive business growth through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors duration-300">
                    <span className="text-blue-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Professional Skills</h3>
              <div className="space-y-4">
                {skills.professional.map((skill, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-3 hover:bg-purple-100 transition-colors duration-300">
                    <span className="text-purple-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Front End Engineer</h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">JitTec IT Solutions</p>
                <p className="text-gray-600 flex items-center">
                  <MapPin size={16} className="mr-1" />
                  Thiruvananthapuram
                </p>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0">
                May 2023 - Present
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Developed and maintained responsive web applications using C#, ASP.NET MVC, SQL Server, React, HTML5, CSS3, and Tailwind CSS",
                "Designed and implemented robust MVC architecture to ensure scalability, maintainability, and seamless integration with SQL Server databases",
                "Created and optimized SQL queries, stored procedures, and database structures",
                "Built and customized interactive user interfaces using React and Tailwind CSS, ensuring a responsive and intuitive user experience",
                "Designed user interfaces with Figma and implemented them in Wix Studio, focusing on enhancing UI/UX",
                "Collaborated with cross-functional teams to gather requirements, define project scope, and deliver high-quality solutions"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Computer Applications</h3>
                  <p className="text-blue-600 font-semibold">BCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Christ Nagar College, Thiruvananthapuram</p>
              <p className="text-gray-600 mb-4">CGPA: 6.5</p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                2020 - 2023
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-600 mr-3" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Master of Computer Applications</h3>
                  <p className="text-purple-600 font-semibold">MCA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Indira Gandhi Open University</p>
              <p className="text-gray-600 mb-4">Distance Education</p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                2024 - Present
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <Award className="mr-3" size={32} />
              <h3 className="text-2xl font-bold">Certification</h3>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-2">Web Application Development with MEAN Stack</h4>
              <p className="text-blue-100 mb-2">ICT Academy of Kerala</p>
              <p className="text-blue-200">June 24 - July 22, 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together to create amazing web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
              <Mail className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">aadithyana66@gmail.com</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
              <Phone className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+91 8839311146</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
              <MapPin className="text-red-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Thiruvananthapuram, Kerala</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Mail className="inline mr-2" size={20} />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Aadithyan DS. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;