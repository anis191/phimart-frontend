import { FiAward, FiUsers, FiShoppingBag, FiGlobe, FiHeart, FiTrendingUp, FiStar, FiPackage, FiTruck, FiShield } from "react-icons/fi";
import { Link } from "react-router";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
      bio: "Former retail executive with 15+ years of experience in e-commerce and supply chain management."
    },
    {
      name: "Sarah Williams",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1888&q=80",
      bio: "Award-winning UX designer passionate about creating seamless shopping experiences."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bio: "Full-stack developer specializing in scalable e-commerce platforms and performance optimization."
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
      bio: "Digital marketing expert with a proven track record of growing online brands exponentially."
    }
  ];

  const stats = [
    { icon: FiUsers, value: "500K+", label: "Happy Customers" },
    { icon: FiShoppingBag, value: "1M+", label: "Products Sold" },
    { icon: FiGlobe, value: "80+", label: "Countries Served" },
    { icon: FiAward, value: "15+", label: "Industry Awards" }
  ];

  const values = [
    {
      icon: FiHeart,
      title: "Customer First",
      description: "We prioritize our customers' needs and strive to deliver exceptional shopping experiences."
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Innovation",
      description: "We're constantly improving our platform and services to stay ahead of market trends."
    },
    {
      icon: FiShield,
      title: "Trust & Security",
      description: "Your data and transactions are protected with industry-leading security measures."
    },
    {
      icon: FiStar,
      title: "Quality Assurance",
      description: "Every product in our catalog goes through rigorous quality checks before listing."
    }
  ];

  const features = [
    {
      icon: FiPackage,
      title: "Wide Product Selection",
      description: "From electronics to fashion, we offer millions of products across diverse categories."
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Our optimized logistics network ensures quick delivery across the globe."
    },
    {
      icon: FiShield,
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security for all transactions."
    },
    {
      icon: FiStar,
      title: "24/7 Support",
      description: "Our customer support team is always ready to assist you with any inquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About PhiMart</h1>
              <p className="text-xl mb-8 opacity-90">
                Redefining online shopping with innovation, quality, and customer satisfaction at our core.
              </p>
              <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                Explore Our Story
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full absolute -top-10 -left-10"></div>
                <div className="w-80 h-80 bg-white bg-opacity-10 rounded-full absolute -bottom-10 -right-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="PhiMart Team" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Why Choose PhiMart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
                alt="PhiMart Growth" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, PhiMart started as a small online bookstore with a vision to transform the e-commerce landscape. 
                Today, we have grown into a global marketplace serving millions of customers worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                Our success is built on a foundation of innovation, customer-centricity, and an unwavering commitment to quality. 
                We continuously evolve our platform to meet the changing needs of modern shoppers.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-blue-800 italic">
                  Our mission is to make online shopping accessible, enjoyable, and secure for everyone, everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Behind PhiMart success is a diverse team of passionate professionals dedicated to revolutionizing e-commerce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex justify-center mt-4 space-x-3">
                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the PhiMart Family Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Experience the future of e-commerce with a platform that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop"><button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Start Shopping
            </button></Link>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;