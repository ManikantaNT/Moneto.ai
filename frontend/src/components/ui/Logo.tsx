import { Activity } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo = ({ className = 'h-8', iconOnly = false }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Activity className="text-accent-400 mr-2" size={24} />
      {!iconOnly && <span className="font-bold text-white text-lg tracking-tight">Moneta.ai</span>}
    </div>
  );
};