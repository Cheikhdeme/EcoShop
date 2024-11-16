import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useStore } from '@/lib/store';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  const cart = useStore((state) => state.cart);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-green-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-green-800">EcoShop</span>
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            {itemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}