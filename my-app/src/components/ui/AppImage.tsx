'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    [key: string]: any;
}

function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src || '');
    const [isLoading, setIsLoading] = useState(src ? true : false);
    const [hasError, setHasError] = useState(!src);

    // Sync state if src changes
    useEffect(() => {
        setImageSrc(src || '');
        setIsLoading(src ? true : false);
        setHasError(!src);
    }, [src]);

    // More reliable external URL detection
    const isExternal = typeof imageSrc === 'string' && (imageSrc.startsWith('http://') || imageSrc.startsWith('https://'));
    const isLocal = typeof imageSrc === 'string' && (imageSrc.startsWith('/') || imageSrc.startsWith('./') || imageSrc.startsWith('data:'));

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const commonClassName = `${className} ${isLoading ? 'animate-pulse bg-slate-800' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;

    if (hasError || !imageSrc) {
        return (
            <div 
                className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-slate-400 select-none text-center p-6 rounded-xl ${fill ? 'absolute inset-0 w-full h-full' : ''} ${className}`}
                style={!fill ? { width: width || '100%', height: height || 240 } : {}}
                onClick={onClick}
                {...props}
            >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/50 text-indigo-400 mb-3 shadow-lg shadow-indigo-500/10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">SYSTEM ARCHITECTURE</span>
                <span className="text-xs text-slate-400 font-medium max-w-[85%] truncate mt-1.5">{alt || 'Production System Card'}</span>
            </div>
        );
    }

    // For external URLs or when in doubt, use regular img tag
    if (isExternal && !isLocal) {
        const imgStyle: React.CSSProperties = {};

        if (width) imgStyle.width = width;
        if (height) imgStyle.height = height;

        if (fill) {
            return (
                <div className={`relative ${className}`} style={{ width: width || '100%', height: height || '100%' }}>
                    <img
                        src={imageSrc}
                        alt={alt}
                        className={`${commonClassName} absolute inset-0 w-full h-full object-cover`}
                        onError={handleError}
                        onLoad={handleLoad}
                        onClick={onClick}
                        style={imgStyle}
                        {...props}
                    />
                </div>
            );
        }

        return (
            <img
                src={imageSrc}
                alt={alt}
                className={commonClassName}
                onError={handleError}
                onLoad={handleLoad}
                onClick={onClick}
                style={imgStyle}
                {...props}
            />
        );
    }

    // For local images and data URLs, use Next.js Image component
    const imageProps = {
        src: imageSrc,
        alt,
        className: commonClassName,
        priority,
        quality,
        placeholder,
        blurDataURL,
        unoptimized: true,
        onError: handleError,
        onLoad: handleLoad,
        onClick,
        ...props,
    };

    if (fill) {
        return (
            <div className={`relative ${className}`}>
                <Image
                    {...imageProps}
                    fill
                    sizes={sizes || '100vw'}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            width={width || 400}
            height={height || 300}
        />
    );
}

export default AppImage;