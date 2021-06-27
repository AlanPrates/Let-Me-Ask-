<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth"
import {database} from "../services/firebase"
import illustrationImg from "../assets/images/illustration.svg";
import logo1 from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo2.svg";
import { ToggleBtn } from "../components/ToggleBtn";
import {useTheme} from "../hooks/useTheme"
=======
import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9

import "../styles/auth.scss"
import { Button } from "../components/Button";

<<<<<<< HEAD

export function NewRoom() {
    const { user } = useAuth()
    const {themeName} = useTheme()
    const history = useHistory()
    const [newRoom, setNewRoom] = useState('')
    const [logoImg, setLogoImg] = useState('')

    useEffect(() => {
        if (themeName === 'light') {
            setLogoImg(logo1)
        }
        else {
            setLogoImg(logo2) 
        }
        
        

    }, [themeName])
    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()
        if (newRoom.trim() === '') {
            return;
        }
        const roomRef = database.ref("rooms");
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
        history.push(`/admin/rooms/${firebaseRoom.key}`)


    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main className={themeName}>
                
                <div className="main-content">
                    <div className="logo-div">
                        <img src={logoImg} alt="Letmeask" />
                        <ToggleBtn/>
                    </div>
                    
                    <h2 className={themeName}>Criar uma nova sala</h2>
                    <form onSubmit={(event)=>handleCreateRoom(event)}>
                        <input
                            className={themeName}
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar  sala
                        </Button>
                    </form>
                    <p className={themeName}>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
=======
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>
          Tire as dúvidas da sua audiência em tempo-real
        </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
        </div>
      </main>
    </div>
  )
}