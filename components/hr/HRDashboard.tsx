import React, { useState } from 'react';
import StatCards from './StatCards.tsx';
import ApplicationTable from './ApplicationTable.tsx';
import AnalyticsSidebar from './AnalyticsChart.tsx';
import { applications as mockApplications } from '../../data/mockData.ts';
import { Application } from '../../types.ts';
import Sidebar from '../Sidebar.tsx';

const HRDashboard = () => {
    const [applications, setApplications] = useState<Application[]>(mockApplications);
    
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-dark-primary overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-8 space-y-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">HR Manager Dashboard</h1>
                    <StatCards applications={applications} />
                    <ApplicationTable applications={applications} setApplications={setApplications} />
                </main>
            </div>
            <AnalyticsSidebar applications={applications} />
        </div>
    );
};

export default HRDashboard;