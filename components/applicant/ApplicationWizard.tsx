import React, { useState } from 'react';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2DocumentUpload from './Step2DocumentUpload';
import Step3Payment from './Step3Payment';
import Step4Review from './Step4Review';
import { Button } from '../ui/button';

const steps = [
  'Personal Information',
  'Document Upload',
  'Payment',
  'Review & Submit',
];

interface ApplicationWizardProps {
  onCancel: () => void;
}

const ApplicationWizard: React.FC<ApplicationWizardProps> = ({ onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1PersonalInfo />;
      case 1:
        return <Step2DocumentUpload />;
      case 2:
        return <Step3Payment />;
      case 3:
        return <Step4Review />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8">
            <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= index ? 'bg-coke-red text-white' : 'bg-gray-200 dark:bg-dark-tertiary text-gray-600 dark:text-gray-400'}`}>
                                {index + 1}
                            </div>
                            <p className={`mt-2 text-sm text-center ${currentStep >= index ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
                                {step}
                            </p>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-auto border-t-2 mx-4 ${currentStep > index ? 'border-coke-red' : 'border-gray-200 dark:border-gray-700'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>

        <div className="p-8 bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg">
            {renderStep()}
        </div>
        
        <div className="flex justify-between mt-8">
            {currentStep > 0 ? (
                <Button variant="outline" onClick={handleBack}>
                    Back
                </Button>
            ) : <Button variant="destructive" onClick={onCancel}>Cancel</Button>}

            {currentStep < steps.length - 1 ? (
                <Button onClick={handleNext}>
                    Next
                </Button>
            ) : (
                <Button onClick={() => alert('Application Submitted!')}>
                    Submit Application
                </Button>
            )}
        </div>
    </div>
  );
};

export default ApplicationWizard;
