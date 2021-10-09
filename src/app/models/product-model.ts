// ionic generate > interface > /models/product-model
export interface ProductModel {
    // check this documentation https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
    id: number;
    name: string;
    categories: any[];
    description: string;
    images: any[];
    price: string;
    onSale: boolean;
    featured: boolean;
    salePrice: string;
    regularPrice: string;
    slug: string;
    stockQuantity: number;
    stockStatus: string;
    inCart?: number;
}
