import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Bell, User, Lock, CreditCard, Download, Mail } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: {
      weeklyReport: true,
      newImport: true,
      budgetAlert: true,
    },
    app: {
      weeklyReport: false,
      newImport: true,
      budgetAlert: true,
    },
  });
  
  const handleToggleNotification = (channel: 'email' | 'app', type: string) => {
    setNotifications({
      ...notifications,
      [channel]: {
        ...notifications[channel],
        [type]: !notifications[channel][type as keyof typeof notifications.email],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <Button variant="outline">Save Changes</Button>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <Card>
            <CardContent className="p-0">
              <nav className="divide-y divide-gray-200">
                {[
                  { label: 'Profile', icon: <User size={18} /> },
                  { label: 'Notifications', icon: <Bell size={18} /> },
                  { label: 'Security', icon: <Lock size={18} /> },
                  { label: 'Billing', icon: <CreditCard size={18} /> },
                  { label: 'Data Export', icon: <Download size={18} /> },
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-center px-4 py-3 hover:bg-gray-50 ${
                      index === 1 ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <span className={`mr-3 ${index === 1 ? 'text-primary-500' : 'text-gray-500'}`}>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you want to be notified about activity in your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-b pb-5 mb-5">
                <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    { id: 'weeklyReport', label: 'Weekly Financial Report', description: 'Get a summary of your financial activity every Sunday' },
                    { id: 'newImport', label: 'New Import Completed', description: 'Receive a notification when your bank statement import is processed' },
                    { id: 'budgetAlert', label: 'Budget Alerts', description: 'Be notified when you exceed or are close to exceeding your budget limits' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={notifications.email[item.id as keyof typeof notifications.email]}
                            onChange={() => handleToggleNotification('email', item.id)}
                          />
                          <div className={`block w-10 h-6 rounded-full ${
                            notifications.email[item.id as keyof typeof notifications.email] 
                              ? 'bg-primary-500' 
                              : 'bg-gray-300'
                          }`}></div>
                          <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            notifications.email[item.id as keyof typeof notifications.email] 
                              ? 'transform translate-x-4' 
                              : ''
                          }`}></div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">In-App Notifications</h3>
                <div className="space-y-4">
                  {[
                    { id: 'weeklyReport', label: 'Weekly Financial Report', description: 'Get a summary of your financial activity every Sunday' },
                    { id: 'newImport', label: 'New Import Completed', description: 'Receive a notification when your bank statement import is processed' },
                    { id: 'budgetAlert', label: 'Budget Alerts', description: 'Be notified when you exceed or are close to exceeding your budget limits' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={notifications.app[item.id as keyof typeof notifications.app]}
                            onChange={() => handleToggleNotification('app', item.id)}
                          />
                          <div className={`block w-10 h-6 rounded-full ${
                            notifications.app[item.id as keyof typeof notifications.app] 
                              ? 'bg-primary-500' 
                              : 'bg-gray-300'
                          }`}></div>
                          <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            notifications.app[item.id as keyof typeof notifications.app] 
                              ? 'transform translate-x-4' 
                              : ''
                          }`}></div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
              <CardDescription>Manage your email communication settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Product Updates</div>
                      <div className="text-sm text-gray-500">
                        Receive emails about new features and improvements
                      </div>
                    </div>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="block w-10 h-6 rounded-full bg-primary-500"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform translate-x-4"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Tips & Tutorials</div>
                      <div className="text-sm text-gray-500">
                        Get helpful advice to make the most of Moneta.ai
                      </div>
                    </div>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="block w-10 h-6 rounded-full bg-primary-500"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform translate-x-4"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Marketing Communications</div>
                      <div className="text-sm text-gray-500">
                        Receive special offers and promotions
                      </div>
                    </div>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="block w-10 h-6 rounded-full bg-gray-300"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                    </div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;