import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Application } from '../../types.ts';
import { Button } from '../ui/button.tsx';

interface AnalyticsSidebarProps {
    applications: Application[];
}

const AnalyticsSidebar: React.FC<AnalyticsSidebarProps> = ({ applications }) => {
    const approved = applications.filter(app => app.status === 'Approved').length;
    const totalDecided = applications.filter(app => ['Approved', 'Rejected'].includes(app.status)).length;
    const approvalRate = totalDecided > 0 ? Math.round((approved / totalDecided) * 100) : 0;
    
    const pieData = [
        { name: 'Approved', value: approvalRate },
        { name: 'Other', value: 100 - approvalRate },
    ];
    const PIE_COLORS = ['#E10600', '#EAEAEA'];
    
    // Mock data for monthly applications
    const barData = [
        { name: 'Jan', applications: 25 },
        { name: 'Feb', applications: 45 },
        { name: 'Mar', applications: 60 },
        { name: 'Apr', preparations: 50 },
        { name: 'May', applications: 70 },
        { name: 'Jun', applications: 85 },
    ];

    return (
        <aside className="w-96 flex-shrink-0 bg-white dark:bg-dark-secondary p-6 flex flex-col space-y-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Analytics & Reports</h2>
            
            {/* Approval Rate */}
            <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Approval Rate</h3>
                <div className="relative h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                startAngle={90}
                                endAngle={450}
                                paddingAngle={0}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke={PIE_COLORS[index % PIE_COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-gray-800 dark:text-white">{approvalRate}%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Applications by Month */}
            <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Applications by Month</h3>
                <div className="h-48 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#6b7280' }} fontSize={12} />
                            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6b7280' }} fontSize={12} />
                            <Bar dataKey="applications" fill="#E10600" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="flex-grow flex items-end">
                 <Button className="w-full" size="lg">Export All Data (PDF/Excel)</Button>
            </div>
        </aside>
    );
};

export default AnalyticsSidebar;