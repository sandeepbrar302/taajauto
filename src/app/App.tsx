import { Phone, Mail, MapPin, Instagram, Clock, Award, ShieldCheck, Handshake, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl tracking-tight">
                <span className="text-primary">TAAJ</span>
                <span className="ml-2 text-muted-foreground">AUTO</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            <a
              href="tel:5145697730"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="tel:5145697730"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1778959685207-5b5581524847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBjYXJzJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc4MDc5Njg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury car showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Your Dream Car Awaits
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience excellence in automotive sales. Quality vehicles, trusted service, and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get In Touch
            </a>
            <a
              href="tel:5145697730"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              514-569-7730
            </a>
            <a
              href="tel:5142442044"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              514-244-2044
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Welcome to Taaj Auto</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in finding the perfect vehicle. We pride ourselves on delivering exceptional customer service and quality automobiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-3">Quality Vehicles</h3>
              <p className="text-muted-foreground">
                Hand-picked selection of premium vehicles, thoroughly inspected and certified for your peace of mind.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-3">Trusted Service</h3>
              <p className="text-muted-foreground">
                Years of experience and commitment to customer satisfaction. Your trust is our top priority.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-3">Fair Pricing</h3>
              <p className="text-muted-foreground">
                Competitive pricing and flexible financing options to help you drive away in your dream car.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for your automotive journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="mb-3">Vehicle Sales</h4>
              <p className="text-muted-foreground text-sm">
                Wide selection of quality used vehicles to fit your budget and lifestyle.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="mb-3">Trade-Ins</h4>
              <p className="text-muted-foreground text-sm">
                Get fair value for your current vehicle with our hassle-free trade-in process.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="mb-3">Financing Options</h4>
              <p className="text-muted-foreground text-sm">
                Flexible financing solutions tailored to your needs and credit situation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="mb-3">Test Drives</h4>
              <p className="text-muted-foreground text-sm">
                Schedule a test drive to experience your next vehicle firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Showroom</h2>
            <p className="text-xl text-muted-foreground">
              Visit us to explore our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580881647059-923632b8fd75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc4MDc5Njg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury sports car"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658058765852-2e494c9ceace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc4MDc5Njg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium automobile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1776614041025-3be8ba3ae341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjBjYXJzJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc4MDc5Njg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury car collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622398703904-7ae5d55f8e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc4MDc5Njg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sports car detail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1508974576580-36a2f92ad3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc4MDc5Njg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Red luxury car"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771284848859-12f150fa1637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwY2FycyUyMGRlYWxlcnNoaXAlMjBzaG93cm9vbXxlbnwxfHx8fDE3ODA3OTY4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tesla showroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Visit us or reach out to schedule a test drive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        386 Grand Boulevard<br />
                        L'Île-Perrot, QC J7V 4X2
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        Jagtar Singh Kang: <a href="tel:5145697730" className="hover:text-primary transition-colors">514-569-7730</a><br />
                        Laddi Dhillon: <a href="tel:5142442044" className="hover:text-primary transition-colors">514-244-2044</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:autotaaj@gmail.com" className="hover:text-primary transition-colors">
                          autotaaj@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Follow Us</h4>
                      <p className="text-muted-foreground">
                        <a
                          href="https://www.instagram.com/taj_auto"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          @taj_auto
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769546253924-9e23d794be53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJzJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc4MDc5Njg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Taaj Auto Dealership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl mb-4">TAAJ AUTO</h3>
              <p className="text-primary-foreground/80">
                Your trusted automotive partner in Île-Perrot. Quality vehicles, exceptional service.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect With Us</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>386 Grand Boulevard, L'Île-Perrot, QC J7V 4X2</p>
                <p>
                  <a href="tel:5145697730" className="hover:text-white transition-colors">514-569-7730</a>
                </p>
                <p>
                  <a href="mailto:autotaaj@gmail.com" className="hover:text-white transition-colors">autotaaj@gmail.com</a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/taj_auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    @taj_auto
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Taaj Auto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}