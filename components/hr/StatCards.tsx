import React from 'react';
import { Application } from '../../types.ts';
import { ArrowUpIcon, CheckCircleIcon, ClockIcon, BarChartIcon } from './icons.tsx';
import { cn } from '../../lib/utils.ts';

interface StatCardsProps {
    applications: Application[];
}

const StatCards: React.FC<StatCardsProps> = ({ applications }) => {
    const total = applications.length;
    const approved = applications.filter(app => app.status === 'Approved').length;
    const rejected = applications.filter(app => app.status === 'Rejected').length;
    const totalDecided = approved + rejected;
    const approvalRate = totalDecided > 0 ? Math.round((approved / totalDecided) * 100) : 0;
    const rejectionRate = totalDecided > 0 ? 100 - approvalRate : 0;
    
    // Mock avg review time
    const avgReviewTime = 1.2;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Total Applications Card */}
            <div className="bg-coke-red text-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium opacity-80">Total Applications</p>
                    <p className="text-4xl font-bold">{total}</p>
                </div>
                <div className="flex justify-end">
                    <div className="bg-white/20 rounded-full p-2">
                        <ArrowUpIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Approvals vs. Rejections Card */}
            <div className="bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Approvals vs. Rejections</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">{approvalRate}% vs {rejectionRate}%</p>
                    </div>
                    <CheckCircleIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-tertiary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${approvalRate}%` }}></div>
                </div>
            </div>

            {/* Avg. Review Time Card */}
             <div className="bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Review Time</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">{avgReviewTime} Days</p>
                    </div>
                    <ClockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-end h-8 space-x-1">
                    <div className="w-2 bg-gray-300 dark:bg-gray-600 rounded-sm" style={{height: '60%'}}></div>
                    <div className="w-2 bg-gray-300 dark:bg-gray-600 rounded-sm" style={{height: '80%'}}></div>
                    <div className="w-2 bg-gray-300 dark:bg-gray-600 rounded-sm" style={{height: '40%'}}></div>
                    <div className="w-2 bg-gray-300 dark:bg-gray-600 rounded-sm" style={{height: '90%'}}></div>
                </div>
            </div>
        </div>
    );
};

export default StatCards;