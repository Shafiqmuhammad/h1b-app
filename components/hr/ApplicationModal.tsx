import React, { useState } from 'react';
// FIX: Added .ts extension to fix module resolution error.
import { Application, ApplicationStatus } from '../../types.ts';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select } from '../ui/select';
import { Input } from '../ui/input';

interface ApplicationModalProps {
    application: Application;
    isOpen: boolean;
    onClose: () => void;
    onStatusChange: (applicationId: string, newStatus: ApplicationStatus, details?: { reason?: string; info?: string }) => void;
}

const InfoRow = ({ label, value }: { label: string, value: string | undefined }) => (
    <div className="grid grid-cols-3 gap-2 py-1">
        <span className="font-semibold text-gray-600 dark:text-gray-400">{label}</span>
        <span className="col-span-2 text-gray-800 dark:text-gray-200">{value || 'N/A'}</span>
    </div>
);

const ApplicationModal: React.FC<ApplicationModalProps> = ({ application, isOpen, onClose, onStatusChange }) => {
    const [newStatus, setNewStatus] = useState<ApplicationStatus>(application.status);
    const [rejectionReason, setRejectionReason] = useState('');
    const [requiredInfo, setRequiredInfo] = useState('');

    const handleUpdateStatus = () => {
        onStatusChange(application.id, newStatus, { reason: rejectionReason, info: requiredInfo });
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogHeader>
                <DialogTitle>Application Details - {application.id}</DialogTitle>
                <DialogDescription>Review and update the application status for {application.applicant.name}.</DialogDescription>
            </DialogHeader>
            <DialogContent className="max-h-[70vh] overflow-y-auto">
                <div className="space-y-6">
                    <section>
                        <h3 className="font-bold text-lg mb-2 border-b pb-1 dark:border-gray-700">Applicant Information</h3>
                        <InfoRow label="Name" value={application.applicant.name} />
                        <InfoRow label="Email" value={application.applicant.email} />
                        <InfoRow label="Date of Birth" value={application.applicant.dob} />
                        <InfoRow label="Nationality" value={application.applicant.nationality} />
                    </section>
                    <section>
                        <h3 className="font-bold text-lg mb-2 border-b pb-1 dark:border-gray-700">Application Status</h3>
                        <InfoRow label="Submission Date" value={application.submissionDate} />
                        <InfoRow label="Last Updated" value={application.lastUpdated} />
                        <InfoRow label="Current Status" value={application.status} />
                    </section>
                     <section>
                        <h3 className="font-bold text-lg mb-2 border-b pb-1 dark:border-gray-700">Uploaded Documents</h3>
                        <ul>
                            {application.documents.map(doc => (
                                <li key={doc.id} className="flex justify-between items-center py-1">
                                    <span>{doc.type}: {doc.fileName}</span>
                                    <Button variant="link" size="sm">Download</Button>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                         <h3 className="font-bold text-lg mb-2 border-b pb-1 dark:border-gray-700">Update Status</h3>
                         <div className="space-y-4">
                            <div>
                                <Label htmlFor="status-select">New Status</Label>
                                <Select id="status-select" value={newStatus} onChange={e => setNewStatus(e.target.value as ApplicationStatus)}>
                                    <option>Submitted</option>
                                    <option>In Review</option>
                                    <option>Approved</option>
                                    <option>Rejected</option>
                                    <option>Requires Information</option>
                                </Select>
                            </div>
                            {newStatus === 'Rejected' && (
                                <div>
                                    <Label htmlFor="rejection-reason">Rejection Reason</Label>
                                    <Input id="rejection-reason" value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} placeholder="Provide a reason for rejection..." />
                                </div>
                            )}
                             {newStatus === 'Requires Information' && (
                                <div>
                                    <Label htmlFor="required-info">Information Required</Label>
                                    <Input id="required-info" value={requiredInfo} onChange={e => setRequiredInfo(e.target.value)} placeholder="Specify what information is needed..."/>
                                </div>
                            )}
                         </div>
                    </section>
                </div>
            </DialogContent>
            <DialogFooter>
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button onClick={handleUpdateStatus}>Update Status</Button>
            </DialogFooter>
        </Dialog>
    );
};

export default ApplicationModal;