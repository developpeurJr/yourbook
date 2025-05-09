"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";



export default function Home() {
  const [inputBook, setinputBook] = useState("")
  const [book, setBook] = useState([])



  const [inputChp, setinputChp] = useState("")
  const [Chp, setChp] = useState([])
  function addBook(){
    let newlistBook=[...book,{name:inputBook,chapitre:Chp,id:Date.now().toString() + Math.random().toString(36).substring(2)}]
    if(newlistBook){

      setBook(newlistBook)
      localStorage.setItem('book', JSON.stringify(newlistBook));
    }
   
    
 

   

  }
  function deleteBook(id){
   let newList=book.filter((booksup) => booksup.id !== id)
   if(newList){
    setBook(newList)
    localStorage.setItem('book', JSON.stringify(newList));
   }

  }
  useEffect(() => {
    const getBook = JSON.parse(localStorage.getItem('book'));
    if (getBook) {
     setBook(getBook);
    }
  }, []);
  return (
    <div className={styles.contain}>
    <div className={styles.page}>
    <div className={styles.nav}>
    <div className={styles.zoneTextNav}>
      <h1 className={styles.titreNav}>Your book</h1>
    <h1 className={styles.titreNav2}>N'oublie plus tes lectures et future lecture</h1>
    <p className={styles.paraNav}>
  Ne perdez plus le fil de vos lectures. Notez les livres que vous avez commencés ou que vous souhaitez lire. Organisez simplement votre liste de lectures personnelles.
</p>
     </div>
    </div>
    <div className={styles.zoneinputAdd}><input className={styles.zoneinput}  placeholder="Note ta serie film ou book" onChange={(e)=>setinputBook(e.target.value)}></input>
    <button className={styles.boutonPlus} onClick={addBook}>+</button></div>

    <div className={styles.zoneliste}>
<ul className={styles.liste}>
 
{book.map((bookNoter)=><li key={bookNoter.id} className={styles.tesLecturelist}>{bookNoter.name}<h1>{bookNoter.chapitre}</h1><button onClick={()=>deleteBook(bookNoter.id)}  className={styles.boutonSupp}>X</button></li>)}
</ul>
    </div>
   

    </div>
     <div className={styles.footer}>
     <p className={styles.linkfooter}>
       <a href="/confidentialite" style={{ color: "black" }}>
         Politique de confidentialité
       </a>
     </p>
   </div>
  </div>
  );
}
