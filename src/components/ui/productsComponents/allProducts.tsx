'use client'
import React from 'react'
import ProductCard from './product-card'
import { products } from '@/data/mockData'
import CustomHeading from '../common/custom-heading-props'

interface Products {
    name: string
    description: string
    image: string
    link: string
    type: string
    category: string
}

interface AllProductsComponentProps {
    products: Products[]
}

const AllProductsComponent = () => {
    const hardwareProducts = products.filter(
        (product) => product.type === 'Hardware'
    )
    const softwareProducts = products.filter(
        (product) => product.type === 'Software'
    )
    const CurriculumProducts = products.filter(
        (product) => product.type === 'Curriculum'
    )

    return (
        <div className="container mx-auto p-4">
            {/* Custom Heading */}
            <CustomHeading title="Hardware" />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {hardwareProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            <CustomHeading title="Software" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {softwareProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <CustomHeading title="Curriculum" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {CurriculumProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProductsComponent
