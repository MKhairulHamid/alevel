// src/pages/Home.jsx
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Calculator, Atom, Cpu } from "lucide-react";
import cambridgeImage from "../assets/as_a_level_landing.jpg";

const Home = () => {
  const subjects = [
    {
      title: "Mathematics",
      icon: Calculator,
      description:
        "Master pure mathematics, mechanics, and statistics through our comprehensive program.",
    },
    {
      title: "Physics",
      icon: Atom,
      description:
        "Explore mechanics, electricity, waves, and modern physics with hands-on learning.",
    },
    {
      title: "Computer Science",
      icon: Cpu,
      description:
        "Learn programming, algorithms, and system architecture with practical applications.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with mint background */}
      <section className="bg-[#e6fffc] min-h-[500px] relative">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Unlock Your Academic Potential
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Expert Cambridge A Level tutoring in Mathematics, Physics, and
                Computer Science. Start your journey to excellence today.
              </p>
              <Link to="/assessment">
                <Button variant="primary" className="text-lg px-8 py-3 mt-4">
                  Start Assessment →
                </Button>
              </Link>
            </div>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img
                src={cambridgeImage}
                alt="Cambridge A Levels"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
              <div className="absolute inset-0 rounded-lg shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-gray-600">Core Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Qualified Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Subjects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <subject.icon className="w-8 h-8 text-blue-600" />
                    <CardTitle>{subject.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Personalized Learning
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>
                    Customized study plans based on your assessment results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>One-on-one tutoring sessions with subject experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>Regular progress tracking and feedback</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>Experienced tutors with proven track records</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>Comprehensive study materials and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    ✓
                  </div>
                  <span>Exam preparation and technique coaching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Excel?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start your journey to academic success with our comprehensive A
            Level support
          </p>
          <Link to="/assessment">
            <Button variant="outline" className="px-6 py-2">
              Take Free Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
