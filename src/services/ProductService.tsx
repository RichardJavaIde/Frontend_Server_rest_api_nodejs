import { DraftProductSchema } from "../types/indes";
import { safeParse } from "valibot";


export async function addProduct( data: any) {


 try {
     const result = safeParse(DraftProductSchema, 
        {name: data.name,
        price: Number(data.price)
     }
     );

        if (result.success) {

            console.log("Producto validado correctamente", result.output);
        } else {
            console.log("Error al validar el producto", result.issues);
            throw new Error("Error al validar el producto");
        }


 } catch (error) {
    console.error("Error al agregar el producto", error);
    throw new Error("Error al agregar el producto");
 }

}
          