import React, { useState, useEffect } from 'react';
import { User, UserRole } from '../../types.ts';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select } from '../ui/select';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    onSave: (user: User) => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'applicant',
        isActive: true,
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
            });
        } else {
            // Reset for new user
            setFormData({
                name: '',
                email: '',
                role: 'applicant',
                isActive: true,
            });
        }
    }, [user, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleActiveChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prev => ({...prev, isActive: e.target.value === 'true'}));
    };

    const handleSubmit = () => {
        const userToSave: User = {
            id: user?.id || '', // ID will be handled by parent on save
            lastLogin: user?.lastLogin || new Date().toISOString().split('T')[0],
            name: formData.name,
            email: formData.email,
            role: formData.role as UserRole,
            isActive: formData.isActive,
        };
        onSave(userToSave);
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogHeader>
                <DialogTitle>{user ? 'Edit User' : 'Add New User'}</DialogTitle>
                <DialogDescription>
                    {user ? `Update details for ${user.name}.` : 'Enter the details for the new user.'}
                </DialogDescription>
            </DialogHeader>
            <DialogContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="applicant">Applicant</option>
                            <option value="hr">HR</option>
                            <option value="admin">Admin</option>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="isActive">Status</Label>
                        <Select id="isActive" name="isActive" value={String(formData.isActive)} onChange={handleActiveChange}>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </Select>
                    </div>
                </div>
            </DialogContent>
            <DialogFooter>
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save User</Button>
            </DialogFooter>
        </Dialog>
    );
};

export default UserModal;
