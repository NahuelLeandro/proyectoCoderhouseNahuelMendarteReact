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
    const querySnapshot = await getDocs(collection(db, "productos"));

    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
});

return items;
};

// Función para traer categorías en este momento repite las categorias
export const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));

    const categoryList = [];
    querySnapshot.forEach((doc) => {
        const categoria = doc.data().categoria;
        if (!categoryList.includes(categoria)) {
            categoryList.push(categoria);
        }
    });

    return categoryList;
};


export const getItemsByCategory =  async (categoria) => {
    
    const q = query(collection(db, "productos"), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({...doc.data() , id: doc.id })
    });
    return items;
}



export const getItem = async (id) => {
    
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return {...docSnap.data(), id: docSnap.id}
    } else {
        console.log("No such document!");
    }
}





export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
    
}