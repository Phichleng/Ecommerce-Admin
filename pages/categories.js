import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SpinnerLogo from "../components/SpinnerLogo";
import Spinner from "../components/Spinner";
import { ReactSortable } from "react-sortablejs";
import { useRouter } from "next/router";

export default function Categories() {
    const [editedCategory,setEditedCategory] = useState(null);
    const [name,setName] = useState('');
    const [images,setImages] = useState([]);
    const [parentCategory,setParentCategory] = useState('');
    const [categories,setCategories] = useState([]);
    const [properties,setProperties] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isUploading,setIsUploading] = useState(false);


    useEffect(() => {
        fetchCategories();
    }, []);
    function fetchCategories() {
        setIsLoading(true);
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
            setIsLoading(false);
        });
    }
    async function saveCategory(ev) {
        ev.preventDefault();
        const data = {
            name,
            images,
            parentCategory,
            properties:properties.map(p => ({
                name:p.name,
                values:p.values.split(','),
        })),
        };
        if (editedCategory) {
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        } else {
            await axios.post('/api/categories', data);
        }
        setName('');
        setImages('');
        setParentCategory('');
        setProperties([]);
        fetchCategories();
    }











    
    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }
    function updateImagesOrder(images) {
        setImages(images);
    }




    


    
    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setImages(category.images);
        setParentCategory(category.parent?._id);
        setProperties(
            category.properties.map(({name,values}) => ({
                name,
                values:values.join(',')
            }))

        );
    }

    function deleteCategory(category){
            Swal.fire({
                title: 'Are you sure?',
                text: `Do you want to delete ${category.name}?`,
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes, Delete",
                confirmButtonColor: '#d55',
                cancelButtonText: "Cancel",
                icon: 'warning'

            }).then(async result => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    const {_id} = category;
                    await axios.delete('/api/categories?_id='+_id);
                    fetchCategories();
            }
        });
    }

    function addProperty() {
        setProperties(prev => {
            return [...prev, {name:'',value:''}];
        });
    }

    function handlePropertyNameChange(index,property,newName) {
        setProperties(prev => {
            const properties = [...prev];
            properties[index].name = newName;
            return properties;
        });
    }

    function handlePropertyValuesChange(index,property,newValues) {
        setProperties(prev => {
            const properties = [...prev];
            properties[index].values = newValues;
            return properties;
        });
    }

    function removeProperty(indexToRemove) {
        setProperties(prev => {
            return [...prev].filter((p,pIndex) => {
                return pIndex !== indexToRemove;
            });
        });


























    }
    return (
        <Layout>
            <h1>Categories</h1>
            <label>
                {editedCategory
                 ? `Edit category ${editedCategory.name}` 
                 : 'Create new category'
                }</label>
            <form onSubmit={saveCategory}>
                <div className="flex gap-1">
                    <input 
                        type="text" 
                        placeholder={'Category name'}
                        onChange={ev => setName(ev.target.value)} 
                        value={name}/>
                    <select 
                            onChange={ev => setParentCategory(ev.target.value)}
                            value={parentCategory}>
                        <option value="">No parent category</option>
                        {categories.length > 0 && categories.map(category => (
                            // eslint-disable-next-line react/jsx-key
                        <option value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>







                <label>
                Photos
            </label>
            <div className="mb-2 flex flex-wrap gap-1">
                <ReactSortable list={images} className="flex flex-wrap gap-1" setList={updateImagesOrder}>
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200">
                            <img src={link} alt="" className="rounded-lg"/>
                        </div>
                    ))}
                </ReactSortable>
                {isUploading && (
                    <div className="h-24 flex items-center">
                        <Spinner />
                    </div>
                )}
                <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                    <div>
                        Add images
                    </div>
                    <input type="file" onChange={uploadImages} className="hidden"/>
                </label>
                {!images?.length && (
                    <div>No photos in this product</div>
                )}
            </div>



















                <div className="mb-2">
                    <label className="block">Properties</label>
                    <button 
                        onClick={addProperty}
                        type="button" 
                        className="border border-2 border-gray-300 p-2 rounded-md text-sm mb-2">Add new property
                    </button>
                    {properties.length > 0 && properties.map((property,index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex gap-1 mb-2">
                            <input type="text"
                                className="mb-0" 
                                value={property.name}
                                onChange={ev => handlePropertyNameChange(index,property,ev.target.value)} 
                                placeholder="property name (example: Size)"/>
                            <input type="text" 
                                className="mb-0"
                                value={property.values} 
                                onChange={ev => handlePropertyValuesChange(index,property,ev.target.value)}
                                placeholder="values, comma separated"/>
                            <button 
                                onClick={() => removeProperty(index)}
                                type="button"
                                className="btn-red">Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex gap-1">
                    {editedCategory && (
                    <button 
                    type="button" 
                    onClick={() => {
                        setEditedCategory(null); 
                        setName(''); 
                        setImages('');
                        setParentCategory('');
                        setProperties([]);
                    }} 
                    className="btn-default">Cancel</button>
                    )}
                    <button type="submit" className="btn-primary">Save</button>
                </div>
            </form>
            {!editedCategory && (
                 <table className="basic mt-4 text-left">
                 <thead>
                     <tr>
                         <td>Category name</td>
                         <td>Parent category</td>
                         <td>Action</td>
                     </tr>
                 </thead>
                 <tbody>
                 {isLoading && (
                     <tr>
                         <td colSpan={3}>
                             <div className="py-4">
                                 <SpinnerLogo fullWith={true}/>
                             </div>
                         </td>
                     </tr>
                 )}
                     {categories.length > 0 && categories.map(category => (
                         // eslint-disable-next-line react/jsx-key
                         <tr className="hover:bg-gray-200">


                            <td className="flex items-center">
                                <div><img className="w-20 h-20 rounded-full mr-5" src={category.images[0]} alt={category.name} /></div>
                                <div className="ml-2">{category.name.slice(0,30)}</div>
                            
                            </td>

                             <td>{category?.parent?.name}</td>
                             <td>
                                 <button onClick={() => editCategory(category)} className="text-blue-600 mr-1">
                                 
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" className="w5- h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                 </button>
                                 <button onClick={() => deleteCategory(category)} className="text-red-400">
                                 
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                 
                                 </button>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
            )}
        </Layout>
    );
}