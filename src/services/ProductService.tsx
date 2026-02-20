import { DraftProductSchema } from "../types/indes";
import { safeParse } from "valibot";
import axios from "axios";

export async function addProduct( data: any) {


 try {
     const result = safeParse(DraftProductSchema, 
        {name: data.name,
        price: Number(data.price)
     }
     );

        if (result.success) {
            const url = import.meta.env.VITE_API_URL + "/products";
            const {data} = await axios.post(url, 
            {name: result.output.name,
            price: result.output.price
         }
            );
            //console.log("Producto validado correctamente", result.output);
        } else {
            //console.log("Error al validar el producto", result.issues);
            throw new Error("Error al validar el producto");
        }


 } catch (error) {
   // console.error("Error al agregar el producto", error);
    throw new Error("Error al agregar el producto");
 }

}
          