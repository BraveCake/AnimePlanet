import { getDocs, collection, addDoc } from "firebase/firestore"; 
import db from '../config/firebase.js'


export const findAll = async (collection_name) => {
    const doc_refs = await getDocs(collection(db, collection_name));

    const res = []

    doc_refs.forEach(todo => {
        res.push({
            id: todo.id, 
            ...todo.data()
        })
    })

    return res
}

export const Add = async (collection_name,data) => 
{
    try {
    await addDoc(collection(db,collection_name),{...data})
    }
    catch (e){
    console.log(e)
    }
}

