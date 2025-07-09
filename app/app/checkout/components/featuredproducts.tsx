import ProductCard from "./ProductCard"
import type { Product } from "../types"

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    description: "Locally grown fresh tomatoes, perfect for cooking",
    price: 1500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fresh Produce",
    inStock: true,
    rating: 4.5,
    reviews: 23,
  },
  {
    id: "2",
    name: "Premium Rice (5kg)",
    description: "High quality long grain rice, perfect for all meals",
    price: 8500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Grains & Cereals",
    inStock: true,
    rating: 4.8,
    reviews: 45,
  },
  {
    id: "3",
    name: "Plantain Chips",
    description: "Crispy and delicious plantain chips, locally made",
    price: 2000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks & Treats",
    inStock: true,
    rating: 4.3,
    reviews: 18,
  },
  {
    id: "4",
    name: "Fresh Orange Juice",
    description: "100% natural orange juice, no preservatives",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300",
    category: "Beverages",
    inStock: true,
    rating: 4.6,
    reviews: 32,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highest-rated food products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
