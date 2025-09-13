import {ProductsByCategory, SingleProduct} from './products.types'
import {makeSlug} from '../utils/slug.utils'

export const extractCategoriesFromProductsCollection = (data: SingleProduct[]) => {
  return data.reduce<ProductsByCategory>((acc, el) => {
    const categoryConvertedToSlug = makeSlug(el.category)
    if (Array.isArray(acc[el.category])) {
      acc[categoryConvertedToSlug].push(el)
    } else {
      acc[categoryConvertedToSlug] = [el]
    }
    return acc
  }, {})
}
