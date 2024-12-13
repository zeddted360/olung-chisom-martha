import React from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Award,
  Heart,
  Stethoscope,
  Syringe,
  ClipboardList,
  MessageCircle,
  Star,
  Facebook,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import GetLocation from "@/components/GetLocation";
import Contact from "@/components/ui/Contact";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced mobile-first approach */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between space-y-6 md:space-y-0">
            {/* Profile Image - Moved to top for mobile */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-100 shadow-lg order-1 md:order-2">
              <Image
                src="/chisom.jpg"
                alt="Nurse Olung Chison Martha"
                className="object-cover"
                fill
                quality={100}
                sizes="(max-width: 768px) 192px, (max-width: 1200px) 224px, 256px"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Nurse Olung Chison Martha, RN
              </h1>
              <p className="text-lg sm:text-xl text-blue-600 mt-2 font-medium">
                Registered Nurse | Healthcare Provider
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
                <div className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>marthaolung@gmail.com</span>
                </div>
                <div className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+234 902 553 6929</span>
                </div>
                <Link
                  href="https://www.facebook.com/anabel.chisom.503"
                  className="flex items-center justify-center text-gray-600 underline hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  <span className="text-blue-600">martha chisom</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">8+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-sm text-gray-600">Patients Served</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-sm text-gray-600">Support</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-4 text-center">
              <ClipboardList className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* About Section - Enhanced */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-blue-600" />
            About Me
          </h2>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                A dedicated and compassionate Registered Nurse with proven
                expertise in patient care and medication management. Driven by a
                deep commitment to healthcare excellence and guided by strong
                faith and values. Specializing in comprehensive primary
                healthcare services, patient education, and pharmaceutical care,
                I combine professional expertise with a warm, empathetic
                approach to ensure the best possible outcomes for my patients.
              </p>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                As an ambitious healthcare professional, I continuously strive
                for excellence in all aspects of patient care. My goal-oriented
                approach, coupled with a genuine passion for helping others,
                enables me to provide exceptional medical services while
                building lasting relationships with patients and their families.
                Through God's guidance and professional dedication, I am
                committed to making a positive impact in my community's health
                and well-being.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Services Section - Enhanced */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Stethoscope className="w-6 h-6 mr-2 text-blue-600" />
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Syringe className="w-8 h-8 text-blue-600" />
                <CardTitle className="mt-4">Medical Procedures</CardTitle>
                <CardDescription>
                  Injections, wound care, vital signs monitoring, and basic
                  medical procedures
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <ClipboardList className="w-8 h-8 text-blue-600" />
                <CardTitle className="mt-4">Health Assessment</CardTitle>
                <CardDescription>
                  Comprehensive health evaluations, patient education, and care
                  planning
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="w-8 h-8 text-blue-600" />
                <CardTitle className="mt-4">Pharmaceutical Care</CardTitle>
                <CardDescription>
                  Medication management, health products, and pharmaceutical
                  guidance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Working Hours & Location */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-blue-600" />
            Practice Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  <CardTitle>Working Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-600">8:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600">9:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="font-medium">Sunday</span>
                    <span className="text-blue-600">12:00 PM - 10:00 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <CardTitle>Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  58 Abakaliki-Ogoja Express way
                  <br />
                  Abakaliki, Ebonyi State
                  <br />
                  480101
                </p>
                <GetLocation />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form - Enhanced */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
            Contact Me
          </h2>
          <Contact />
        </section>
      </main>

      {/* Footer - Enhanced */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Nurse Olung Martha Chisom
            </p>
            <p className="text-gray-500 mt-2">
              Registered Nurse | Healthcare Provider
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
