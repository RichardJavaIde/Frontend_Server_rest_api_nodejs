
import { Link, Form, useActionData, type ActionFunctionArgs } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

export async function action({request} : ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
        let errors = "";
        if(Object.values(data).includes("")){
            errors = "Todos los campos son obligatorios";
            return errors;
        }
            if(data.length){
                return errors;
            }
    

    return {};
}

export default function Products() {
    const errors = useActionData()
    
    return ( 
        <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-black text-slate-500">Registrar Productos</h2>
              <Link 
                to="/"  
                className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500">
                Volver a Producto
              </Link>            
            </div>
            {errors && <ErrorMessage>{errors}</ErrorMessage>}
            <Form
    className="mt-10"  
    method="post"   
>
 
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="name"
        >Nombre Producto:</label>
        <input 
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
        />
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="price"
        >Precio:</label>
        <input 
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
        />
    </div>
    <input
      type="submit"
      className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
      value="Registrar Producto"
    />
    
    </Form>
        </>
    );
}