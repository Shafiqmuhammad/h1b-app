import { Application, User } from '../types.ts';

export const applications: Application[] = [
  {
    id: 'APP-2024-001',
    applicant: {
      id: 'USR-001',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      dob: '1992-05-15',
      nationality: 'India',
    },
    submissionDate: '2024-07-01',
    lastUpdated: '2024-07-15',
    status: 'In Review',
    documents: [
      { id: 'DOC-001', type: 'Passport', fileName: 'passport.pdf', url: '#' },
      { id: 'DOC-002', type: 'Resume/CV', fileName: 'resume_jane_doe.pdf', url: '#' },
    ],
  },
  {
    id: 'APP-2024-002',
    applicant: {
      id: 'USR-002',
      name: 'John Smith',
      email: 'john.smith@example.com',
      dob: '1988-11-20',
      nationality: 'United Kingdom',
    },
    submissionDate: '2024-06-20',
    lastUpdated: '2024-07-10',
    status: 'Approved',
    documents: [
      { id: 'DOC-003', type: 'Passport', fileName: 'passport_smith.pdf', url: '#' },
    ],
  },
    {
    id: 'APP-2024-003',
    applicant: {
      id: 'USR-003',
      name: 'Chen Wei',
      email: 'chen.wei@example.com',
      dob: '1995-02-10',
      nationality: 'China',
    },
    submissionDate: '2024-07-05',
    lastUpdated: '2024-07-08',
    status: 'Submitted',
    documents: [
        { id: 'DOC-004', type: 'Passport', fileName: 'passport_wei.pdf', url: '#' },
        { id: 'DOC-005', type: 'Educational Certificates', fileName: 'degrees.pdf', url: '#' },
    ],
  },
  {
    id: 'APP-2024-004',
    applicant: {
      id: 'USR-004',
      name: 'Maria Garcia',
      email: 'maria.garcia@example.com',
      dob: '1990-09-30',
      nationality: 'United States',
    },
    submissionDate: '2024-06-15',
    lastUpdated: '2024-06-25',
    status: 'Rejected',
    rejectionReason: 'Incomplete documentation provided.',
    documents: [
      { id: 'DOC-006', type: 'Passport', fileName: 'passport_garcia.pdf', url: '#' },
    ],
  },
  {
    id: 'APP-2024-005',
    applicant: {
      id: 'USR-005',
      name: 'David Miller',
      email: 'david.miller@example.com',
      dob: '1993-12-01',
      nationality: 'United States',
    },
    submissionDate: '2024-07-10',
    lastUpdated: '2024-07-18',
    status: 'Requires Information',
    requiredInfo: 'Please provide a copy of your updated I-94 form.',
    documents: [
      { id: 'DOC-007', type: 'Passport', fileName: 'miller_passport.pdf', url: '#' },
      { id: 'DOC-008', type: 'Offer Letter', fileName: 'offer.pdf', url: '#' },
    ],
  }
];

export const users: User[] = [
    { id: 'USR-001', name: 'Jane Doe', email: 'jane.doe@example.com', role: 'applicant', lastLogin: '2024-07-18', isActive: true },
    { id: 'HR-001', name: 'Emily White', email: 'emily.white@coca-cola.com', role: 'hr', lastLogin: '2024-07-19', isActive: true },
    { id: 'ADM-001', name: 'Robert Brown', email: 'robert.brown@coca-cola.com', role: 'admin', lastLogin: '2024-07-19', isActive: true },
    { id: 'USR-002', name: 'John Smith', email: 'john.smith@example.com', role: 'applicant', lastLogin: '2024-07-10', isActive: true },
    { id: 'HR-002', name: 'Michael Clark', email: 'michael.clark@coca-cola.com', role: 'hr', lastLogin: '2024-07-17', isActive: false },
];
