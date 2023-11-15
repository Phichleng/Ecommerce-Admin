import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import SpinnerLogo from "@/components/SpinnerLogo";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/PaginationUnit";

export default function Products() {
 


    const [products,setProducts] = useState([]);
    const [records,setRecords] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const pageSize = 5;

    ///
    const [searchInput,setSearchInput] = useState("");

    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/products').then(response => {
            setProducts(response.data);
            console.log("response.data",response.data)
            // setRecords(response.data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {

        const FilterFunction = (rec, word) => {
            var result = rec.filter(f => f.title.toLowerCase().includes(word))
            return result;
        }

        var resultFiltered = FilterFunction(products , searchInput)

        const paginatePost = paginate(resultFiltered, currentPage, pageSize);


        console.log("searchInput",searchInput)
        console.log("resultFiltered",resultFiltered)
        console.log("paginatePost",paginatePost)

        setRecords(paginatePost);
    }, [searchInput, products, currentPage, pageSize]);

    // const FilterFunction = (event) => {
    //     setRecords(orders.filter(f => f.name.toLowerCase().includes(event.target.value)))
    // }

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const onChangeInputSearch = (event) => {
        setSearchInput(event.target.value)
    }













    
    return (
        <Layout>
        <div className="flex justify-between items-center"> 
        
            <Link className="px-10 py-2  bg-indigo-600 rounded-lg text-white mt-2"  href={'/products/new'}>Add new product</Link>

            <input type="text" className="form-control w-3/12" onChange={onChangeInputSearch} placeholder="Search..." />

        </div>

            <table className="basic mt-8">
                <thead>
                    <tr>
                    <td>Product Name</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Stock</td>
                    <td>Action</td>
                    </tr>
                </thead>    
                <tbody>
                    {isLoading && (
                        <tr colSpan={5}>
                            <div className="py-4">
                                <SpinnerLogo fullWith={true}/>
                            </div>
                        </tr>
                    )}

                    {records.length > 0 && records.map(product => (
                        <tr key={product._id} className="hover:bg-gray-200">
                            <td className="flex items-center">
                                <div><img className="w-20 h-20 rounded-full mr-5" src={product.images[0]} alt={product.title} /></div>
                                <div className="ml-2">{product.title.slice(0,30)}</div>
                            
                            </td>
                            <td>{product.description.slice(0,120)}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td className={product.stock <= 0 ? 'text-red-400' : ''} >
                            {product.stock <= 0 ? 'Out of stock' : product.stock }
                            </td>
                            <td>
                            <div className="flex">
                                <Link className="text-green-600" href={'/products/view/'+product._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" className="w5- h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    
                                </Link>
                                <Link className="text-blue-600" href={'/products/edit/'+product._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" className="w5- h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    
                                </Link>
                                <Link className="text-red-400 " href={'/products/delete/'+product._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    
                                </Link>
                            </div>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination items={products.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
        </Layout>
    );
}



