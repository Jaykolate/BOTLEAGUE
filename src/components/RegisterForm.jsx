import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { User, MapPin, Mail, CheckCircle2, RefreshCw } from 'lucide-react';
import { submitRegistration } from '../features/api';

export default function RegisterForm({ formType, label }) {
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', location: '', email: '', role: formType } });

  const mutation = useMutation({
    mutationFn: (data) => submitRegistration(data),
    onSuccess: (data) => {
      setSuccessData(data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 6000);
    },
  });

  const onSubmit = (data) => mutation.mutate({ ...data, role: formType });

  const displayTitle = label || {
    judge: 'Become a Judge',
    volunteer: 'Volunteer Registry',
    member: 'Community Member',
  }[formType] || 'Register Now';

  return (
    <div className="bg-cyber-card border border-cyber-border rounded-xl p-5 w-full flex flex-col">
      {/* Header */}
      <h4 className="font-title text-sm font-bold text-white uppercase tracking-widest mb-0.5">{displayTitle}</h4>
      <p className="text-[10px] text-cyber-muted mb-5 uppercase tracking-wide">Join our neural grid</p>

      {/* Success */}
      {success && (
        <div className="flex items-start space-x-2 bg-green-950/40 border border-green-500/40 p-3 rounded-lg text-[11px] text-green-400 mb-4">
          <CheckCircle2 className="flex-shrink-0 mt-0.5" size={16} />
          <div>
            <p className="font-bold uppercase tracking-wider text-[10px]">REGISTRATION SUCCESSFUL</p>
            <p className="mt-0.5 text-green-300/80">{successData?.message}</p>
            {successData?.registrationId && (
              <p className="mt-1 font-mono text-[10px] text-cyber-yellow">ID: {successData.registrationId}</p>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 flex-1">
        {/* Name */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-muted" size={14} />
            <input
              type="text"
              placeholder="Full Name"
              {...register('name', { required: 'Name required', minLength: { value: 2, message: 'Min 2 chars' } })}
              className={`w-full bg-cyber-bg border rounded pl-9 pr-3 py-2.5 text-cyber-text text-xs focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-primary' : 'border-cyber-border'}`}
            />
          </div>
          {errors.name && <p className="text-[10px] text-primary mt-1 font-semibold">{errors.name.message}</p>}
        </div>

        {/* Location */}
        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-muted" size={14} />
            <input
              type="text"
              placeholder="City / Location"
              {...register('location', { required: 'Location required' })}
              className={`w-full bg-cyber-bg border rounded pl-9 pr-3 py-2.5 text-cyber-text text-xs focus:outline-none focus:border-primary transition-colors ${errors.location ? 'border-primary' : 'border-cyber-border'}`}
            />
          </div>
          {errors.location && <p className="text-[10px] text-primary mt-1 font-semibold">{errors.location.message}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-muted" size={14} />
            <input
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
              })}
              className={`w-full bg-cyber-bg border rounded pl-9 pr-3 py-2.5 text-cyber-text text-xs focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-primary' : 'border-cyber-border'}`}
            />
          </div>
          {errors.email && <p className="text-[10px] text-primary mt-1 font-semibold">{errors.email.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="mt-2 w-full bg-primary hover:bg-primary-hover hover:shadow-neon-red text-white py-2.5 rounded font-title uppercase tracking-widest font-bold text-xs transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {mutation.isPending ? (
            <><RefreshCw size={13} className="animate-spin" /><span>Registering...</span></>
          ) : (
            <span>SIGN UP</span>
          )}
        </button>
      </form>
    </div>
  );
}
