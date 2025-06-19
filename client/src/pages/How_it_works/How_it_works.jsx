import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Upload, ChevronRight, Lock } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';

const processSteps = [
  { title: 'Upload Image', description: 'Upload an ultrasound image of your ovaries.' },
  { title: 'AI Analysis', description: 'Our AI analyzes the image for PCOS indicators.' },
  { title: 'Get Basic Insights', description: 'Receive a preliminary PCOS risk assessment.' },
  { title: 'Premium Insights', description: 'Unlock detailed analysis and personalized recommendations.' },
];

const dummyData = [
  { name: 'Follicle Count', value: 15 },
  { name: 'Ovarian Volume', value: 10 },
  { name: 'Hormone Levels', value: 8 },
  { name: 'Menstrual Irregularity', value: 12 },
];

export default function HowItWorksContent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">How PCOS Detection Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Process Overview</CardTitle>
            <CardDescription>Follow these steps to get your PCOS assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {processSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PCOS Indicators</CardTitle>
            <CardDescription>Key factors analyzed in PCOS detection</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>How PCOS is Detected</CardTitle>
          <CardDescription>
            The detection of PCOS typically involves a combination of methods. Here's how the process works:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-4">1. Ultrasound Imaging</h3>
          <p className="text-sm text-gray-600 mb-4">
            A key diagnostic tool for PCOS is an ultrasound that helps detect ovarian cysts and changes in the ovaries' structure. The ultrasound images are analyzed for signs of polycystic ovaries, a hallmark of PCOS.
          </p>
          <h3 className="font-semibold text-lg mb-4">2. Hormonal Imbalance</h3>
          <p className="text-sm text-gray-600 mb-4">
            Hormonal testing is done to check for elevated androgen levels (male hormones) or insulin resistance. These are common in individuals with PCOS.
          </p>
          <h3 className="font-semibold text-lg mb-4">3. Menstrual Irregularity</h3>
          <p className="text-sm text-gray-600">
            Irregular periods or anovulation (lack of ovulation) are common in PCOS, which can contribute to difficulty in getting pregnant.
          </p>
        </CardContent>
      </Card>


     

      <Card>
        <CardHeader>
          <CardTitle>Premium Insights</CardTitle>
          <CardDescription>Unlock advanced analysis and personalized recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Lock size={48} className="text-gray-400" />
            <p className="text-center text-gray-600">
              Get access to detailed hormone analysis, personalized treatment suggestions, and expert consultations.
            </p>
            <Button variant="outline">
              Upgrade to Premium
              <div className='flex text-center justify-center place-content-center'>

              <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
