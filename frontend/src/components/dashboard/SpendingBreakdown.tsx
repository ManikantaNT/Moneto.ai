import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { TrendingDown, TrendingUp } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const getChartData = (): ChartData<'doughnut'> => {
  return {
    labels: ['Groceries', 'Utilities', 'Entertainment', 'Dining', 'Transportation', 'Other'],
    datasets: [
      {
        data: [1250, 850, 520, 650, 480, 350],
        backgroundColor: [
          '#3B82F6', // primary-500
          '#059669', // secondary-600
          '#F59E0B', // accent-500
          '#8B5CF6', // purple-500
          '#EC4899', // pink-500
          '#6B7280', // gray-500
        ],
        borderWidth: 0,
      },
    ],
  };
};

const SpendingBreakdown = () => {
  const chartData = getChartData();
  
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly Spending Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 relative">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-xs text-gray-500">Total</div>
            <div className="text-2xl font-bold">$4,100</div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          {chartData.labels?.map((label, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] as string }}
              ></div>
              <div className="text-sm">
                <div className="flex justify-between w-full">
                  <span className="font-medium">{label}</span>
                  <span>${chartData.datasets[0].data[index]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-success-50 mr-3">
                <TrendingDown className="h-4 w-4 text-success-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Spent 12% less</div>
                <div className="text-xs text-gray-500">than last month</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-primary-50 mr-3">
                <TrendingUp className="h-4 w-4 text-primary-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Top category</div>
                <div className="text-xs text-gray-500">Groceries (30%)</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingBreakdown;