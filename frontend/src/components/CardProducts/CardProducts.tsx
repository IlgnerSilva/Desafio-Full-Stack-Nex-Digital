import axios from "axios"
import { useEffect, useState } from "react"

export default function CardProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:4000/products/searchAllProducts')
            .then(response => {
                setProducts(response.data)
            })
            
    }, [])
    return (
        <div className=" bg-white max-w-md my-2.5 mx-auto rounded-t-md p-2 mb-10">
            {products.map(val => {
                return (
                    <div key={val.id} className="mt-5 max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={val.imageURL}/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{val.name}</div>
                                <p className="text-gray-700 text-base">
                                    {val.description}
                                </p>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}