import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Microscope, Globe, Music, Zap, Palette } from 'lucide-react';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Clear presentation of academic programs
   - Visual hierarchy with icons and cards
   - Semantic HTML structure
*/

export default function Academics() {
  const programs = [
    {
      level: 'Primary (Grades 1-5)',
      description: 'Foundation years focused on building fundamental skills in literacy, numeracy, and social development.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
    },
    {
      level: 'Middle School (Grades 6-8)',
      description: 'Transitional phase emphasizing critical thinking, subject specialization, and character development.',
      subjects: ['English', 'Mathematics', 'Science', 'History', 'Geography', 'Languages', 'Technology'],
    },
    {
      level: 'Secondary (Grades 9-12)',
      description: 'Advanced curriculum preparing students for higher education with specialized streams.',
      subjects: ['Science Stream', 'Commerce Stream', 'Humanities Stream', 'Electives'],
    },
  ];

  const specialPrograms = [
    {
      icon: Microscope,
      title: 'STEM Excellence',
      description: 'Advanced programs in Science, Technology, Engineering, and Mathematics with hands-on projects.',
    },
    {
      icon: Globe,
      title: 'Language Programs',
      description: 'Multilingual education including English, Spanish, French, and Mandarin Chinese.',
    },
    {
      icon: Music,
      title: 'Arts & Culture',
      description: 'Comprehensive programs in music, visual arts, dance, and theatrical performances.',
    },
    {
      icon: Zap,
      title: 'Innovation Lab',
      description: 'Cutting-edge technology programs including coding, robotics, and digital design.',
    },
    {
      icon: Palette,
      title: 'Creative Expression',
      description: 'Encouraging artistic development through various creative mediums and projects.',
    },
    {
      icon: BookOpen,
      title: 'Research Skills',
      description: 'Developing research methodology and academic writing skills for higher education.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary via-blue-600 to-accent text-white py-16 md:py-24">
          <div className="container">
            <h1 className="heading-display text-white mb-4">Academic Programs</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Comprehensive curriculum designed to nurture academic excellence and personal growth.
            </p>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-blue-50">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Our Educational Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="card-minimal bg-gradient-to-br from-white to-blue-50 border-t-4 border-accent hover:border-secondary">
                  <h3 className="font-bold text-lg text-accent mb-3">{program.level}</h3>
                  <p className="text-foreground mb-4">{program.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Subjects:</p>
                    <ul className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <li
                          key={idx}
                          className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Special Programs & Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="card-minimal group bg-gradient-to-br from-white to-orange-50 hover:shadow-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-orange-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-section text-center mb-8">Our Teaching Approach</h2>
              <div className="space-y-6">
                <div className="card-minimal">
                  <h3 className="font-bold text-accent mb-2">Student-Centered Learning</h3>
                  <p className="text-foreground">
                    We believe in placing students at the center of the learning process, encouraging active participation, critical thinking, and collaborative problem-solving.
                  </p>
                </div>
                <div className="card-minimal">
                  <h3 className="font-bold text-accent mb-2">Experiential Education</h3>
                  <p className="text-foreground">
                    Through hands-on projects, field trips, and real-world applications, students gain practical knowledge and develop skills applicable beyond the classroom.
                  </p>
                </div>
                <div className="card-minimal">
                  <h3 className="font-bold text-accent mb-2">Holistic Development</h3>
                  <p className="text-foreground">
                    Beyond academics, we nurture emotional intelligence, leadership qualities, and social responsibility through various co-curricular activities.
                  </p>
                </div>
                <div className="card-minimal">
                  <h3 className="font-bold text-accent mb-2">Technology Integration</h3>
                  <p className="text-foreground">
                    Modern teaching tools and digital resources enhance learning experiences, preparing students for a technology-driven world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment & Support */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-background">
          <div className="container">
            <h2 className="heading-section text-center mb-12">Assessment & Student Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-4">Continuous Assessment</h3>
                <ul className="space-y-3">
                  {[
                    'Regular formative assessments',
                    'Periodic examinations',
                    'Project-based evaluations',
                    'Peer and self-assessment',
                    'Portfolio development',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Support Services</h3>
                <ul className="space-y-3">
                  {[
                    'Academic counseling',
                    'Remedial classes for struggling students',
                    'Advanced programs for gifted learners',
                    'Career guidance and counseling',
                    'Mentorship programs',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
