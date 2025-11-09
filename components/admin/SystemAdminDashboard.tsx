import React from 'react';
import SystemHealth from './SystemHealth.tsx';
import SystemActions from './SystemActions.tsx';
import UserManagementTable from './UserManagementTable.tsx';

const SystemAdminDashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">System Administration</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Manage users, monitor system health, and perform administrative actions.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="space-y-8">
                       <SystemHealth />
                       <SystemActions />
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <UserManagementTable />
                </div>
            </div>
        </div>
    );
};

export default SystemAdminDashboard;
