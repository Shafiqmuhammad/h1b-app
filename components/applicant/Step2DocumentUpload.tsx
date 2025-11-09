import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const DocumentUploadItem = ({ label, id }: { label: string, id: string }) => (
    <div className="p-4 border rounded-md dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Label htmlFor={id} className="font-semibold">{label}</Label>
        <div className="flex items-center gap-2">
            <Input id={id} type="file" className="max-w-xs" />
        </div>
    </div>
);


const Step2DocumentUpload = () => {
  return (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold">Document Upload</h2>
            <p className="text-gray-500 dark:text-gray-400">Please upload the required documents. Ensure files are in PDF or JPG format.</p>
        </div>
        <div className="space-y-4">
            <DocumentUploadItem label="Passport" id="passport-upload" />
            <DocumentUploadItem label="Educational Certificates" id="education-upload" />
            <DocumentUploadItem label="Resume/CV" id="resume-upload" />
            <DocumentUploadItem label="Offer Letter" id="offer-letter-upload" />
        </div>
    </div>
  );
};

export default Step2DocumentUpload;
