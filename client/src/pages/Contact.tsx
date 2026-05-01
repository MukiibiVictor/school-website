import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Form validation with real-time feedback (JavaScript Feature #2)
   - Contact information with semantic HTML
   - Responsive form layout
*/

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  studentGrade: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  studentGrade?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    studentGrade: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form validation function (JavaScript Feature #2)
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Student Grade validation
    if (!formData.studentGrade) {
      newErrors.studentGrade = 'Please select a grade level';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change with real-time validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        studentGrade: '',
        message: '',
      });

      setSubmitted(true);
      toast.success('Thank you! We will contact you soon.');

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary via-blue-600 to-accent text-white py-16 md:py-24">
          <div className="container">
            <h1 className="heading-display text-white mb-4">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Get in touch with us. We'd love to hear from you and answer any questions.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-blue-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Address */}
              <div className="card-minimal text-center bg-gradient-to-br from-white to-blue-50 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  Mbale Street<br />
                  Mbale, Uganda<br />
                  East Africa
                </p>
              </div>

              {/* Phone */}
              <div className="card-minimal text-center bg-gradient-to-br from-white to-orange-50 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+256751768901" className="hover:text-accent transition-colors">
                    +256 751 768 901
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="card-minimal text-center bg-gradient-to-br from-white to-blue-50 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@zis.edu" className="hover:text-accent transition-colors">
                    info@zis.edu
                  </a>
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="max-w-2xl mx-auto card-minimal bg-gradient-to-br from-white to-orange-50">
              <h3 className="font-bold text-foreground mb-4 text-lg">Office Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-accent">Monday - Friday</p>
                  <p className="text-muted-foreground text-sm">8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent">Saturday</p>
                  <p className="text-muted-foreground text-sm">9:00 AM - 1:00 PM</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-accent">Sunday</p>
                  <p className="text-muted-foreground text-sm">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="heading-section text-center mb-12">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-accent mb-1">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground text-sm">
                      Thank you for reaching out. We will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50'
                        : 'border-border bg-background hover:border-accent focus:border-accent'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email
                        ? 'border-red-500 bg-red-50'
                        : 'border-border bg-background hover:border-accent focus:border-accent'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.phone
                        ? 'border-red-500 bg-red-50'
                        : 'border-border bg-background hover:border-accent focus:border-accent'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Student Grade */}
                <div>
                  <label htmlFor="studentGrade" className="block text-sm font-semibold text-foreground mb-2">
                    Student Grade Level *
                  </label>
                  <select
                    id="studentGrade"
                    name="studentGrade"
                    value={formData.studentGrade}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.studentGrade
                        ? 'border-red-500 bg-red-50'
                        : 'border-border bg-background hover:border-accent focus:border-accent'
                    }`}
                  >
                    <option value="">Select a grade level</option>
                    <option value="primary">Primary (Grades 1-5)</option>
                    <option value="middle">Middle School (Grades 6-8)</option>
                    <option value="secondary">Secondary (Grades 9-12)</option>
                    <option value="inquiry">General Inquiry</option>
                  </select>
                  {errors.studentGrade && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.studentGrade}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-50'
                        : 'border-border bg-background hover:border-accent focus:border-accent'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
