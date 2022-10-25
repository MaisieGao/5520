import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import{firestore} from './firebase-setup'

export const writeToDatabase = async(data) =>{
    try{
        await addDoc(collection(firestore,'Expenses'),data)
    }catch(err){
        console.log(err)
    }
}
export async function deleteFromDB(key){
    try{
        await deleteDoc(doc(firestore,'Expenses',key))
    }catch(err){
        console.log(err)
    }
}