import { useState } from "react";

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
  X,
} from "lucide-react";

function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Megaphone,
      title: "Strategic Communications",
      description:
        "Comprehensive communication strategies that align with your business objectives and resonate with your target audience.",
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
      features: ["Press Releases", "Media Training", "Journalist Relations", "Press Conferences", "Media Kits", "Interview Coordination"],
    },
    {
      icon: Target,
      title: "Brand Management",
      description:
        "Developing and maintaining brand identity, ensuring consistent messaging across all channels and touchpoints.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    },
    {
      icon: Calendar,
      title: "Events Management",
      description:
        "Creating memorable experiences through expertly planned corporate events, launches, and stakeholder engagements.",
      features: ["Corporate Events", "Product Launches", "Conferences"],
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "Crafting compelling content across multiple platforms to engage audiences and drive meaningful conversations.",
      features: ["Copywriting", "Video Production", "Thought Leadership"],
    },
    {
      icon: Newspaper,
      title: "Publication",
      description:
        "Managing high quality publication in traditional and modern forms.",
      features: ["Books", "Magzines", "Pamphlets", "Newsletters"],
    },
    {
      icon: Share2,
      title: "Social Media",
      description:
        "Leveraging social platforms to build communities, engage audiences, and amplify your brand message.",
      features: [
        "Social Strategy",
        "Community Management",
        "Influencer Relations",
      ],
    },
    {
      icon: HandHeart,
      title: "Stakeholder Engagement",
      description:
        "Facilitating meaningful dialogue between your organization and key stakeholders to build trust and alignment.",
      features: [
        "Investor Relations",
        "Government Affairs",
        "Community Outreach",
      ],
    },
    {
      icon: UserCheck,
      title: "Image Consulting",
      description:
        "Personal and corporate image enhancement to ensure authentic, professional, and impactful representation.",
      features: [
        "Executive Coaching",
        "Personal Branding",
        "Reputation Management",
      ],
    },
  ];

  const stats = [
    { number: "150+", label: "Clients Served", icon: Users },
    { number: "6+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Retention", icon: TrendingUp },
    { number: "24/7", label: "Crisis Support", icon: Shield },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-blue-900">Furimage</span>
                <span className="text-amber-600"> Consult</span>
                {/* <span className="text-gray-500 text-sm ml-2 font-normal">
                  Ltd
                </span> */}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
              >
                Services
              </a>
              <a
                href="#contact"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-900 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100">
              <a
                href="#home"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors font-medium rounded-lg"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block mx-4 mt-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                {/* <div className="inline-flex items-center bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-600/30">
                  <Award className="h-4 w-4 mr-2" />
                  Award-Winning PR Agency
                </div> */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Image,   <br /> <span className="text-amber-400">Identity</span>,
                
                  And  <span className="text-amber-400">Influence</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Furimage Consult is strategic partner in public
                  relations and communications, crafting narratives that
                  inspire, engage, and drive meaningful connections with
                  audience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a href="#services" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl">
                  
                 Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                
               </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-amber-400/20 to-blue-600/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-amber-400 rounded-full flex items-center justify-center shadow-xl">
                    <Megaphone className="h-12 w-12 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Strategic Excellence
                  </h3>
                  <p className="text-blue-100">
                    Delivering results that matter
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  About Furimage Consult
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Crafting Excellence in{" "}
                  <span className="text-amber-600">Communication</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Furimage Consult , we understand that in today's
                  fast-paced digital landscape, your reputation is your most
                  valuable asset. We specialize in strategic public relations
                  and communications that not only protect but enhance your
                  brand's image, identity, and influnce.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      Strategic Approach
                    </h3>
                    <p className="text-gray-600">
                      Every campaign is tailored to your unique objectives and
                      market position with data-driven insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Seasoned professionals with deep industry knowledge and
                      proven track records across diverse sectors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      Measurable Results
                    </h3>
                    <p className="text-gray-600">
                      Data-driven campaigns that deliver tangible outcomes, ROI,
                      and long-term brand value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <HandHeart className="h-10 w-10 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To equip organizations and individuals to tell their
                      stories authentically, build lasting relationships, and
                      achieve their communication goals through innovative
                      strategies.
                    </p>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-center">
                      Core Values
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900">
                          Integrity
                        </div>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-sm font-medium text-amber-800">
                          Excellence
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900">
                          Innovation
                        </div>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-sm font-medium text-amber-800">
                          Results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-amber-600">PR Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From strategic communications to image consulting, our
              full-service approach ensures your brand's message resonates
              across every channel and touchpoint with maximum impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300 shadow-lg">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="text-amber-400">Brand Story</span>?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our strategic approach to public relations and
              communications can elevate your brand and drive meaningful results
              for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300 shadow-xl">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Call Us</h3>
              <p className="text-blue-100 text-lg">
                <a
                  href="tel://+2348162056196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>+234 (0) 81 6205 6196</span>
                </a>
              </p>
              <p className="text-blue-200 text-sm mt-1">
                Available 24/7 for urgent matters
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300 shadow-xl">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Email Us</h3>
              <p className="text-blue-100 text-lg">
                {" "}
                <a
                  href="mailto://furimageconsult@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>furimageconsult@gmail.com</span>
                </a>
              </p> <p className="text-blue-100 text-lg">
                {" "}
                <a
                  href="mailto://info@furimage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>info@furimage.com</span>
                </a>
              </p>
              
              <p className="text-blue-200 text-sm mt-1">
                We respond within 2 hours
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300 shadow-xl">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Visit Us</h3>
              <p className="text-blue-100 text-lg"><span>Mamman Vatsa Writer's Village, Mpape, Abuja.</span></p>
              <p className="text-blue-200 text-sm mt-1">
                Schedule a consultation
              </p>
            </div>

                 <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300 shadow-xl">
                <MonitorDot className="h-10 w-10 text-white" />
              
              </div>
              <h3 className="font-semibold text-xl mb-3">Virtual Meeting</h3>
              <p className="text-blue-100 text-lg">Zoom, Google Meet</p>
              <p className="text-blue-200 text-sm mt-1">
                Schedule a Virtual Meeting
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#services">
              <button className="bg-amber-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 transition-all duration-300 inline-flex items-center group shadow-2xl hover:shadow-3xl">
              Start Your Journey Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-6">
                <span className="text-white">Furimage</span>
                <span className="text-amber-400"> Consult</span>
                {/* <span className="text-gray-400 text-sm ml-2 font-normal">
                  Ltd
                </span> */}
              </div>
              {/* <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Shaping perceptions and building brands through strategic
                communication excellence. Your trusted partner in public
                relations and corporate communications.
              </p> */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">tw</span>
                </div>
                 <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Insta</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
             
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-amber-400" />
                  <a
                    href="mailto://furimageconsult@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>furimageconsult@gmail.com</span>
                  </a>
                   
                </div>
                <div  className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-amber-400" />
                     <a
                    href="mailto://info@furiimage.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>info@furiimage.com</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-amber-400" />
                  <a
                    href="tel://+2348162056196"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>+234 (0) 81 6205 6196</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-amber-400" />
                  <span>Mamman Vatsa Writer's Village, Mpape, Abuja.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Furimage Consult. All rights reserved. | Designed
              By
              <a
                href="http://wa.me/+2349033572505"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Lazerwebs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Test;



