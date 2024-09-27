import { db } from './secrets';
/*
const db = firebase.firestore();
export const getData = () => db.collection('publicaciones')
  .set();
  export const post = (texto) => {
    db.collection('publicaciones').add({
      
      texto,
    })
      .then(() => {
        console.log('Se ha publicado');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
    */

 
    // mandar objeto a firebase aqui

    export const GuardarNota = (texto) => db.collection('publicaciones').doc().set({
      texto,
    })
      
     // firebase.database().ref('publicaciones').set({texto});
      
      
   


   
    