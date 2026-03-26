import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aroshaudaraka99@gmail.com",
      link: "mailto:aroshaudaraka99@gmail.com",
      color: "from-blue-500 to-cyan-500",
      external: false,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 76 864 9049",
      link: "tel:+94768649049",
      color: "from-green-500 to-emerald-500",
      external: false,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Badulla, Sri Lanka",
      link: null,
      color: "from-purple-500 to-pink-500",
      external: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Arosha Wijekoon",
      link: "https://www.linkedin.com/in/arosha-wijekoon-206223312/",
      color: "from-orange-500 to-red-500",
      external: true,
    },
    {
      icon: Github,
      title: "GitHub",
      value: "arosha-w",
      link: "https://github.com/arosha-w",
      color: "from-slate-600 to-slate-400",
      external: true,
    },
  ];

  const availability = [
    "Open to internship opportunities",
    "Available for projects",
    "Remote or on-site positions",
    "Usually replies within 24 hours",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-40 right-20 w-36 h-36 sm:w-60 sm:h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium">Let's Connect</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              I'm currently seeking internship opportunities. Feel free to contact me via email, phone, or social profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-8 sm:py-16 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 items-stretch">

            {/* Contact Details Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative h-full flex flex-col">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Details</h2>

                <div className="space-y-3 sm:space-y-4 flex-1">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${info.color} rounded-xl flex-shrink-0`}>
                          <Icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm text-gray-400">{info.title}</div>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.external ? "_blank" : undefined}
                              rel={info.external ? "noopener noreferrer" : undefined}
                              className="block mt-0.5 sm:mt-1 text-white font-semibold hover:text-purple-300 transition-colors duration-300 break-all text-sm sm:text-base"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="mt-0.5 sm:mt-1 text-white font-semibold text-sm sm:text-base">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 sm:pt-6 text-xs sm:text-sm text-gray-400">
                  Preferred contact: <span className="text-gray-200 font-medium">Email</span>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Availability</h3>
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm bg-green-500/10 border border-green-500/30 text-green-300 px-2.5 sm:px-3 py-1 rounded-full flex-shrink-0">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available
                  </span>
                </div>

                <ul className="space-y-3 sm:space-y-4 flex-1">
                  {availability.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 sm:pt-6 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  If you're contacting for an <span className="text-gray-200 font-medium">internship</span> or{" "}
                  <span className="text-gray-200 font-medium">project</span>, email is best.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;