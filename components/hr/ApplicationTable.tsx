import React, { useState, useMemo } from 'react';
import { Application, ApplicationStatus } from '../../types.ts';
import { Button } from '../ui/button.tsx';
import { Input } from '../ui/input.tsx';
import { SearchIcon } from './icons.tsx';
import ApplicationModal from './ApplicationModal.tsx';
import { cn } from '../../lib/utils.ts';

const statusConfig: Record<ApplicationStatus, { text: string, dot: string, textClass: string }> = {
    'Submitted': { text: 'Submitted', dot: 'bg-blue-500', textClass: 'text-blue-600 dark:text-blue-400' },
    'In Review': { text: 'Under HR Review', dot: 'bg-yellow-500', textClass: 'text-yellow-600 dark:text-yellow-400' },
    'Approved': { text: 'Approved', dot: 'bg-green-500', textClass: 'text-green-600 dark:text-green-400' },
    'Rejected': { text: 'Request Resubmit', dot: 'bg-red-500', textClass: 'text-red-600 dark:text-red-400' }, // Mapping 'Rejected' to 'Request Resubmit' for display
    'Requires Information': { text: 'Pending Consulate', dot: 'bg-gray-500', textClass: 'text-gray-600 dark:text-gray-400' }, // Mapping to 'Pending Consulate'
};


const ApplicationTable: React.FC<{ applications: Application[], setApplications: React.Dispatch<React.SetStateAction<Application[]>> }> = ({ applications, setApplications }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [activeTab, setActiveTab] = useState('Incoming');

  const filteredApplications = useMemo(() => {
    return applications.filter(app =>
      (app.applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicant.nationality.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeTab === 'Incoming' ? app.status !== 'Rejected' : app.status === 'Rejected') // Simple tab logic
    );
  }, [applications, searchTerm, activeTab]);

  const handleStatusChange = (applicationId: string, newStatus: ApplicationStatus, details?: { reason?: string; info?: string }) => {
    setApplications(prev => prev.map(app => {
        if (app.id === applicationId) {
            return { 
                ...app, 
                status: newStatus, 
                rejectionReason: details?.reason,
                requiredInfo: details?.info,
                lastUpdated: new Date().toISOString().split('T')[0] 
            };
        }
        return app;
    }));
  };

  return (
    <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-lg p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Applications</h2>
            <div className="flex items-center space-x-4 mt-2">
                <button 
                    onClick={() => setActiveTab('Incoming')}
                    className={cn('text-sm font-semibold', activeTab === 'Incoming' ? 'text-coke-red border-b-2 border-coke-red' : 'text-gray-500')}
                >
                    Incoming
                </button>
                 <button 
                    onClick={() => setActiveTab('Deleted')}
                    className={cn('text-sm font-semibold', activeTab === 'Deleted' ? 'text-coke-red border-b-2 border-coke-red' : 'text-gray-500')}
                 >
                    Deleted
                </button>
            </div>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-9 bg-gray-100 dark:bg-dark-tertiary border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
      
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-4 gap-4 px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div>Applicant Name</div>
          <div>Nationality</div>
          <div>Submission Date</div>
          <div>Actions</div>
      </div>
      
      {/* Application List */}
      <div className="space-y-2">
            {filteredApplications.map((app) => (
              <div key={app.id} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center px-4 py-3 bg-white dark:bg-dark-secondary border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-dark-tertiary rounded-md">
                <div className="col-span-2 md:col-span-1">
                    <div className="font-semibold text-gray-800 dark:text-white">{app.applicant.name}</div>
                    <div className="flex items-center">
                        <span className={cn('h-2 w-2 rounded-full mr-2', statusConfig[app.status]?.dot)}></span>
                        <span className={cn('text-sm', statusConfig[app.status]?.textClass)}>{statusConfig[app.status]?.text || app.status}</span>
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 hidden md:block">{app.applicant.nationality}</div>
                <div className="text-gray-600 dark:text-gray-400 hidden md:block">{app.submissionDate}</div>
                <div>
                  <Button variant="link" size="sm" className="text-coke-red p-0" onClick={() => setSelectedApplication(app)}>
                    View Details
                  </Button>
                </div>
              </tr>
            ))}
      </div>


      {selectedApplication && (
        <ApplicationModal
          application={selectedApplication}
          isOpen={!!selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default ApplicationTable;