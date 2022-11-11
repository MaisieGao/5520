import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import GoalDetail from "../components/GoalDetail";
import{auth, firestore} from './firebase-setup'

export const writeToDatabase = async(data) =>{
    try{
        const docRef = await addDoc(collection(firestore,'Goals'),{
            ...data,
            user: auth.currentUser.uid
        })
    }catch(err){
        console.log(err)
    }
}
export async function deleteFromDB(key){
    try{
        await deleteDoc(doc(firestore,'Goals',key))
    }catch(err){
        console.log(err)
    }
}