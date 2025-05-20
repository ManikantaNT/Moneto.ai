import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip as ChartTooltip, 
  Legend,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CreditCard, Wallet } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

const getChartData = (): ChartData<'bar'> => {
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [5200, 5300, 5150, 5400, 5250, 5900],
        backgroundColor: '#059669',
      },
      {
        label: 'Expenses',
        data: [4100, 4200, 4500, 4300, 4450, 4100],
        backgroundColor: '#3B82F6',
      },
    ],
  };
};

const IncomeExpenses = () => {
  const chartData = getChartData();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <Bar data={chartData} options={chartOptions} />
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-success-50 rounded-lg p-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-success-100 mr-3">
                <Wallet className="h-4 w-4 text-success-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-success-700">Income</div>
                <div className="text-lg font-bold text-success-700">$5,900</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-success-700">
              +12.3% from last month
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-primary-100 mr-3">
                <CreditCard className="h-4 w-4 text-primary-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-primary-700">Expenses</div>
                <div className="text-lg font-bold text-primary-700">$4,100</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-primary-700">
              -7.9% from last month
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Savings Rate</div>
            <div className="text-sm font-medium">30.5%</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-accent-500 h-2 rounded-full" style={{ width: '30.5%' }}></div>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            You're saving 30.5% of your income
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenses;