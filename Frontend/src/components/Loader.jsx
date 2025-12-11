import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loader({ text = "Loading...", fullScreen = false }) {
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-10 w-10 animate-spin text-cyan-600" />
                    <p className="text-sm font-medium text-slate-600 animate-pulse">{text}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-600" />
            <p className="text-sm text-slate-500">{text}</p>
        </div>
    );
}
