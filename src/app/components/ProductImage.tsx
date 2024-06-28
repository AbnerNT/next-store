'use client'
import { ProductType } from "@/types/ProductType"
import Image from "next/image"
import { useState } from "react"

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
}

export const ProductImage = ({ product, fill }: ProductImageProps) => {
  const [loading, setLoading] = useState(true);
  
  const handleLoad = () => {
    setLoading(false);
  };

  return fill ? (
    <Image 
      src={product.image}
      fill
      alt={product.title}
      className={`object-cover transition-all duration-700 ease-in-out ${
        loading ? 'scale-110 blur-3xl grayscale'
        : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={handleLoad}
    />
  ) : (
    <Image 
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className={`object-cover transition-all duration-700 ease-in-out ${
        loading ? 'scale-110 blur-3xl grayscale'
        : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={handleLoad}
    />
  );
}
