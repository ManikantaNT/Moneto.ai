import { Card, CardContent } from '../ui/Card';
import { FileCheck, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import Button from '../ui/Button';

interface ProcessingSummaryProps {
  fileName: string;
  status: 'success' | 'error' | 'warning' | 'processing';
  transactionsCount?: number;
  dateRange?: string;
  errorMessage?: string;
  warningMessage?: string;
  onReview?: () => void;
  onRetry?: () => void;
}

const ProcessingSummary = ({
  fileName,
  status,
  transactionsCount,
  dateRange,
  errorMessage,
  warningMessage,
  onReview,
  onRetry,
}: ProcessingSummaryProps) => {
  const statusIcons = {
    success: <FileCheck className="h-5 w-5 text-success-500" />,
    error: <AlertCircle className="h-5 w-5 text-error-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-warning-500" />,
    processing: (
      <svg className="animate-spin h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    ),
  };

  const statusColors = {
    success: 'bg-success-50 border-success-200',
    error: 'bg-error-50 border-error-200',
    warning: 'bg-warning-50 border-warning-200',
    processing: 'bg-gray-50 border-gray-200',
  };

  const statusText = {
    success: 'Successfully processed',
    error: 'Error processing file',
    warning: 'Processed with warnings',
    processing: 'Processing file...',
  };

  return (
    <Card className={`${statusColors[status]} border`}>
      <CardContent className="flex items-start p-4">
        <div className="mr-4 mt-1">
          {statusIcons[status]}
        </div>
        
        <div className="flex-1">
          <div className="font-medium mb-1">{fileName}</div>
          <div className="text-sm">{statusText[status]}</div>
          
          {status === 'success' && (
            <div className="mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-1" />
                <span>{transactionsCount} transactions found</span>
              </div>
              {dateRange && (
                <div className="mt-1">
                  Date range: {dateRange}
                </div>
              )}
            </div>
          )}
          
          {status === 'error' && errorMessage && (
            <div className="mt-2 text-sm text-error-600">
              {errorMessage}
            </div>
          )}
          
          {status === 'warning' && warningMessage && (
            <div className="mt-2 text-sm text-warning-600">
              {warningMessage}
            </div>
          )}
        </div>
        
        <div className="ml-4">
          {status === 'success' && onReview && (
            <Button variant="primary" size="sm" onClick={onReview}>
              Review
            </Button>
          )}
          
          {status === 'error' && onRetry && (
            <Button variant="outline" size="sm" onClick={onRetry}>
              Retry
            </Button>
          )}
          
          {status === 'warning' && onReview && (
            <Button variant="primary" size="sm" onClick={onReview}>
              Review
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingSummary;