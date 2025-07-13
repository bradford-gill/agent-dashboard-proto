import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Bot } from 'lucide-react';

interface HeaderProps {
  currentUser: string | null;
  onLogout: () => void;
}

export default function Header({ currentUser, onLogout }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <header className="bg-surface shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-text-primary">AgentHub</span>
            </div>

            <nav className="flex space-x-6">
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/dashboard'
                  ? 'bg-primary/20 text-primary'
                  : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
              >
                Dashboard
              </Link>
              <Link
                to="/backend-design"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/backend-design'
                  ? 'bg-primary/20 text-primary'
                  : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
              >
                Backend Design
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-text-secondary">Welcome, {currentUser}</span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-text-secondary hover:text-red-400 hover:bg-surface rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}