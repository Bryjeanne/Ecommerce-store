import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Fresh Produce",
    description: "Fruits, vegetables, and herbs",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/fresh-produce",
  },
  {
    id: 2,
    name: "Grains & Cereals",
    description: "Rice, beans, wheat, and more",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/grains-cereals",
  },
  {
    id: 3,
    name: "Snacks & Treats",
    description: "Chips, cookies, and confectionery",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/snacks-treats",
  },
  {
    id: 4,
    name: "Beverages",
    description: "Soft drinks, juices, and water",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/beverages",
  },
  {
    id: 5,
    name: "Dairy & Eggs",
    description: "Milk, cheese, yogurt, and eggs",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/dairy-eggs",
  },
  {
    id: 6,
    name: "Spices & Seasonings",
    description: "Local and international spices",
    image: "/placeholder.svg?height=200&width=300",
    href: "/categories/spices-seasonings",
  },
]

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of food categories and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                    <span className="text-4xl">🥬</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
