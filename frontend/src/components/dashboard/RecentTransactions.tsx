import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { ArrowUpRight, ShoppingCart, CoffeeIcon, Zap, Car, Home } from 'lucide-react';
import { format } from 'date-fns';

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  icon: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    id: 't1',
    date: new Date(2023, 5, 15),
    description: 'Whole Foods Market',
    amount: -127.35,
    category: 'Groceries',
    icon: <ShoppingCart className="h-4 w-4 text-primary-500" />,
  },
  {
    id: 't2',
    date: new Date(2023, 5, 14),
    description: 'Starbucks',
    amount: -4.95,
    category: 'Dining',
    icon: <CoffeeIcon className="h-4 w-4 text-accent-500" />,
  },
  {
    id: 't3',
    date: new Date(2023, 5, 14),
    description: 'Electric Company',
    amount: -82.50,
    category: 'Utilities',
    icon: <Zap className="h-4 w-4 text-warning-500" />,
  },
  {
    id: 't4',
    date: new Date(2023, 5, 13),
    description: 'Uber',
    amount: -24.15,
    category: 'Transportation',
    icon: <Car className="h-4 w-4 text-gray-600" />,
  },
  {
    id: 't5',
    date: new Date(2023, 5, 1),
    description: 'Apartment Rent',
    amount: -1800,
    category: 'Housing',
    icon: <Home className="h-4 w-4 text-secondary-500" />,
  },
];

const RecentTransactions = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">View All</button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gray-100 mr-3">
                  {transaction.icon}
                </div>
                <div>
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span>{format(transaction.date, 'MMM d')}</span>
                    <span className="mx-1">•</span>
                    <span>{transaction.category}</span>
                  </div>
                </div>
              </div>
              <div className={`text-sm font-semibold ${transaction.amount < 0 ? 'text-gray-800' : 'text-success-600'}`}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;