import React from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

const ReviewSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <div className="flex justify-between items-center border-b pb-2 mb-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Button variant="link" size="sm">Edit</Button>
        </div>
        <div className="space-y-2 text-sm">
            {children}
        </div>
    </div>
);

const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <div className="grid grid-cols-3">
        <span className="font-medium text-gray-500 dark:text-gray-400">{label}</span>
        <span className="col-span-2">{value}</span>
    </div>
);

const Step4Review = () => {
  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-2xl font-bold">Review Your Application</h2>
            <p className="text-gray-500 dark:text-gray-400">Please review all the information carefully before submitting.</p>
        </div>

        <div className="space-y-6">
            <ReviewSection title="Personal Information">
                <InfoRow label="Full Name" value="John Doe" />
                <InfoRow label="Date of Birth" value="1990-01-01" />
                <InfoRow label="Nationality" value="United States" />
                <InfoRow label="Email" value="john.doe@example.com" />
            </ReviewSection>

            <ReviewSection title="Uploaded Documents">
                <InfoRow label="Passport" value="passport.pdf" />
                <InfoRow label="Educational Certificates" value="certificates.pdf" />
                <InfoRow label="Resume/CV" value="resume.pdf" />
                 <InfoRow label="Offer Letter" value="offer_letter.pdf" />
            </ReviewSection>

            <ReviewSection title="Payment Information">
                <InfoRow label="Total Amount" value="$1,550.00" />
                <InfoRow label="Card Used" value="Visa ending in 1234" />
                <InfoRow label="Payment Status" value="Completed" />
            </ReviewSection>
        </div>
        
        <div className="flex items-center space-x-2 pt-4 border-t dark:border-gray-700">
            <Checkbox id="terms" checked={false} />
            <Label htmlFor="terms" className="text-sm">
                I confirm that all the information provided is true and accurate.
            </Label>
        </div>
    </div>
  );
};

export default Step4Review;
