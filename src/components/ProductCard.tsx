import { Product } from '@/lib/types';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full p-4 transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2">
          <Leaf className="w-3 h-3 mr-1" />
          {product.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xl font-bold text-green-700">${product.price}</span>
          <Button
            onClick={() => navigate(`/product/${product.id}`)}
            variant="outline"
            className="flex-1 bg-green-600 hover:bg-green-700 "
          >
            <Eye className="w-4 h-4 mr-2 " />
            View Details
          </Button>
        </div>
        <Button
          onClick={() => addToCart(product)}
          variant="default"
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}