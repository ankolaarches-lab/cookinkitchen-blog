'use client';
import React, { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real app, this would send the email to an API route
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    return (
        <div className="my-16 bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-emerald-900/40 w-full max-w-4xl mx-auto">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-slate-900 opacity-50 z-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="text-left w-full md:w-1/2">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-4 border border-emerald-800">
                        Join the Club
                    </span>
                    <h3 className="font-serif text-3xl font-black text-white mb-3">
                        Get the Culinary Intelligence Dispatch
                    </h3>
                    <p className="font-lato text-emerald-50 leading-relaxed text-sm">
                        Join 50,000+ subscribers receiving our weekly teardown of the latest kitchen equipment, private deals, and testing protocols. No spam, just data.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    {subscribed ? (
                        <div className="bg-emerald-900/50 border border-emerald-500 rounded-2xl p-6 text-center animate-fade-in">
                            <svg className="w-10 h-10 text-emerald-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h4 className="font-serif text-xl font-bold text-white mb-1">Welcome Aboard</h4>
                            <p className="text-emerald-100 text-sm">You've successfully subscribed to our dispatch.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address..."
                                    required
                                    className="w-full bg-slate-950/80 border border-emerald-900/50 text-white rounded-xl px-4 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500 transition-all font-lato"
                                />
                                <svg className="absolute left-4 top-4 w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white font-bold text-sm tracking-wider uppercase py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
                            >
                                Subscribe Now
                            </button>
                            <p className="text-center text-slate-500 text-xs mt-2">
                                By subscribing, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
