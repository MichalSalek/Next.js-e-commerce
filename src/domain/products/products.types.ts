export type SingleProduct = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string // Image URL, example: 'http://example.com'
}

export type ProductsByCategory = Record<SingleProduct['category'], SingleProduct[]>
