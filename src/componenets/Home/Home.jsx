"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiCode, FiDatabase, FiCloud, FiDownload } from 'react-icons/fi'

const skills = [
     "React", "Next.js", "JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL",
     "GraphQL", "REST APIs", "AWS", "Docker", "CI/CD", "Jest", "Cypress"
]

const certificates = [
     { title: "Certified Java Developer", issuer: "Oracle", year: "2023" },
     { title: "React Certification", issuer: "Udemy", year: "2022" },
     // Add more certificates as needed
];

const experiences = [
     {
          title: "Senior Frontend Developer",
          company: "Tech Innovators Inc.",
          period: "2020 - Present",
          description: "Led the frontend development of a large-scale SaaS platform, improving performance by 40% and user engagement by 25%."
     },
     {
          title: "Full Stack Developer",
          company: "Digital Solutions Ltd.",
          period: "2018 - 2020",
          description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL, serving over 100,000 daily active users."
     },
     {
          title: "Junior Web Developer",
          company: "StartUp Ventures",
          period: "2016 - 2018",
          description: "Contributed to the development of responsive web applications and implemented new features based on user feedback."
     }
]

const projects = [
     {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
          technologies: ["React", "Node.js", "MongoDB", "Redis", "TensorFlow.js"]
     },
     {
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates and advanced analytics dashboard.",
          technologies: ["Next.js", "GraphQL", "PostgreSQL", "Chart.js"]
     },
     {
          title: "Social Media Dashboard",
          description: "A comprehensive social media management tool with sentiment analysis and automated content scheduling.",
          technologies: ["React", "Express", "Natural Language Processing", "Twitter API"]
     }
]

