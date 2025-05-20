import { Bell, Search, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between shadow-sm">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search transactions..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary-700 flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <div className="ml-2 hidden md:block">
            <div className="text-sm font-medium text-gray-900">Demo User</div>
            <div className="text-xs text-gray-500">demo@example.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;