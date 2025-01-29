// src/pages/Assessment.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/UI/Card';
import { Calculator, Atom, Cpu } from 'lucide-react';

const Assessment = () => {
  const navigate = useNavigate();
  const { subject, level } = useParams();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: Calculator,
      description: 'Test your mathematical problem-solving skills',
    },
    {
      id: 'physics',
      name: 'Physics',
      icon: Atom,
      description: 'Evaluate your understanding of physical concepts',
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: Cpu,
      description: 'Assess your programming and theoretical knowledge',
    },
  ];

  const levels = ['igcse', 'as-level', 'a-level'];

  useEffect(() => {
    if (subject && level) {
      loadProblems();
    }
  }, [subject, level]);

  const loadProblems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/alevel/data/problems/${subject}/${level}.json`);
      const data = await response.json();
      setProblems(data);
    } catch (error) {
      console.error('Error loading problems:', error);
    } finally {
      setLoading(false);
    }
  };

  // If we're loading a specific subject and level, show the problem set
  if (subject && level) {
    if (loading) {
      return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">
          {subject.charAt(0).toUpperCase() + subject.slice(1)} - {level.toUpperCase()}
        </h1>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Question {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>{problem.question}</p>
                  {problem.image && (
                    <img src={problem.image} alt="Problem diagram" className="max-w-full" />
                  )}
                  {/* Add more problem content rendering here */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Otherwise, show the subject selection screen
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Pre-Assessment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <subject.icon className="h-6 w-6" />
                {subject.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{subject.description}</p>
              <div className="space-y-4">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => navigate(`/assessment/${subject.id}/${level}`)}
                    className="block w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                  >
                    {level.toUpperCase()}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assessment;