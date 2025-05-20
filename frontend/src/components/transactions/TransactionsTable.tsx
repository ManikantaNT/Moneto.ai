import { ArrowDown, ArrowUp, ChevronsUpDown, Filter, Download } from 'lucide-react';
import Button from '../ui/Button';
import { useState } from 'react';
import { format } from 'date-fns';

interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  account: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  const [sortBy, setSortBy] = useState<keyof Transaction>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const handleSort = (column: keyof Transaction) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('desc');
    }
  };
  
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === 'date') {
      return sortDirection === 'asc' 
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    }
    
    if (sortBy === 'amount') {
      return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
    
    // String comparison for other fields
    const aValue = String(a[sortBy]).toLowerCase();
    const bValue = String(b[sortBy]).toLowerCase();
    
    return sortDirection === 'asc'
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  
  const SortIcon = ({ column }: { column: keyof Transaction }) => {
    if (sortBy !== column) {
      return <ChevronsUpDown size={16} className="opacity-30" />;
    }
    
    return sortDirection === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />;
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between p-4 border-b border-gray-200">
        <div className="text-lg font-semibold">All Transactions</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" leftIcon={<Filter size={16} />}>
            Filter
          </Button>
          <Button variant="outline" size="sm" leftIcon={<Download size={16} />}>
            Export
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
            <tr>
              <th 
                className="px-4 py-3 text-left cursor-pointer"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">
                  <span>Date</span>
                  <span className="ml-1">
                    <SortIcon column="date" />
                  </span>
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer"
                onClick={() => handleSort('description')}
              >
                <div className="flex items-center">
                  <span>Description</span>
                  <span className="ml-1">
                    <SortIcon column="description" />
                  </span>
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center">
                  <span>Category</span>
                  <span className="ml-1">
                    <SortIcon column="category" />
                  </span>
                </div>
              </th>
              <th 
                className="px-4 py-3 text-right cursor-pointer"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center justify-end">
                  <span>Amount</span>
                  <span className="ml-1">
                    <SortIcon column="amount" />
                  </span>
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer"
                onClick={() => handleSort('account')}
              >
                <div className="flex items-center">
                  <span>Account</span>
                  <span className="ml-1">
                    <SortIcon column="account" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => (
              <tr 
                key={transaction.id} 
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-sm">
                  {format(transaction.date, 'MMM d, yyyy')}
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{transaction.description}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-4 py-3 text-sm font-medium text-right ${
                  transaction.amount < 0 ? 'text-gray-900' : 'text-success-600'
                }`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {transaction.account}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">{transactions.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Button variant="ghost" size="sm" className="px-2 py-2 rounded-l-md border border-gray-300">
                Previous
              </Button>
              <Button variant="ghost" size="sm" className="px-4 py-2 border border-gray-300 bg-primary-50 text-primary-600">
                1
              </Button>
              <Button variant="ghost" size="sm" className="px-4 py-2 border border-gray-300">
                2
              </Button>
              <Button variant="ghost" size="sm" className="px-4 py-2 border border-gray-300">
                3
              </Button>
              <Button variant="ghost" size="sm" className="px-2 py-2 rounded-r-md border border-gray-300">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;