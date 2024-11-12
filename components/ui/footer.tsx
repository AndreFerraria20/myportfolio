'use client'

import React from 'react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = false }) => {
  const currentYear = new Date().getFullYear();

  const bgColor = isDarkMode ? 'bg-secondary' : 'bg-primary';
  const textColor = isDarkMode ? 'text-primary' : 'text-secondary';

  return (

      <footer className={`${bgColor} ${textColor} py-4 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              &copy; {currentYear} André Ferraria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

  );
};

export default Footer;