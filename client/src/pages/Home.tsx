import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Users, Trophy, Lightbulb, Star, GraduationCap, Heart } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to nurture critical thinking and creativity.',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'A welcoming environment where every student feels valued and supported.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Proven track record of outstanding achievement and student success.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Modern teaching methods and technology-enhanced learning experiences.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { value: '1000+', label: 'Students', icon: GraduationCap },
    { value: '85+', label: 'Educators', icon: Star },
    { value: '95%', label: 'Pass Rate', icon: Trophy },
    { value: '29', label: 'Years Strong', icon: Heart },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/classroom.jpg"
              alt="Zeze International School students in classroom"
              className="w-full h-full object-cover object-center"
            />
            {/* Rich gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent"></div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative container py-24 md:py-36">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <Star size={14} className="fill-accent" />
                Accredited Institution Since 1995
              </div>

              <h1 className="heading-display text-white mb-6 leading-tight drop-shadow-lg">
                Where Every Student
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  Discovers Their Best
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-xl">
                Empowering young minds through quality education, innovation, and a community that believes in every child's potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/academics">
                  <a className="btn-primary inline-flex items-center justify-center gap-2 text-base">
                    Explore Programs <ArrowRight size={20} />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/25 transition-all duration-300 text-base">
                    Get in Touch
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs animate-bounce">
            <span>Scroll</span>
            <div className="w-px h-8 bg-white/30"></div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-gradient-to-r from-secondary to-blue-700 py-10">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <Icon size={28} className="text-white/70" />
                    <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                    <div className="text-white/75 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Strengths</p>
              <h2 className="heading-section text-center">Why Choose Zeze International?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-base">
                We go beyond textbooks — building confident, curious, and compassionate learners ready for tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="card-minimal group relative overflow-hidden"
                  >
                    {/* Subtle gradient top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-t-xl`}></div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── About Preview ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-background to-orange-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
                <h2 className="heading-section mb-6">A Legacy of Learning Since 1995</h2>
                <p className="text-body mb-4">
                  Zeze International School has been a beacon of educational excellence in our community for nearly three decades. Our mission is to nurture young minds and prepare them for a successful, meaningful future.
                </p>
                <p className="text-body mb-8">
                  With dedicated educators and modern facilities, we provide a comprehensive environment that fosters academic growth, personal development, and social responsibility.
                </p>
                <Link href="/about">
                  <a className="btn-primary inline-flex items-center gap-2">
                    Learn More About Us <ArrowRight size={18} />
                  </a>
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/classroom.jpg"
                    alt="Students learning together at Zeze International School"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-500 rounded-xl flex items-center justify-center">
                    <Trophy size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Top Rated School</div>
                    <div className="text-muted-foreground text-xs">95% pass rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial / Quote Banner ── */}
        <section className="py-16 bg-gradient-to-r from-[#0a1628] to-secondary text-white">
          <div className="container text-center max-w-3xl mx-auto">
            <div className="text-5xl text-accent mb-4 font-serif leading-none">"</div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white/90">
              Education is not the filling of a pail, but the lighting of a fire. At Zeze, we light that fire every single day.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white text-sm">ZIS</div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Zeze International School</div>
                <div className="text-white/60 text-xs">Est. 1995</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-accent via-orange-500 to-red-500 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full pointer-events-none"></div>

          <div className="container text-center relative">
            <p className="uppercase tracking-widest text-white/70 text-sm font-semibold mb-4">Admissions Open</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Join Our<br />School Family?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto text-white/85 leading-relaxed">
              Take the first step towards an exceptional educational journey. Contact us today to learn about admissions and enrollment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 bg-white text-accent px-8 py-3.5 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base">
                  Apply Now <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/academics">
                <a className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/15 transition-all duration-300 text-base">
                  View Programs
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
