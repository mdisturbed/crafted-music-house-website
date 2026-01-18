import React from 'react';

interface OptimizedImageProps {
  src: string; // Path without extension (e.g., "/images/covers/rust-bucket-glory")
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

/**
 * OptimizedImage Component
 *
 * Automatically serves WebP with PNG fallback for browser compatibility
 * Assumes both .webp and .png versions exist in the same directory
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height
}) => {
  // Remove extension if provided
  const basePath = src.replace(/\.(png|jpg|jpeg|webp)$/i, '');

  return (
    <picture>
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img
        src={`${basePath}.png`}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default OptimizedImage;
