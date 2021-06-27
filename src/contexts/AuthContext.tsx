<<<<<<< HEAD
import { createContext, ReactNode, useState, useEffect } from "react"

import {firebase, auth} from "../services/firebase"

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}
  
=======
import { ReactNode, useEffect, useState } from "react"
import { createContext } from "react"
import { auth, firebase } from "../services/firebase"

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
type AuthContextProviderProps = {
  children: ReactNode;
}

<<<<<<< HEAD
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()
=======
export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {

  const [user, setUser] = useState<User>()
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
<<<<<<< HEAD
        const { displayName, photoURL, uid } = user;
      
      if (!displayName || !photoURL) {
        throw new Error('Missing Information from Google Account')
      } 
      
=======
        const { displayName, photoURL, uid } = user

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
<<<<<<< HEAD
        })
      }      
    })
    return () => {
      unsubscribe();
    }
  },[])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
      
      if (!displayName || !photoURL) {
        throw new Error('Missing Information from Google Account')
      } 
      
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
        })
      }      
  }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
=======
      })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)
    
    if(result.user) {
      const { displayName, photoURL, uid } = result.user

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
}