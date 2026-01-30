import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  ChevronRight,
  FileText,
  HandHeart,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MonitorDot,
  Newspaper,
  Phone,
  Share2,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  X, Facebook,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

// NOTE: This single-file React component uses Tailwind CSS + Framer Motion.
// Drop into a CRA/Vite app that already has Tailwind set up. Install framer-motion and lucide-react if missing.

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Megaphone,
      title: "Strategic Communications",
      description:
        "Comprehensive communication strategies that align with your business objectives and resonate with your target audience.",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=60",
      ],
      features: [
        "Message Development",
        "Crisis Communication",
        "Internal Communications",
      ],
    },
    {
      icon: Users,
      title: "Media Relations",
      description:
        "Building strong relationships with media outlets to secure positive coverage and manage your public narrative.",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=60",
      ],
      features: [
        "Press Releases",
        "Media Training",
        "Journalist Relations",
        "Press Conferences",
        "Media Kits",
        "Interview Coordination",
      ],
    },
    {
      icon: Target,
      title: "Brand Management",
      description:
        "Developing and maintaining brand identity, ensuring consistent messaging across all channels and touchpoints.",
      images: [
        "https://furimage.com/images/brand-management.webp",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    },
    {
      icon: Calendar,
      title: "Events Management",
      description:
        "Creating memorable experiences through expertly planned corporate events, launches, and stakeholder engagements.",
      images: [
        "https://furimage.com/images/event.webp",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Corporate Events", "Product Launches", "Conferences"],
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "Crafting compelling content across multiple platforms to engage audiences and drive meaningful conversations.",
      images: [
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Copywriting", "Video Production", "Thought Leadership"],
    },
    {
      icon: Newspaper,
      title: "Publication",
      description: "Managing high quality publication in traditional and modern forms.",
      images: [
        "https://furimage.com/images/pubs-magazines.webp",
        "https://furimage.com/images/journal.webp",
        "https://furimage.com/images/books.jpg",
      ],
      features: ["Books", "Magazines", "Pamphlets", "Newsletters"],
    },
    {
      icon: Share2,
      title: "Social Media",
      description:
        "Leveraging social platforms to build communities, engage audiences, and amplify your brand message.",
      images: [
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=60",
        "https://furimage.com/images/social.jpg",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Social Strategy", "Community Management", "Influencer Relations"],
    },
    {
      icon: HandHeart,
      title: "Stakeholder Engagement",
      description:
        "Facilitating meaningful dialogue between your organization and key stakeholders to build trust and alignment.",
      images: [
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Investor Relations", "Government Affairs", "Community Outreach"],
    },
    {
      icon: UserCheck,
      title: "Image Consulting",
      description:
        "Personal and corporate image enhancement to ensure authentic, professional, and impactful representation.",
      images: [
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=60",
      ],
      features: ["Executive Coaching", "Personal Branding", "Reputation Management"],
    },
  ];

  const stats = [
    { number: "150+", label: "Clients Served", icon: Users },
    { number: "6+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Retention", icon: TrendingUp },
    { number: "24/7", label: "Crisis Support", icon: Shield },
  ];

  useEffect(() => {
    // close mobile menu on resize > lg
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAV */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* <div className="text-2xl font-bold select-none">
                <span className="text-blue-900">Furimage</span>
                <span className="text-amber-600"> Consult</span>
              </div> */}
              <img src="https://furimage.com/images/FUR-IMAGE.png" alt="Furimage Consult Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">
                Services
              </a>
              <a href="#contact" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Contact Us
              </a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen((s) => !s)} className="text-gray-700 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* mobile menu */}
          <motion.div
            animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className={`lg:hidden overflow-hidden`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg">
                Home
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg">
                About
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg">
                Services
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block mx-4 mt-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section id="home" className="pt-20 pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* decorative shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        />

        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60" alt="team" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Image,
                  <br /> <span className="text-amber-400">Identity</span>,
                  <br /> And <span className="text-amber-400">Influence</span>
                </h1>
                <p className="mt-6 text-lg text-blue-100 max-w-2xl">
                Furimage Consult is strategic partner in public
                  relations and communications, crafting narratives that
                  inspire, engage, and drive meaningful connections with
                  audience. </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl">
                  
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
                <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
                  View Our Work
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://furimage.com/images/Usman.jpg" alt="hero" className="w-full h-96 object-cover" />
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow">
                      <Megaphone className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Strategic Excellence</h3>
                      <p className="text-gray-600">Delivering results that matter</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating badges */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 w-28 h-28 bg-amber-400/20 rounded-full blur-xl" />
              <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                About Furimage Consult
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Crafting Excellence in <span className="text-amber-600">Communication</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Furimage Consult, we understand that your reputation is your most valuable asset. We specialize in strategic public relations and communications that not only protect but enhance your brand's image, identity, and influence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Strategic Approach</h3>
                    <p className="text-gray-600">Every campaign is tailored to your unique objectives and market position with data-driven insights.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Expert Team</h3>
                    <p className="text-gray-600">Seasoned professionals with deep industry knowledge and proven track records across diverse sectors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Measurable Results</h3>
                    <p className="text-gray-600">Data-driven campaigns that deliver tangible outcomes, ROI, and long-term brand value.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <HandHeart className="h-10 w-10 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">To equip organizations and individuals to tell their stories authentically, build lasting relationships, and achieve their communication goals through innovative strategies.</p>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-center">Core Values</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900">Integrity</div>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-sm font-medium text-amber-800">Excellence</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900">Innovation</div>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-sm font-medium text-amber-800">Results</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">Our Services</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive <span className="text-amber-600">PR Solutions</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">From strategic communications to image consulting, our full-service approach ensures your brand's message resonates across every channel and touchpoint with maximum impact.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60" alt="background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">Ready to Transform Your <span className="text-amber-400">Brand Story</span>?</motion.h2>
            <motion.p initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">Let's discuss how our strategic approach to public relations and communications can elevate your brand and drive meaningful results for your business.</motion.p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <ContactCard icon={<Phone className="h-6 w-6 text-white" />} title="Call Us" subtitle={<a href="tel:+2348162056196">+234 (0) 81 6205 6196</a>} note="Available 24/7 for urgent matters" />
            <ContactCard icon={<Mail className="h-6 w-6 text-white" />} title="Email Us" subtitle={<a href="mailto:furimageconsult@gmail.com">furimageconsult@gmail.com</a>} note="We respond within 2 hours" />
            <ContactCard icon={<MapPin className="h-6 w-6 text-white" />} title="Visit Us" subtitle={<span>Mamman Vatsa Writer's Village, Mpape, Abuja.</span>} note="Schedule a consultation" />
            <ContactCard icon={<MonitorDot className="h-6 w-6 text-white" />} title="Virtual Meeting" subtitle={<span>Zoom, Google Meet</span>} note="Schedule a Virtual Meeting" />
          </div>

          <div className="text-center">
            <a href="#services" className="inline-flex items-center bg-amber-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 transition-shadow shadow-2xl">
              Start Your Journey Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-6">
                <span className="text-white">Furimage</span>
                <span className="text-amber-400"> Consult</span>
              </div>

              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 hover:text-amber-400 transition-colors" />
                <Linkedin className="h-6 w-6 hover:text-amber-400 transition-colors" />
                <Twitter className="h-6 w-6 hover:text-amber-400 transition-colors" />
                <Instagram className="h-6 w-6 hover:text-amber-400 transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center"><Mail className="h-4 w-4 mr-3 text-amber-400" /> <a href="mailto:furimageconsult@gmail.com">furimageconsult@gmail.com</a></div>
                <div className="flex items-center"><Mail className="h-4 w-4 mr-3 text-amber-400" /> <a href="mailto:info@furimage.com">info@furimage.com</a></div>
                <div className="flex items-center"><Phone className="h-4 w-4 mr-3 text-amber-400" /> <a href="tel:+2348162056196">+234 (0) 81 6205 6196</a></div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-3 text-amber-400" /> <span>Mamman Vatsa Writer's Village, Mpape, Abuja.</span></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">&copy; {new Date().getFullYear()} Furimage Consult. All rights reserved. | Created By <a href="http://wa.me/+2349033572505" className="text-amber-400">Lazerwebs</a></div>
        </div>
      </footer>
    </div>
  );
}

/* Small helper components below */
function ServiceCard({ service, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IconComp = service.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % service.images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [service.images.length]);

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={service.images[currentImageIndex]}
            alt={`${service.title} ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute left-4 bottom-4 bg-white/90 rounded-md px-3 py-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-900 rounded-md flex items-center justify-center">
            <IconComp className="h-5 w-5 text-white" />
          </div>
          <div className="text-sm font-semibold text-gray-900">{service.title}</div>
        </div>
        <div className="absolute top-4 right-4 flex gap-1">
          {service.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-500">
          {service.features.slice(0, 3).map((f, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full inline-block mt-1" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ContactCard({ icon, title, subtitle, note }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="text-center group">
      <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-blue-100 text-lg">{subtitle}</p>
      <p className="text-blue-200 text-sm mt-1">{note}</p>
    </motion.div>
  );
}

function SocialBadge({ children }) {
  return (
    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer text-sm font-bold">{children}</div>
  );
}
