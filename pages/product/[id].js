import Header from "@/components/Header";
import Center from "@/components/Center";
import Title from "@/components/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";


export default function ProductPage({product}) {
    
    return(
        <>
        <Header/>
        <Center>

        <div class=" my-10 w-full max-w-6xl rounded-2xl bg-white shadow-lg p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                <ProductImages images={product.images} />
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5"> {product.title}</h1>
                    <p class="text-sm">{product.description.slice(0,100)}...</p>
                </div>
                <div className="flex items-center">
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <FlyingButton main  _id={product?._id} src={product?.images?.[0]}>
                                <CartIcon/>Add to cart
                        </FlyingButton>
                    </div>
                </div>
            </div>
        </div>

        <hr className="mt-20 mb-10"/>

        <div class="">
                    <h1 class="font-bold uppercase text-2xl mb-5">Description </h1>
                    <p class="text-lg mb-5">{product.description}</p>
        </div>

    </div>


    <ProductReviews product={product}/>

    </Center>
    <Footer/>     

        </>
    );
}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return{
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}