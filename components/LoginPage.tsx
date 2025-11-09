import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CocaColaLogoIcon, UserIcon } from './applicant/icons';
// FIX: Added .ts extension to fix module resolution error.
import { UserRole } from '../types.ts';

interface LoginPageProps {
    onLogin: (role: UserRole) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [role, setRole] = useState<UserRole>('applicant');

    return (
        <div className="flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <CocaColaLogoIcon className="h-12 w-12" />
                    </div>
                    <CardTitle className="text-2xl">H1-B Visa Portal Login</CardTitle>
                    <CardDescription>
                        Select your role to sign in to your dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <div className="flex gap-2">
                            {['applicant', 'hr', 'admin'].map((r) => (
                                <Button
                                    key={r}
                                    variant={role === r ? 'default' : 'outline'}
                                    className="flex-1"
                                    onClick={() => setRole(r as UserRole)}
                                >
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    {r.charAt(0).toUpperCase() + r.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => onLogin(role)}>
                        Sign In
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;
