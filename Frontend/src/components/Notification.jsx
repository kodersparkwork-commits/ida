import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const addNotification = useCallback((type, message, duration = 5000) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, type, message }]);

        if (duration) {
            setTimeout(() => {
                removeNotification(id);
            }, duration);
        }
    }, []);

    const removeNotification = useCallback((id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);

    const notify = {
        success: (msg, duration) => addNotification('success', msg, duration),
        error: (msg, duration) => addNotification('error', msg, duration),
        info: (msg, duration) => addNotification('info', msg, duration),
    };

    return (
        <NotificationContext.Provider value={notify}>
            {children}
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-[9999] space-y-3 flex flex-col items-end pointer-events-none">
                {notifications.map(n => (
                    <div
                        key={n.id}
                        className={`
              pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border w-full max-w-sm transform transition-all duration-300 animate-in slide-in-from-right-full fade-in
              ${n.type === 'success' ? 'bg-white border-green-200 text-slate-800' : ''}
              ${n.type === 'error' ? 'bg-white border-red-200 text-slate-800' : ''}
              ${n.type === 'info' ? 'bg-white border-blue-200 text-slate-800' : ''}
            `}
                    >
                        {/* Icon */}
                        <div className={`p-1 rounded-full ${n.type === 'success' ? 'bg-green-100 text-green-600' : n.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                            {n.type === 'success' && <CheckCircle className="h-4 w-4" />}
                            {n.type === 'error' && <AlertCircle className="h-4 w-4" />}
                            {n.type === 'info' && <Info className="h-4 w-4" />}
                        </div>

                        <p className="text-sm font-medium flex-1">{n.message}</p>

                        <button
                            onClick={() => removeNotification(n.id)}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
}
