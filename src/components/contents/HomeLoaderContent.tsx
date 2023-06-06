import React, { JSX,  useState, useEffect } from 'react';
import HomeContent from "@/components/contents/HomeContent";

interface LoadingPageProps {
    message: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ message }): JSX.Element => {
    const rippleStyle: React.CSSProperties = {
        display: 'inline-block',
        position: 'relative',
        width: '80px',
        height: '80px',
    };

    const rippleCircleStyle: React.CSSProperties = {
        position: 'absolute',
        border: '4px solid #e5e7eb',
        opacity: '1',
        borderRadius: '50%',
        animation: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
    };

    const rippleCircleStyle2: React.CSSProperties = {
        animationDelay: '-0.5s',
        position: 'absolute',
        border: '4px solid #e5e7eb',
        opacity: '1',
        borderRadius: '50%',
        animation: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div style={rippleStyle} className="lds-ripple">
                <div style={rippleCircleStyle}></div>
                <div style={rippleCircleStyle2}></div>
            </div>
            <p className="text-gray-500">{message}</p>
            <style>
                {`
                  @keyframes lds-ripple {
                    0% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 1;
                    }
                    100% {
                      top: 0;
                      left: 0;
                      width: 72px;
                      height: 72px;
                      opacity: 0;
                    }
                  }
                `}
            </style>
        </div>
    );
};


const HomeLoaderContent: React.FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingPage message="Connecting..." />
            ) : (
                <HomeContent />
            )}
        </div>
    );
};

export default HomeLoaderContent;
