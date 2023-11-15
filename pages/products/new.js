import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";



export default function NewProduct() {
    return (
        <div>
        <Layout>

            <h1>New Product</h1>
            <ProductForm />
            </Layout>
        </div>
    );
}