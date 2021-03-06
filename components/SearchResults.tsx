import React from "react";
import { ProductItem } from "./ProductItem";
import { useMemo } from "react";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            onAddToWishlist={onAddToWishlist}
            product={product}
          />
        );
      })}
    </div>
  );
}
/**
 * 1 - Criar uma nova versão do component
 * 2 - Comparar com a versão anterior
 * 3 - Se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1- Pure Functional Components
 * 2- Renders too often
 * 3- Re-renders with same props
 * 4- Medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1- Cálculos pesados
 * 2- Igualdade referencial (quando se repassa uma informação a um component filho)
 */
