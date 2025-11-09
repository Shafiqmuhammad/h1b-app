import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { TerminalIcon, SettingsIcon, DatabaseIcon } from './icons.tsx';

const SystemActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Actions</CardTitle>
        <CardDescription>Perform administrative tasks.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button variant="outline">
          <DatabaseIcon className="h-4 w-4 mr-2" />
          Run Backup
        </Button>
        <Button variant="outline">
          <TerminalIcon className="h-4 w-4 mr-2" />
          Clear Cache
        </Button>
        <Button variant="outline">
            <SettingsIcon className="h-4 w-4 mr-2" />
            System Maintenance
        </Button>
         <Button variant="destructive">
            <span className="text-red-500 mr-2">●</span>
            Restart Services
        </Button>
      </CardContent>
    </Card>
  );
};

export default SystemActions;
