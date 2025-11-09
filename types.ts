export type ApplicationStatus =
  | 'Submitted'
  | 'In Review'
  | 'Approved'
  | 'Rejected'
  | 'Requires Information';

export interface Applicant {
  id: string;
  name: string;
  email: string;
  dob: string;
  nationality: string;
}

export interface Document {
  id: string;
  type: 'Passport' | 'Educational Certificates' | 'Resume/CV' | 'Offer Letter';
  fileName: string;
  url: string;
}

export interface Application {
  id: string;
  applicant: Applicant;
  submissionDate: string;
  lastUpdated: string;
  status: ApplicationStatus;
  documents: Document[];
  rejectionReason?: string;
  requiredInfo?: string;
}

export type UserRole = 'applicant' | 'hr' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin: string;
  isActive: boolean;
}