export default function Home() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
     const [activeSection, setActiveSection] = useState('home')

     useEffect(() => {
          const handleScroll = () => {
               const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates']
               const scrollPosition = window.scrollY

               for (const section of sections) {
                    const element = document.getElementById(section)
                    if (element) {
                         const { offsetTop, offsetHeight } = element
                         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                              setActiveSection(section)
                              break
                         }
                    }
               }
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

     const scrollToSection = (sectionId) => {
          const element = document.getElementById(sectionId)
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' })
          }
          setIsMenuOpen(false)
     }

     const downloadResume = () => {
          // In a real application, you would replace this with an actual file download
          alert("Downloading resume...")
     }

     return (
          <div className="bg-zinc-800 text-zinc-100 min-h-screen hidden-scrollbar">
               <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
                    <nav className="container mx-auto px-6 py-4">
                         <div className="flex justify-between items-center">
                              <motion.h1
                                   className="text-lg font-semibold text-white"
                                   initial={{ opacity: 0, y: -20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.5 }}
                              >
                                   kaustav's
                              </motion.h1>
                              <div className="hidden md:flex space-x-6">
                                   {['home', 'about', 'skills', 'experience', 'projects', 'certificates'].map((item) => (
                                        <button
                                             key={item}
                                             onClick={() => scrollToSection(item)}
                                             className={`text-sm text-white bg-transparent rounded-full p-1 px-3 hover:bg-blue-600 hover:text-white transition-all duration-300 ${activeSection === item ? 'bg-blue-600 text-white' : ''
                                                  }`}
                                        >
                                             {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </button>
                                   ))}
                              </div>
                              <button className="md:hidden p-2" onClick={toggleMenu}>
                                   {isMenuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
                              </button>
                         </div>
                    </nav>
               </header>


               <AnimatePresence>
                    {isMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, x: '100%' }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: '100%' }}
                              transition={{ type: 'tween' }}
                              className="fixed inset-y-0 right-0 w-64 backdrop-blur-md z-50 md:hidden"
                         >
                              <div className="flex flex-col items-center mt-20 space-y-6">
                                   {['home', 'about', 'skills', 'experience', 'projects', 'certificates'].map((item) => (
                                        <button
                                             key={item}
                                             onClick={() => scrollToSection(item)}
                                             className="text-sm text-white rounded-md px-4 py-2 hover:bg-blue-600 bg-transparent transition duration-300"
                                        >
                                             {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </button>
                                   ))}
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>


               <main>
                    <section id="about" className="py-20 min-h-screen">
                         <div className="container mx-auto py-10 px-8 max-w-2xl md:max-w-4xl shadow-2xl">
                              <motion.h3
                                   className="text-5xl md:text-7xl font-extralight mb-8 text-center"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   About Me
                              </motion.h3>
                              <motion.p
                                   className="text-xs md:text-base leading-relaxed font-thin text-gray-300 text-left mb-6"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   viewport={{ once: true }}
                              >
                                   I am a dedicated Java Developer with 1.5 years of experience in crafting innovative web applications using Java and Spring Boot. My expertise lies in developing robust RESTful APIs, seamlessly integrating third-party services, and managing relational databases like PostgreSQL and Oracle.
                                   <br />
                              </motion.p>

                              <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-5">
                                   <div className="mb-4 md:mb-0">
                                        <h4 className="text-xl font-semibold text-blue-400">Kaustav Manna</h4>
                                        <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
                                   </div>
                                   <div className="flex space-x-4 mb-4 md:mb-0">
                                        {[
                                             { href: "https://github.com/johndoe", icon: <FiGithub /> },
                                             { href: "https://linkedin.com/in/johndoe", icon: <FiLinkedin /> },
                                             { href: "mailto:john@example.com", icon: <FiMail /> }
                                        ].map(({ href, icon }, index) => (
                                             <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition-colors">
                                                  {icon}
                                             </a>
                                        ))}
                                   </div>
                                   <div>
                                        <a
                                             href="path-to-your-resume.pdf"
                                             className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-600 transition-colors"
                                             download
                                        >
                                             Download Resume
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section id="skills" className="py-12 text-gray-100 min-h-screen">
                         <div className="container mx-auto px-6 max-w-5xl">
                              <motion.h3
                                   className="text-5xl md:text-7xl font-thin text-center mb-8 text-gray-50"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   Skills
                              </motion.h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                   {[
                                        {
                                             title: "Languages",
                                             color: "blue-400",
                                             items: ["Java 8+", "JavaScript", "Python"]
                                        },
                                        {
                                             title: "Frameworks",
                                             color: "green-400",
                                             items: ["Angular 11+", "ReactJs", "Bootstrap", "Less", "Spring", "Spring Boot"]
                                        },
                                        {
                                             title: "Database & Technologies",
                                             color: "purple-400",
                                             items: ["Postgres", "Oracle", "MyBatis", "Hibernate", "PL/SQL"]
                                        },
                                        {
                                             title: "Tools & Others",
                                             color: "yellow-400",
                                             items: ["Swagger UI", "Postman", "Jira", "Putty", "IntelliJ", "Eclipse", "ChatGPT", "SonarLint", "Tomcat", "Git", "OOPS", "Design Patterns"]
                                        }
                                   ].map(({ title, color, items }, index) => (
                                        <motion.div
                                             key={index}
                                             className="p-4 space-y-2"
                                             initial={{ opacity: 0, y: 20 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.5, delay: index * 0.1 }}
                                             viewport={{ once: true }}
                                        >
                                             <h4 className={`text-lg font-semibold mb-3 border-b border-zinc-600 pb-2 text-${color}`}>
                                                  {title}
                                             </h4>
                                             <div className="flex flex-wrap gap-2">
                                                  {items.map(item => (
                                                       <span key={item} className="px-3 py-1 bg-blue-700 rounded-full text-xs font-medium">
                                                            {item}
                                                       </span>
                                                  ))}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    <section id="experience" className="py-20 min-h-screen">
                         <div className="container mx-auto px-6">
                              <motion.h3
                                   className="text-5xl md:text-7xl font-thin mb-10 text-center"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   Experience
                              </motion.h3>
                              <div className="relative">
                                   <div className="absolute left-1/2 h-full border-l-2 border-gray-600"></div>
                                   <div className="flex flex-col space-y-12">
                                        {experiences.map((exp, index) => (
                                             <motion.div
                                                  key={index}
                                                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                                                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                  whileInView={{ opacity: 1, x: 0 }}
                                                  transition={{ duration: 0.8 }}
                                                  viewport={{ once: true }}
                                             >
                                                  <div className="backdrop-blur-sm text-left rounded-lg p-6 max-w-md w-full hover:bg-zinc-800/50 transition-colors">
                                                       <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                                                       <p className="text-blue-400 mb-2">{exp.company} | {exp.period}</p>
                                                       <p className="text-zinc-300 text-sm leading-tight">{exp.description}</p>
                                                  </div>
                                                  <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-1"></div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section id="projects" className="py-20 backdrop-blur-sm min-h-screen">
                         <div className="container mx-auto px-6">
                              <motion.h3
                                   className="text-5xl md:text-7xl font-light mb-12 text-center text-white"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   Projects
                              </motion.h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                                   {projects.map((project, index) => (
                                        <motion.div
                                             key={index}
                                             className="bg-zinc-800 rounded-lg p-6 transition-colors shadow-lg transform hover:scale-105"
                                             initial={{ opacity: 0, y: 50 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: index * 0.2 }}
                                             viewport={{ once: true }}
                                        >
                                             <h4 className="text-2xl font-semibold mb-3 text-white">{project.title}</h4>
                                             <p className="text-zinc-400 mb-4 text-sm leading-tight">{project.description}</p>
                                             <div className="flex flex-wrap gap-2">
                                                  {project.technologies.map(tech => (
                                                       <span key={tech} className="bg-blue-600 rounded-full text-xs font-bold text-white px-3 py-1 shadow-md">
                                                            {tech}
                                                       </span>
                                                  ))}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    <section id="certificates" className="py-20 min-h-screen">
                         <div className="container mx-auto px-6">
                              <motion.h3
                                   className="text-5xl md:text-7xl font-thin mb-8 text-center text-gray-50"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   Certificates
                              </motion.h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                   {certificates.map((cert, index) => (
                                        <motion.div
                                             key={index}
                                             className="bg-zinc-800 rounded-lg p-6 transition-colors shadow-lg transform hover:scale-105"
                                             initial={{ opacity: 0, y: 50 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: index * 0.2 }}
                                             viewport={{ once: true }}
                                        >
                                             <h4 className="text-lg font-semibold mb-3 text-white">{cert.title}</h4>
                                             <p className="text-zinc-400 mb-4 text-sm">{cert.issuer}</p>
                                             <p className="text-xs text-zinc-400">Year: {cert.year}</p>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </section>
               </main>


               <footer className="bg-zinc-800/30 backdrop-blur-sm py-6">
                    <div className="container mx-auto px-6 text-center text-zinc-400">
                         <p>&copy; 2023 John Doe. All rights reserved.</p>
                    </div>
               </footer>
          </div>
     )
}