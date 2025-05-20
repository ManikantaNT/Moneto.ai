import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface FileUploaderProps {
  onFilesAccepted: (files: File[]) => void;
}

const FileUploader = ({ onFilesAccepted }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesAccepted(acceptedFiles);
  }, [onFilesAccepted]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 5,
  });

  return (
    <div 
      {...getRootProps()} 
      className={`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'}
        ${isDragReject ? 'border-error-500 bg-error-50' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 mb-4">
        {isDragReject ? (
          <AlertCircle className="h-6 w-6 text-error-500" />
        ) : (
          <Upload className="h-6 w-6 text-primary-600" />
        )}
      </div>
      
      {isDragReject ? (
        <div className="text-center">
          <p className="text-lg font-medium text-error-600">Unsupported file type</p>
          <p className="text-sm text-error-500 mt-1">Please upload only PDF bank statements</p>
        </div>
      ) : isDragActive ? (
        <div className="text-center">
          <p className="text-lg font-medium text-primary-600">Drop your files here</p>
          <p className="text-sm text-primary-500 mt-1">We'll process your bank statement right away</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">Drag & drop your bank statements</p>
          <p className="text-sm text-gray-500 mt-1 mb-4">or click to browse your files (PDF only)</p>
          <Button 
            variant="primary" 
            size="sm" 
            leftIcon={<File className="h-4 w-4" />}
            onClick={(e) => e.stopPropagation()}
          >
            Select Files
          </Button>
        </div>
      )}
      
      <div className="mt-6 text-xs text-gray-500">
        <p>Maximum 5 files, 20MB each</p>
        <p className="mt-1">We support statements from major banks including Chase, Bank of America, Wells Fargo, and more</p>
      </div>
    </div>
  );
};

export default FileUploader;