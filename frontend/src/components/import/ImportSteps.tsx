import { CheckCircle2, CircleDashed, ArrowRight } from 'lucide-react';

interface ImportStepsProps {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    name: 'Upload',
    description: 'Upload your bank statement PDFs',
  },
  {
    id: 2,
    name: 'Process',
    description: 'Extract transactions from your statements',
  },
  {
    id: 3,
    name: 'Review',
    description: 'Verify and categorize your transactions',
  },
  {
    id: 4,
    name: 'Import',
    description: 'Add transactions to your account',
  },
];

const ImportSteps = ({ currentStep }: ImportStepsProps) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {index > 0 && (
              <div 
                className={`absolute top-5 -left-1/2 w-full h-0.5 ${
                  currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'
                }`}
              />
            )}
            <div className="z-10">
              {currentStep > step.id ? (
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              ) : currentStep === step.id ? (
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  {step.id}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <CircleDashed className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
            <div className="mt-2 text-center">
              <div className={`text-sm font-medium ${
                currentStep === step.id ? 'text-primary-600' : 'text-gray-900'
              }`}>
                {step.name}
              </div>
              <div className="text-xs mt-1 max-w-[120px] text-gray-500 hidden md:block">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportSteps;