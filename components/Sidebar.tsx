import React, { useState } from 'react';
import { cn } from '../lib/utils.ts';
import { DashboardIcon, ReportsIcon, UsersIcon, SettingsIcon, CocaColaWaveLogoIcon } from './hr/icons.tsx';

const navItems = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Reports', icon: ReportsIcon },
  { name: 'User', icon: UsersIcon },
  { name: 'Settings', icon: SettingsIcon },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-dark-secondary p-6 flex flex-col">
      <div className="flex items-center space-x-2 mb-10">
        <CocaColaWaveLogoIcon className="h-8 w-auto text-coke-red" />
        <span className="font-bold text-lg text-gray-800 dark:text-white">CocaCola Bottling USA</span>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={() => setActiveItem(item.name)}
            className={cn(
              'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
              activeItem === item.name
                ? 'bg-coke-red text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-semibold">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;