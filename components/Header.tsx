import React, { useState, useEffect } from 'react';
import { CocaColaLogoIcon, SunIcon, MoonIcon } from './applicant/icons.tsx';
import { Button } from './ui/button.tsx';
import { UserRole } from '../types.ts';

interface HeaderProps {
    userRole: UserRole | null;
    onLogout: () => void;
    onLoginClick: () => void;
    onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, onLogout, onLoginClick, onLogoClick }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };
    
    const getRoleName = (role: UserRole) => {
        switch(role) {
            case 'hr': return 'HR Manager';
            case 'admin': return 'System Admin';
            case 'applicant': return 'Applicant';
            default: return '';
        }
    }

    return (
        <header className="bg-white dark:bg-dark-secondary border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button onClick={onLogoClick} className="flex items-center focus:outline-none focus:ring-2 focus:ring-coke-red rounded-md">
                        <CocaColaLogoIcon className="h-8 w-8 mr-3 text-coke-red" />
                        <span className="text-xl font-semibold text-gray-800 dark:text-white">
                           Visa Application Portal
                        </span>
                    </button>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                        </Button>
                        {userRole ? (
                            <>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hidden sm:inline">
                                    {getRoleName(userRole)}
                                </span>
                                <Button variant="outline" size="sm" onClick={onLogout}>Logout</Button>
                            </>
                        ) : (
                            <Button variant="outline" size="sm" onClick={onLoginClick}>Login</Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;