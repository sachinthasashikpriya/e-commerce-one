import React, { createContext, useState, ReactNode } from "react";

// Define types for the context
interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
}

interface ShopContextType {
  all_product: Product[];
  // Add other context values if necessary
}

export const ShopContext = createContext<ShopContextType>({
  all_product: [], // Default value
});


export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [all_product, setAllProduct] = useState<Product[]>([
    // Your products data here
  ]);

  return (
    <ShopContext.Provider value={{ all_product }}>
      {children}
    </ShopContext.Provider>
  );
};
