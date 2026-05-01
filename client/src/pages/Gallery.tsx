import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Interactive image slideshow (JavaScript Feature #1)
   - Smooth transitions and hover effects
   - Responsive grid layout
*/

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402812204/JJXLhWwvSiwUZTWwpp8gvC/hero-main-5tjr66D4MdT6KrHaC22umY.webp',
      title: 'Campus Grounds',
      category: 'campus',
    },
    {
      id: 2,
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402812204/JJXLhWwvSiwUZTWwpp8gvC/hero-academics-3PgtG9F7H5BPnzDDD5PkAs.webp',
      title: 'Classroom Learning',
      category: 'academics',
    },
    {
      id: 3,
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402812204/JJXLhWwvSiwUZTWwpp8gvC/hero-gallery-JYvsKe9yEjJ99MZdf8RZpg.webp',
      title: 'Student Activities',
      category: 'activities',
    },
    {
      id: 4,
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402812204/JJXLhWwvSiwUZTWwpp8gvC/hero-contact-DvVVr8y8PTHckhtSbGQfnV.webp',
      title: 'School Entrance',
      category: 'campus',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'campus', label: 'Campus' },
    { id: 'academics', label: 'Academics' },
    { id: 'activities', label: 'Activities' },
  ];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Slideshow functionality
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [filteredImages.length]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent via-orange-500 to-red-500 text-white py-16 md:py-24">
          <div className="container">
            <h1 className="heading-display text-white mb-4">Gallery</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Explore the vibrant moments and achievements of our school community.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gradient-to-r from-background to-blue-50 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Slideshow (JavaScript Feature #1) */}
        {filteredImages.length > 0 && (
          <section className="py-12 bg-gradient-to-b from-blue-50 to-background">
            <div className="container">
              <div className="relative bg-foreground rounded-lg overflow-hidden shadow-lg group">
                {/* Main Image */}
                <div className="relative w-full h-96 md:h-screen/2 overflow-hidden">
                  <img
                    src={filteredImages[currentSlide].url}
                    alt={filteredImages[currentSlide].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">
                      {filteredImages[currentSlide].title}
                    </h3>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-4 text-muted-foreground">
                {currentSlide + 1} / {filteredImages.length}
              </div>
            </div>
          </section>
        )}

        {/* Thumbnail Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-orange-50">
          <div className="container">
            <h2 className="heading-section text-center mb-12">All Moments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setCurrentSlide(index)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      {image.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-background">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  date: 'May 15, 2026',
                  title: 'Annual Sports Day',
                  description: 'Celebrate athletic excellence and school spirit.',
                },
                {
                  date: 'June 1, 2026',
                  title: 'Science Exhibition',
                  description: 'Showcase of innovative student projects and research.',
                },
                {
                  date: 'June 20, 2026',
                  title: 'Graduation Ceremony',
                  description: 'Celebrating the achievements of our graduating class.',
                },
              ].map((event, idx) => (
                <div key={idx} className="card-minimal bg-gradient-to-br from-white to-blue-50 border-l-4 border-accent hover:border-secondary">
                  <p className="text-accent font-bold text-sm mb-2 bg-accent/10 inline-block px-3 py-1 rounded-full">{event.date}</p>
                  <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
