import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:b24es1015@iitj.ac.in",
      label: "Email"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Brijesh-Thakkar",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/brijesh-thakkar-22912b290/",
      label: "LinkedIn"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919537474957",
      label: "Phone"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/20 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-display font-bold gradient-text hover:opacity-80 transition-smooth"
            >
              Brijesh Thakkar
            </button>
            <p className="text-muted-foreground max-w-sm">
              B.Tech Engineering Sciences student at IIT Jodhpur, passionate about 
              Machine Learning and Full Stack Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "education", label: "Education" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 glass rounded-full hover:bg-primary/20 hover:shadow-glow transition-smooth group"
                  aria-label={link.label}
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-smooth">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Brijesh Thakkar. All rights reserved.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;