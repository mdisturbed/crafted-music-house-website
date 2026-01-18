import React, { useState } from 'react';
import { Lock, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (password: string) => boolean;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (success) {
      setPassword('');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-cmh-mahogany/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white p-8 rounded-sm shadow-2xl w-full max-w-md animate-fade-in border-t-4 border-cmh-gold">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cmh-mahogany transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
            <div className="w-12 h-12 bg-cmh-mahogany text-cmh-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={20} />
            </div>
            <h2 className="text-2xl font-serif text-cmh-mahogany">Admin Access</h2>
            <p className="text-sm text-gray-500 mt-2">Enter the secure passkey to edit site content.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Input 
                    type="password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                    }}
                    placeholder="Enter passkey..."
                    className="text-center text-lg tracking-widest placeholder:tracking-normal bg-cmh-cream"
                    autoFocus
                />
            </div>
            
            {error && (
                <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest animate-pulse">
                    Access Denied. Incorrect Passkey.
                </p>
            )}

            <Button 
                type="submit" 
                variant="gold"
                className="w-full gap-2"
            >
                Unlock <ArrowRight size={16} />
            </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;