import React from 'react';

interface TickerProps {
    messages: string[];
    className?: string;
}

const Ticker: React.FC<TickerProps> = ({ messages, className = '' }) => {
    const tickerContent = messages.join(' • ');

    return (
        <div className={`retro-section-dark overflow-hidden py-4 ${className}`}>
            <div className="ticker whitespace-nowrap">
                <span className="inline-block px-4 text-sm font-numeric uppercase tracking-wide">
                    {tickerContent} • {tickerContent} • {tickerContent}
                </span>
            </div>
        </div>
    );
};

export default Ticker;