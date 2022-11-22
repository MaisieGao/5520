import { collection, addDoc, deleteDoc,setDoc,getDoc, doc } from "firebase/firestore"; 
import GoalDetail from "../components/GoalDetail";
import{auth, firestore} from './firebase-setup'

export async function saveUser(user){
    try{
        await setDoc(doc(firestore,'users',auth.currentUser.uid),user)
    }catch(err){
        console.log('save users',err)
    }
}
export async function getUser() {
    const docRef = doc(firestore, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
  
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
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