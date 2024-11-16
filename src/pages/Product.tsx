import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product as ProductType } from '@/lib/types';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Leaf } from 'lucide-react';

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-green-800">{product.title}</h1>
          <div className="flex items-center space-x-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">{product.category}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>{product.rating.rate} ({product.rating.count} reviews)</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-green-700">
              ${product.price}
            </span>
            <Button
              onClick={() => addToCart(product)}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}