'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, User, Eye, EyeOff, Leaf, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { adminConfig } from '@/lib/config';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = await login(username, password);
    
    if (success) {
      router.push('/admin/dashboard');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c1a768 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/20 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-2xl font-serif text-white mb-1">{adminConfig.loginTitle}</h1>
          <p className="text-white/50 text-sm">{adminConfig.loginSubtitle}</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {adminConfig.usernameLabel}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {adminConfig.passwordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gold-500 text-page rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-page/30 border-t-page rounded-full animate-spin" />
              ) : (
                <>
                  {adminConfig.loginButtonText}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gold-500/10 rounded-xl">
            <p className="text-gold-500 text-sm text-center">
              <span className="font-medium">Demo:</span> Username: &quot;admin&quot; | Password: &quot;greensprout2025&quot;
            </p>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-white/40 hover:text-white text-sm transition-colors"
          >
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
