import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import SpendingBreakdown from '../components/dashboard/SpendingBreakdown';
import IncomeExpenses from '../components/dashboard/IncomeExpenses';
import TopCategories from '../components/dashboard/TopCategories';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import { ArrowUp, ArrowDown, TrendingUp, Wallet } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500">June 2023</span>
          <button className="p-1 rounded hover:bg-gray-100">
            <ArrowDown size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-primary-100">
                <Wallet className="h-6 w-6 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-success-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                12.5%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Current Balance</h3>
              <p className="text-2xl font-bold">$12,580</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-success-100">
                <ArrowUp className="h-6 w-6 text-success-600" />
              </div>
              <span className="text-sm font-medium text-success-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                8.2%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Income</h3>
              <p className="text-2xl font-bold">$5,900</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-primary-100">
                <ArrowDown className="h-6 w-6 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-success-500 flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" />
                4.3%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Expenses</h3>
              <p className="text-2xl font-bold">$4,100</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-accent-100">
                <TrendingUp className="h-6 w-6 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-success-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                2.5%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Savings Rate</h3>
              <p className="text-2xl font-bold">30.5%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingBreakdown />
        <IncomeExpenses />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCategories />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;