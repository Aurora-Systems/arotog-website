"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Zap,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ArotogWebsite() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent" />

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 backdrop-blur-md bg-white/5 border-b border-white/10 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse">
              AROTOG
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="hover:text-gray-300 transition-all duration-300 hover:scale-105">
                Services
              </Link>
              <Link href="#about" className="hover:text-gray-300 transition-all duration-300 hover:scale-105">
                About
              </Link>
              <Link href="#process" className="hover:text-gray-300 transition-all duration-300 hover:scale-105">
                Process
              </Link>
              <Link href="#contact" className="hover:text-gray-300 transition-all duration-300 hover:scale-105">
                Contact
              </Link>
            </div>
            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <a href="mailto:info@arotogholdings.co.zw">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              BUILD
              <br />
              <span className="animate-pulse">DEPENDABLE</span>
              <br />
              SYSTEMS
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Empowering companies and individuals with cutting-edge ICT solutions that stand the test of time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="mailto:info@arotogholdings.co.zw">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">{stat.number}</div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              OUR EXPERTISE
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              We specialize in creating robust, scalable, and future-proof technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "System Security",
                description:
                  "Advanced cybersecurity solutions to protect your digital infrastructure from evolving threats",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Maximize efficiency and speed with our cutting-edge optimization techniques and tools",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Build seamless workflows and communication systems that enhance team productivity",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <service.icon className="h-16 w-16 mx-auto mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-2xl text-white font-bold mb-4">{service.title}</h3>
                  <p className="text-white">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              TECHNOLOGIES
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we use to build exceptional systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: Code, name: "Development" },
              { icon: Database, name: "Databases" },
              { icon: Cloud, name: "Cloud Services" },
              { icon: Cpu, name: "AI & ML" },
              { icon: Globe, name: "Web Technologies" },
              { icon: Lock, name: "Security" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className="h-12 w-12 mx-auto mb-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <p className="text-white font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WHY CHOOSE
                <br />
                AROTOG?
              </h2>
              <p className="text-white text-lg mb-6">
                At Arotog, we believe that technology should be reliable, scalable, and future-ready. Our team of
                experts combines years of experience with cutting-edge innovation to deliver solutions that not only
                meet today's needs but anticipate tomorrow's challenges.
              </p>
              <p className="text-white text-lg mb-8">
                From startups to enterprise organizations, we've helped hundreds of clients build systems they can
                depend on. Our approach is simple: understand your needs, design with precision, and deliver with
                excellence.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 Technical Support",
                  "Scalable Architecture Design",
                  "Security-First Approach",
                  "Agile Development Process",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-96 flex items-center justify-center hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 animate-pulse">
                    AROTOG
                  </div>
                  <div className="text-white">Building Tomorrow's Systems Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              OUR PROCESS
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">A proven methodology that ensures project success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your needs and define project requirements" },
              { step: "02", title: "Design", description: "Create detailed architecture and system blueprints" },
              { step: "03", title: "Development", description: "Build robust solutions using best practices" },
              { step: "04", title: "Deployment", description: "Launch and provide ongoing support and maintenance" },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{process.title}</h3>
                <p className="text-white">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              GET IN TOUCH
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Ready to build something amazing? Let's discuss your project and create dependable systems together
            </p>
          </div>

          <div className="max-w-md mx-auto animate-fade-in-up animation-delay-200">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <Mail className="h-6 w-6 text-white" />
                <span className="text-white">info@arotogholdings.co.zw</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <Phone className="h-6 w-6 text-white" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <MapPin className="h-6 w-6 text-white" />
                <span className="text-white">Delaware, USA</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md bg-white/5 border-t border-white/10 py-8 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 md:mb-0 animate-pulse">
              AROTOG
            </div>
            <div className="text-white text-sm">
              © {new Date().getFullYear()} Arotog. All rights reserved. Building dependable systems.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}
