import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FileCheckIcon, GaugeIcon, ShieldCheckIcon } from './applicant/icons';

interface LandingPageProps {
    onLoginClick: () => void;
}

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 text-coke-red">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
);


const StepCard = ({ number, title, children }: { number: string, title: string, children: React.ReactNode }) => (
    <div className="relative p-8 bg-light-primary dark:bg-dark-secondary rounded-xl shadow-md">
        <div className="absolute top-0 left-0 -mt-4 -ml-4 flex items-center justify-center h-12 w-12 rounded-full bg-coke-red text-white font-bold text-xl">
            {number}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="w-full space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <section className="text-center pt-16 pb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Future of Visa Processing is Here.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                A seamless, secure, and efficient platform for managing H1-B visa applications for Coca-Cola Bottling USA.
            </p>
            <div className="mt-8">
                <Button size="lg" onClick={onLoginClick}>
                    Get Started
                </Button>
            </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto max-w-7xl">
             <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Use Our Portal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard icon={<FileCheckIcon className="h-10 w-10"/>} title="Streamlined Process">
                    Our intuitive wizard guides you through every step, minimizing errors and saving time.
                </FeatureCard>
                 <FeatureCard icon={<GaugeIcon className="h-10 w-10"/>} title="Real-Time Tracking">
                    Stay informed with a live dashboard and automated notifications on your application status.
                </FeatureCard>
                 <FeatureCard icon={<ShieldCheckIcon className="h-10 w-10"/>} title="Secure & Compliant">
                    Your data is protected with enterprise-grade security and AES-256 encryption.
                </FeatureCard>
            </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">A Simple, Transparent Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <StepCard number="1" title="Register & Apply">
                    Create your secure account and complete the application using our guided form.
                </StepCard>
                 <StepCard number="2" title="Upload Documents">
                    Easily upload all required documents with our secure, format-validating system.
                </StepCard>
                 <StepCard number="3" title="Track & Succeed">
                    Monitor your progress from submission to final consulate approval on your personal dashboard.
                </StepCard>
            </div>
        </section>
    </div>
  );
};

export default LandingPage;
