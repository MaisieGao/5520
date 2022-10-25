import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import{firestore} from './firebase-setup'

export const writeToDBForImportant = async(data) =>{
    try{
        await addDoc(collection(firestore,'ImportantExpense'),data)
    }catch(err){
        console.log(err)
    }
}
export async function deleteFromDBForImportant(key){
    try{
        await deleteDoc(doc(firestore,'ImportantExpense',key))
    }catch(err){
        console.log(err)
    }
}