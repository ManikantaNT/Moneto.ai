import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { ArrowUpRight, ShoppingCart, Home, CoffeeIcon, Car } from 'lucide-react';

const categories = [
  {
    name: 'Groceries',
    icon: <ShoppingCart className="h-5 w-5 text-primary-500" />,
    amount: 1250,
    trend: +2.5,
  },
  {
    name: 'Rent',
    icon: <Home className="h-5 w-5 text-secondary-500" />,
    amount: 1800,
    trend: 0,
  },
  {
    name: 'Dining',
    icon: <CoffeeIcon className="h-5 w-5 text-accent-500" />,
    amount: 650,
    trend: -5.3,
  },
  {
    name: 'Transportation',
    icon: <Car className="h-5 w-5 text-gray-500" />,
    amount: 480,
    trend: +1.2,
  },
];

const TopCategories = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Top Spending Categories</CardTitle>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">View All</button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gray-100 mr-3">
                  {category.icon}
                </div>
                <div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-gray-500">
                    {category.trend > 0 ? (
                      <span className="flex items-center text-error-500">
                        <ArrowUpRight className="inline h-3 w-3 mr-1" />
                        {category.trend}% this month
                      </span>
                    ) : category.trend < 0 ? (
                      <span className="flex items-center text-success-500">
                        <ArrowUpRight className="inline h-3 w-3 mr-1 rotate-180" />
                        {Math.abs(category.trend)}% this month
                      </span>
                    ) : (
                      <span className="text-gray-500">No change</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold">${category.amount}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 rounded-lg bg-gray-50 p-3">
          <div className="text-sm font-medium mb-1">Spending Insights</div>
          <div className="text-xs text-gray-600">
            Your grocery spending is 12% higher than average. Consider reviewing your shopping habits.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCategories;