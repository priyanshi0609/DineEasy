import {slots} from "../store/restaurants"
import {doc,collection, setDoc} from "firebase/firestore"
import { db } from "./firebaseConfig";


const restaurantData = slots;

const uploadData =async()=>{
    try{
        for(let i=0; i<restaurantData.length; i++){
            const restaurant= restaurantData[i];
            const docRef=doc(collection(db,"slots"),`slots_${i+1}`);
            await setDoc(docRef, restaurant)
        }
        console.log("Data uploaded successfully"); 
    }

   catch(e){
        console.error("Error uploading data: ", e);
   } 

}

export default uploadData;
