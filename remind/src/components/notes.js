import React, {useEffect, useState} from "react";
import {notesRef, removeNote, getDetailnote} from '../firebase/firestore';
import Modal from "./modal";
import swal from 'sweetalert';
import remove from '../img/remove.png'
import edit from '../img/edit.png'
import "./styles/notes.css";

function Notes (user) {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const userValue= Object.values(user.user).toString();
    // const [updTitle, setUpdTitle] =useState(title);
    // const [updNote, setUpdNote] = useState(note);
    useEffect(() => {
        const getNotes =  () => {  
          notesRef.orderBy('date','desc').onSnapshot((snapshot) => {
              let docs = [];
              snapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
              });
             
              setNotes(docs)
            })
          };
        getNotes();
      }, []);
    
    
      const alertRemove =(id) => {
        swal({
          title: "¿Deseas eliminar esta nota?",
          text: "No se podrá recuperar el contenido",
          icon: "warning",
          buttons:["No","Sí"]
        }).then(confirm => {
          if(confirm){
            swal({text:"Se ha eliminado nota",
              icon:"success", timer:"800"});
            removeNote(id);
          }
        });
     }
    
     const editModal = async(id, title, note) => {
      await getDetailnote(id).then((doc) => {
        if (doc.exists) {
          const noteContent= doc.data(id).note
            console.log("Document data:", noteContent);
        }
      })
       setShowModal((visible) => !visible);
       console.log(id, title, note)
     }
      
return (
    <div className="div-notes">
        {notes.map((note) => 
        userValue=== note.user?
        (
            <section className="content-note" key={note.id} >
                <h2 className="title-note">{note.title.toUpperCase()}</h2>
                <p className="text-note">{note.note}</p>
              <div className="content-delete">
              <small className="date">Modificado:{note.date.toDate().toLocaleString()}</small>
                <img onClick={()=>alertRemove(note.id)}
                src={remove} alt="delete-note" className="icon-remove" />
                <img onClick={()=>editModal(note.id, note.title, note.note)}
                src={edit} alt="edit-note" className="icon-edit"/>
              </div>
                {showModal && <Modal
                 showModal={showModal} 
                 setShowModal={setShowModal} 
                 user={user}
                 mood='edit'
                 id={note.id}
                 note={note.note}
                 title={note.title}
                />}
            </section>

  ): null
  )}
        </div>
)
}
export default Notes