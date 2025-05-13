"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function Home() {
  const [inputBook, setInputBook] = useState("")
  const [book, setBook] = useState([])

  const [inputChp, setInputChp] = useState("")
  const [Chp, setChp] = useState([])

  function addBook() {
    let newlistBook = [...book, {name: inputBook, chapitre: Chp, id: Date.now().toString() + Math.random().toString(36).substring(2)}]
    if (newlistBook) {
      setBook(newlistBook)
      localStorage.setItem('book', JSON.stringify(newlistBook));
    }
  }

  function deleteBook(id) {
    let newList = book.filter((bookToRemove) => bookToRemove.id !== id)
    if (newList) {
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
      <div className={styles.zoneBouton}>
 <a href="https://ko-fi.com/developperjrproject"><button className={styles.boutonSupport}> <FaHeart style={{ marginRight: '8px' }} /><p className={styles.textBouton}>Show support</p></button></a> 
</div>
        <div className={styles.nav}>
          <div className={styles.zoneTextNav}>
            <h1 className={styles.titreNav}>RemindRead</h1>
            <h1 className={styles.titreNav2}>Never forget your current and future readings</h1>
            <p className={styles.paraNav}>
              Never lose track of your readings again. Note down the books you&apos;ve started or want to read. Simply organize your personal reading list.
            </p>
          </div>
        </div>
        <div className={styles.zoneinputAdd}>
          <input
            className={styles.zoneinput}
            placeholder="Add a book title"
            onChange={(e) => setInputBook(e.target.value)}
          />
          <button className={styles.boutonPlus} onClick={addBook}>+</button>
        </div>

        <div className={styles.zoneliste}>
          <ul className={styles.liste}>
            {book.map((notedBook) => (
              <li key={notedBook.id} className={styles.tesLecturelist}>
                {notedBook.name}
                <h1>{notedBook.chapitre}</h1>
                <button onClick={() => deleteBook(notedBook.id)} className={styles.boutonSupp}>X</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className={styles.footer}>
        <p className={styles.linkfooter}>
          <a href="/politique" style={{ color: "black" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
