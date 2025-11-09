import React from 'react';
import { CocaColaLogoIcon } from './applicant/icons';

const Footer = () => {
    return (
        <footer className="bg-light-primary dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col sm:flex-row items-center justify-between h-20 text-center sm:text-left">
                    <div className="flex items-center">
                        <CocaColaLogoIcon className="h-6 w-6 mr-2 text-coke-red" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                           H1-B Visa Application Portal
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                         © {new Date().getFullYear()} The Coca-Cola Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
