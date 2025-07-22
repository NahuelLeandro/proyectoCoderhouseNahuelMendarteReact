import { 
    getFirestore, 
    collection,
    getDocs, 
    query, 
    where, 
    doc,
    getDoc,
    addDoc   
    } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Función para traer productos
export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));

    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
});

return items;
};

// Función para traer categorías
export const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));

    const categoryList = [];
    querySnapshot.forEach((doc) => {
        categoryList.push(doc.data().category);
    });

    return categoryList;
};


export const getItemsByCategory =  async (category) => {
    
    const q = query(collection(db, "items"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({...doc.data() , id: doc.id })
    });
    return items;
}



export const getItem = async (id) => {
    
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return {...docSnap.data(), id: docSnap.id}
    } else {
        console.log("No such document!");
    }
}





export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    
}