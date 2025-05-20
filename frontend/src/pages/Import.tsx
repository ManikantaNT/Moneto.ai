import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import FileUploader from '../components/import/FileUploader';
import ImportSteps from '../components/import/ImportSteps';
import ProcessingSummary from '../components/import/ProcessingSummary';
import Button from '../components/ui/Button';
import { Info, AlertCircle } from 'lucide-react';

const Import = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [processedFiles, setProcessedFiles] = useState<{
    fileName: string;
    status: 'success' | 'error' | 'warning' | 'processing';
    transactionsCount?: number;
    dateRange?: string;
    errorMessage?: string;
    warningMessage?: string;
  }[]>([]);
  
  const handleFilesAccepted = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    
    // Simulate processing
    setTimeout(() => {
      setStep(2);
      
      // Mock processing results
      const processed = acceptedFiles.map((file, index) => {
        // Randomly assign status for demo purposes
        const statusOptions: ('success' | 'error' | 'warning')[] = ['success', 'error', 'warning'];
        const randomStatus = statusOptions[Math.floor(Math.random() * (index === 0 ? 1 : 3))];
        
        return {
          fileName: file.name,
          status: randomStatus,
          transactionsCount: randomStatus === 'success' ? Math.floor(Math.random() * 100) + 20 : undefined,
          dateRange: randomStatus === 'success' ? 'May 1, 2023 - May 31, 2023' : undefined,
          errorMessage: randomStatus === 'error' ? 'Could not read the PDF format. Please make sure it\'s not password protected.' : undefined,
          warningMessage: randomStatus === 'warning' ? 'Some transactions could not be properly extracted. Please review manually.' : undefined,
        };
      });
      
      setProcessedFiles(processed);
    }, 2000);
  };
  
  const handleReview = () => {
    setStep(3);
  };
  
  const handleImport = () => {
    setStep(4);
    
    // Simulate import completion
    setTimeout(() => {
      // In a real app, we would navigate to the transactions page or show a success message
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Import Bank Statements</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Import Wizard</CardTitle>
        </CardHeader>
        <CardContent>
          <ImportSteps currentStep={step} />
          
          {step === 1 && (
            <div className="mt-6">
              <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-6 flex items-start">
                <Info className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary-800">Tips for successful imports</h4>
                  <ul className="mt-2 text-sm text-primary-700 list-disc pl-5 space-y-1">
                    <li>Make sure your PDF is not password-protected</li>
                    <li>Most major bank statement formats are supported</li>
                    <li>For best results, use monthly statements</li>
                    <li>Some hand-crafted or image-only PDFs may not extract properly</li>
                  </ul>
                </div>
              </div>
              
              <FileUploader onFilesAccepted={handleFilesAccepted} />
            </div>
          )}
          
          {step === 2 && (
            <div className="mt-6">
              <div className="space-y-4 mb-6">
                {processedFiles.map((file, index) => (
                  <ProcessingSummary
                    key={index}
                    fileName={file.fileName}
                    status={file.status}
                    transactionsCount={file.transactionsCount}
                    dateRange={file.dateRange}
                    errorMessage={file.errorMessage}
                    warningMessage={file.warningMessage}
                    onReview={handleReview}
                    onRetry={() => {}}
                  />
                ))}
              </div>
              
              {processedFiles.some(file => file.status === 'success') && (
                <div className="flex justify-end mt-6">
                  <Button onClick={handleReview}>Continue to Review</Button>
                </div>
              )}
            </div>
          )}
          
          {step === 3 && (
            <div className="mt-6">
              <div className="bg-success-50 border border-success-100 rounded-lg p-4 mb-6 flex items-start">
                <Info className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-success-800">Transactions Ready for Import</h4>
                  <p className="mt-1 text-sm text-success-700">
                    We've extracted {processedFiles.reduce((count, file) => 
                      count + (file.transactionsCount || 0), 0)} transactions from your statements.
                    Review them below before importing.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 font-medium">
                  Transaction Preview
                </div>
                <div className="divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50">
                      <div>
                        <div className="font-medium">{['Whole Foods', 'Amazon', 'Electric Company', 'Gas Station', 'Starbucks'][item-1]}</div>
                        <div className="text-sm text-gray-500">May {10 + item}, 2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">-${(Math.random() * 100 + 10).toFixed(2)}</div>
                        <div className="text-sm text-gray-500">
                          <select className="text-sm border-0 bg-transparent focus:ring-0 p-0">
                            <option>Groceries</option>
                            <option>Shopping</option>
                            <option>Dining</option>
                            <option>Utilities</option>
                            <option>Transportation</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-sm text-gray-500">
                  Showing 5 of {processedFiles.reduce((count, file) => 
                    count + (file.transactionsCount || 0), 0)} transactions
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                <Button onClick={handleImport}>Import Transactions</Button>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="mt-6 text-center py-8">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-success-100 mb-4">
                <Info className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Import Complete!</h3>
              <p className="text-gray-500 mb-6">
                We've successfully imported {processedFiles.reduce((count, file) => 
                  count + (file.transactionsCount || 0), 0)} transactions.
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button variant="outline">View Transactions</Button>
                <Button>Go to Dashboard</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {step < 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">
                  Having trouble importing your statements? Check our <a href="#" className="text-primary-600 hover:text-primary-700">guide</a> for 
                  supported banks and formats, or <a href="#" className="text-primary-600 hover:text-primary-700">contact support</a> for assistance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Import;