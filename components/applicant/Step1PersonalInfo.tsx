import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select } from '../ui/select';

const Step1PersonalInfo = () => {
  return (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold">Personal Information</h2>
            <p className="text-gray-500 dark:text-gray-400">Please provide your personal details as they appear on your passport.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Select id="nationality">
                    <option>United States</option>
                    <option>India</option>
                    <option>China</option>
                    <option>United Kingdom</option>
                    <option>Other</option>
                </Select>
            </div>
             <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
        </div>
    </div>
  );
};

export default Step1PersonalInfo;
