import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { ServerIcon, DatabaseIcon, ActivityIcon } from './icons.tsx';

const HealthStatusIndicator = ({ status }: { status: 'ok' | 'degraded' | 'down' }) => {
    const statusConfig = {
        ok: { color: 'bg-green-500', text: 'Operational' },
        degraded: { color: 'bg-yellow-500', text: 'Degraded' },
        down: { color: 'bg-red-500', text: 'Down' },
    };
    const { color, text } = statusConfig[status];

    return (
        <div className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${color}`} />
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
};

const SystemHealth = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Real-time status of system components.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md bg-light-secondary dark:bg-dark-tertiary">
                    <div className="flex items-center gap-3">
                        <ServerIcon className="h-6 w-6 text-gray-500" />
                        <span className="font-semibold">API Service</span>
                    </div>
                    <HealthStatusIndicator status="ok" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-light-secondary dark:bg-dark-tertiary">
                    <div className="flex items-center gap-3">
                        <DatabaseIcon className="h-6 w-6 text-gray-500" />
                        <span className="font-semibold">Database</span>
                    </div>
                    <HealthStatusIndicator status="ok" />
                </div>
                 <div className="flex items-center justify-between p-3 rounded-md bg-light-secondary dark:bg-dark-tertiary">
                    <div className="flex items-center gap-3">
                        <ActivityIcon className="h-6 w-6 text-gray-500" />
                        <span className="font-semibold">Background Jobs</span>
                    </div>
                    <HealthStatusIndicator status="degraded" />
                </div>
            </CardContent>
        </Card>
    );
};

export default SystemHealth;
