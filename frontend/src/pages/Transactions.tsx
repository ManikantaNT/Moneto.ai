import { useState } from 'react';
import TransactionsTable from '../components/transactions/TransactionsTable';
import { Card, CardContent } from '../components/ui/Card';
import { Filter, Calendar, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';

// Mock data
const mockTransactions = Array.from({ length: 20 }, (_, i) => {
  // Generate a date between 1-30 days ago
  const daysAgo = Math.floor(Math.random() * 30) + 1;
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  
  // Random amount between -2000 and 1000
  const amount = (Math.random() * 3000 - 2000).toFixed(2);
  
  const categories = [
    'Groceries', 'Dining', 'Transportation', 'Utilities', 
    'Housing', 'Entertainment', 'Shopping', 'Healthcare',
    'Travel', 'Education', 'Income'
  ];
  
  const descriptions = [
    'Whole Foods', 'Amazon', 'Uber', 'Netflix', 'Rent Payment',
    'Electric Bill', 'Gas Station', 'Starbucks', 'Target',
    'CVS Pharmacy', 'Payroll Deposit', 'Restaurant'
  ];
  
  const accounts = ['Checking', 'Savings', 'Credit Card'];
  
  return {
    id: `trans-${i+1}`,
    date,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    amount: Number(amount),
    account: accounts[Math.floor(Math.random() * accounts.length)],
  };
});

const Transactions = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Calendar size={16} />}
            rightIcon={<ChevronDown size={16} />}
          >
            Last 30 days
          </Button>
          
          <Button 
            variant={activeFilter === 'all' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setActiveFilter('all')}
          >
            All
          </Button>
          
          <Button 
            variant={activeFilter === 'expenses' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setActiveFilter('expenses')}
          >
            Expenses
          </Button>
          
          <Button 
            variant={activeFilter === 'income' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setActiveFilter('income')}
          >
            Income
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Filter size={16} />}
          >
            More Filters
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium text-gray-500">Total Transactions</div>
            <div className="text-2xl font-bold mt-1">{mockTransactions.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium text-gray-500">Total Expenses</div>
            <div className="text-2xl font-bold mt-1 text-primary-700">
              $
              {mockTransactions
                .filter(t => t.amount < 0)
                .reduce((sum, t) => sum + Math.abs(t.amount), 0)
                .toFixed(2)}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium text-gray-500">Total Income</div>
            <div className="text-2xl font-bold mt-1 text-success-700">
              $
              {mockTransactions
                .filter(t => t.amount > 0)
                .reduce((sum, t) => sum + t.amount, 0)
                .toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <TransactionsTable 
        transactions={
          activeFilter === 'expenses' 
            ? mockTransactions.filter(t => t.amount < 0)
            : activeFilter === 'income'
              ? mockTransactions.filter(t => t.amount > 0)
              : mockTransactions
        } 
      />
    </div>
  );
};

export default Transactions;