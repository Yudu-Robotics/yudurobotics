import React from 'react'

const ProductTag:React.FC<{ title: string }> = ({title}) => {
  return (
    <div className='bg-green-100 rounded-2xl text-sm border font-medium border-green-500 font-body text-green-900 w-12 p-1 text-center'>{title}</div>
  )
}

export default ProductTag