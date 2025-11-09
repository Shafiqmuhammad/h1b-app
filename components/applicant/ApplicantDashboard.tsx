import React, { useState } from 'react';
import ApplicationWizard from './ApplicationWizard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const ApplicantDashboard = () => {
  const [isApplying, setIsApplying] = useState(false);

  if (isApplying) {
    return <ApplicationWizard onCancel={() => setIsApplying(false)} />;
  }

  return (
    <div className="flex items-center justify-center">
        <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome, Applicant!</CardTitle>
                <CardDescription>
                    Manage your H1-B visa application here.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    You have not started an application yet. Click the button below to begin.
                </p>
                <Button size="lg" onClick={() => setIsApplying(true)}>
                    Start New Application
                </Button>
            </CardContent>
        </Card>
    </div>
  );
};

export default ApplicantDashboard;
