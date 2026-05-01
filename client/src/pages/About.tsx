import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Semantic HTML with proper heading hierarchy
   - Clean layout with alternating sections
   - Visual hierarchy through typography and spacing
*/

export default function About() {
  const milestones = [
    { year: '1995', event: 'Zeze International School founded with vision for educational excellence' },
    { year: '2000', event: 'Expanded facilities and introduced advanced technology in classrooms' },
    { year: '2010', event: 'Achieved accreditation and launched international exchange programs' },
    { year: '2020', event: 'Pioneered hybrid learning model during global challenges' },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Commitment to highest standards in education and personal development.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering inclusive environment where every voice is heard and valued.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Upholding ethical values and promoting responsible citizenship.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and global perspectives.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <img
              src="/images/classroom.jpg"
              alt="Zeze International School Classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-accent/70"></div>
          </div>
          <div className="relative">
            <div className="container">
              <h1 className="heading-display text-white mb-4 drop-shadow-lg">About Zeze International School</h1>
              <p className="text-xl opacity-90 max-w-2xl font-semibold drop-shadow-md">
                Discover our journey, values, and commitment to educational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-minimal bg-gradient-to-br from-white to-blue-50 border-l-4 border-accent">
                <h2 className="text-2xl font-bold text-accent mb-4">Our Mission</h2>
                <p className="text-body">
                  To provide a comprehensive, student-centered education that develops critical thinking, creativity, and character. We empower students to become informed, responsible, and compassionate global citizens prepared for success in an ever-changing world.
                </p>
              </div>
              <div className="card-minimal bg-gradient-to-br from-white to-orange-50 border-l-4 border-secondary">
                <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
                <p className="text-body">
                  To be a leading educational institution recognized for academic excellence, innovative teaching practices, and holistic student development. We aspire to create an environment where every student discovers their potential and achieves their dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-blue-50">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-accent to-secondary mt-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg text-accent mb-1">{milestone.year}</h3>
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-accent via-orange-500 to-red-500">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">1000+</div>
                <p className="text-white/90 font-semibold">Students Enrolled</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">85+</div>
                <p className="text-white/90 font-semibold">Faculty Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">95%</div>
                <p className="text-white/90 font-semibold">College Acceptance Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">29</div>
                <p className="text-white/90 font-semibold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-orange-50">
          <div className="container">
            <h2 className="heading-section text-center mb-12">World-Class Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Modern Classrooms', description: 'Equipped with smart boards and interactive learning technology' },
                { title: 'Science Labs', description: 'State-of-the-art laboratories for hands-on scientific exploration' },
                { title: 'Library', description: 'Comprehensive collection of books and digital resources' },
                { title: 'Sports Complex', description: 'Indoor and outdoor facilities for various sports and activities' },
                { title: 'Computer Labs', description: 'Latest technology for coding and digital literacy' },
                { title: 'Auditorium', description: 'Professional venue for performances and events' },
              ].map((facility, index) => (
                <div key={index} className="card-minimal">
                  <h3 className="font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
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
