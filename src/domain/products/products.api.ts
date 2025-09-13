import {ProductsByCategory} from './products.types'
import {getAllProducts_IO} from './productsIO.api'
import {extractCategoriesFromProductsCollection} from './products.utils'
import {reportIssue} from '../../application/error-handler/errorHandler.api'

export const getAllProductsByCategory = async (): Promise<ProductsByCategory> => {
  const categories = new Promise<ProductsByCategory>((resolve, reject) =>
    getAllProducts_IO(
      undefined,
      async (response) => {
        const remappedProducts = extractCategoriesFromProductsCollection(response)
        resolve(remappedProducts)
      },
      async (error) => {
        reportIssue('getAllProductsByCategory', error)
        reject(error)
      }))
  return await categories
}
