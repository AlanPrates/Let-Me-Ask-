<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"

export function useAuth() {
    const value = useContext(AuthContext)
    return value
}
=======
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

export function useAuth() {
  const value = useContext(AuthContext)

  return value
}
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
