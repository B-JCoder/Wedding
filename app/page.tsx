"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, Calendar, Users, Sparkles, Award, Clock, Shield, Heart, Quote } from "lucide-react"
import Link from "next/link"
import Images from "next/image"
export default function HomePage() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+14162790292"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:gmbanquet@bellnet.ca"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/hero-banquet-hall.png"
      alt="Grand Majestic Banquet Hall"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1 sm:space-y-1 md:space-y-2">
    <Badge className="gold-accent text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1.5 sm:py-2 animate-fade-in">
      Premier Event Venue in GTA
    </Badge>

    {/* Logo */}
    <Images
      src="/images/logo.png"
      alt="Logo"
      width={460}
      height={120}
      className="mx-auto max-w-[65%] sm:max-w-[55%] md:max-w-[400px] animate-slide-up"
    />

    {/* Subtitle */}
    <p className="text-sm sm:text-base md:text-lg text-foreground font-light animate-slide-up animation-delay-200">
      Banquet and Convention Centre
    </p>

    {/* Description */}
    <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-400 leading-tight">
      Where your most precious moments become unforgettable memories. Elegant venues for weddings, corporate
      events, and celebrations.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center animate-slide-up animation-delay-600">
      <Link href="/contact">
        <Button
          size="lg"
          className="gold-accent text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 hover:scale-105 transition-transform duration-200"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Your Event
        </Button>
      </Link>
      <Button
        size="lg"
        variant="outline"
        onClick={scrollToGallery}
        className="text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-200"
      >
        View Gallery
      </Button>
    </div>
  </div>
</section>



        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
                { number: "500+", label: "Events Hosted", icon: <Star className="h-6 w-6" /> },
                { number: "300", label: "Guest Capacity", icon: <Users className="h-6 w-6" /> },
                { number: "24/7", label: "Event Support", icon: <Clock className="h-6 w-6" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Exceptional Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                From intimate gatherings to grand celebrations, we create the perfect atmosphere for every occasion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Weddings",
                  description:
                    "Make your special day unforgettable with our elegant banquet halls and personalized service",
                  icon: <Sparkles className="h-8 w-8" />,
                  image: "/images/wedding-setup.png",
                },
                {
                  title: "Corporate Events",
                  description: "Professional venues for meetings, conferences, and corporate celebrations",
                  icon: <Users className="h-8 w-8" />,
                  image: "/images/corporate-event.png",
                },
                {
                  title: "Private Parties",
                  description: "Birthdays, anniversaries, and special celebrations in luxurious settings",
                  icon: <Star className="h-8 w-8" />,
                  image: "/images/dance-floor.png",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4 text-primary bg-background/20 backdrop-blur-sm rounded-full p-2">
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground text-pretty">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Premium Amenities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Every detail carefully crafted to ensure your event is flawless
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Crystal Chandeliers",
                  description: "Stunning crystal lighting creates an elegant ambiance",
                  icon: <Sparkles className="h-6 w-6" />,
                },
                {
                  title: "Professional Sound System",
                  description: "State-of-the-art audio equipment for speeches and music",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Spacious Dance Floor",
                  description: "Polished floors perfect for dancing and entertainment",
                  icon: <Heart className="h-6 w-6" />,
                },
                {
                  title: "Bridal Suite",
                  description: "Private preparation room for the bride and bridal party",
                  icon: <Star className="h-6 w-6" />,
                },
                {
                  title: "Ample Parking",
                  description: "Convenient parking for all your guests",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: "Climate Control",
                  description: "Perfect temperature control for year-round comfort",
                  icon: <Award className="h-6 w-6" />,
                },
              ].map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{amenity.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground text-pretty">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Don't just take our word for it - hear from couples and event planners who chose Grand Majestic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah & Michael",
                  event: "Wedding Reception",
                  rating: 5,
                  text: "Grand Majestic made our wedding day absolutely perfect. The staff was incredible, the venue was stunning, and every detail was handled with care.",
                },
                {
                  name: "Corporate Solutions Inc.",
                  event: "Annual Conference",
                  rating: 5,
                  text: "Professional service, excellent facilities, and seamless execution. Our conference was a huge success thanks to the Grand Majestic team.",
                },
                {
                  name: "The Johnson Family",
                  event: "50th Anniversary",
                  rating: 5,
                  text: "The elegant atmosphere and exceptional service made our anniversary celebration truly memorable. Highly recommend Grand Majestic!",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary/30 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery-section" className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Event Gallery</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Take a glimpse into the magical moments we've helped create
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/wedding-setup.png", alt: "Elegant Wedding Setup" },
                { src: "/images/corporate-event.png", alt: "Corporate Event Space" },
                { src: "/images/dance-floor.png", alt: "Dance Floor with Blue Lighting" },
                { src: "/images/reception-setup.png", alt: "Reception Table Setting" },
                { src: "/images/hero-banquet-hall.png", alt: "Main Banquet Hall" },
                { src: "/images/wedding-setup.png", alt: "Wedding Ceremony Setup" },
                { src: "/images/corporate-event.png", alt: "Business Meeting Setup" },
                { src: "/images/dance-floor.png", alt: "Evening Reception" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
{/* 
            <div className="text-center mt-12">
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View Full Gallery
                </Button>
              </Link>
            </div> */}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                  Why Choose Grand Majestic?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Elegant Venues",
                      description: "Beautifully designed spaces with luxurious amenities and stunning decor",
                    },
                    {
                      title: "Expert Service",
                      description: "Professional event coordination and personalized attention to every detail",
                    },
                    {
                      title: "Prime Location",
                      description: "Conveniently located in the GTA with ample parking and easy accessibility",
                    },
                    {
                      title: "Flexible Packages",
                      description: "Customizable event packages to suit your budget and requirements",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-pretty">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/reception-setup.png"
                  alt="Grand Majestic Interior"
                  className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm">Successful Events</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Ready to Plan Your Event?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Contact us today to discuss your vision and let us create an unforgettable experience
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <button
                onClick={handlePhoneCall}
                className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Call Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">416-279-0292</p>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">gmbanquet@bellnet.ca</p>
                </div>
              </button>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Visit Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base text-center">2648 Eglinton Ave East, GTA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gold-accent text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-200"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
