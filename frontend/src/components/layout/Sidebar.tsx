import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListFilter, 
  Upload, 
  Tags, 
  Settings, 
  CreditCard,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../ui/Logo';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { title: 'Dashboard', path: '/app', icon: <LayoutDashboard size={20} /> },
    { title: 'Transactions', path: '/app/transactions', icon: <ListFilter size={20} /> },
    { title: 'Import', path: '/app/import', icon: <Upload size={20} /> },
    { title: 'Categories', path: '/app/categories', icon: <Tags size={20} /> },
    { title: 'Settings', path: '/app/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-primary-900 text-white transition-all duration-300 flex flex-col`}
    >
      <div className={`p-4 flex ${collapsed ? 'justify-center' : 'justify-between'} items-center`}>
        {!collapsed && <Logo className="h-8" />}
        <button 
          onClick={toggleSidebar} 
          className="p-1 rounded-full hover:bg-primary-800 transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-1 px-2">
              <NavLink
                to={item.path}
                end={item.path === '/app'}
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary-700 text-white' 
                      : 'text-gray-300 hover:bg-primary-800 hover:text-white'
                  } ${collapsed ? 'justify-center' : ''}`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`p-4 mt-auto ${collapsed ? 'hidden' : 'block'}`}>
        <div className="bg-primary-800 rounded-lg p-3 text-sm">
          <div className="flex items-center mb-2">
            <CreditCard size={16} className="mr-2 text-primary-300" />
            <span className="text-primary-100 font-medium">Basic Plan</span>
          </div>
          <div className="text-xs text-primary-400">
            Upgrade for AI-powered insights and budget tracking
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;