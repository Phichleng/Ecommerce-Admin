import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import {WishedProduct} from "@/models/WishedProduct";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Setting} from "@/models/Setting";
import Footer from "@/components/Footer";
import SliderImage from "@/components/SliderImage";
import CategoriesPage from "@/components/CategoriesPage";
import HotSale from "@/components/HotSale";
import MapStoreLocation from "@/components/MapStoreLocation";


export default function HomePage({featuredProduct,newProducts,wishedNewProducts}){
    return(
        <div>
            <Header />
            <SliderImage/>
            <Featured product={featuredProduct}/>
            <CategoriesPage/>
            <NewProducts products={newProducts} wishedProducts={wishedNewProducts}/>
            <HotSale products={newProducts} wishedProducts={wishedNewProducts}/>
            <MapStoreLocation/>
            <Footer/>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    await mongooseConnect();
    const featuredProductSetting = await Setting.findOne({name:'featuredProductId'});
    const featuredProductId = featuredProductSetting.value;
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({stock: {$gt: 0}}, null, {sort: {'_id':-1}, limit:10});
    const session = await getServerSession(ctx.req, ctx.res, authOptions);
    const wishedNewProducts = session?.user
        ? await WishedProduct.find({
            userEmail: session.user.email,
            product: newProducts.map(p => p._id.toString()),
        })
        : [];
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
            wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
        },
    };
}