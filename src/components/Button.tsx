<<<<<<< HEAD
import { ButtonHTMLAttributes } from "react"
import {useTheme} from "../hooks/useTheme"
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
    variableBtn?: boolean;
}

export function Button({ isOutlined = false, variableBtn = false, ...props }: ButtonProps) {
    const {themeName} = useTheme()
    return (
        <button className={`button ${isOutlined ? themeName : ''} ${variableBtn ? 'small' : ''}`}  {...props}/>
    )
} 
=======
import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props}: ButtonProps) {
  return (
    <button 
    className={`button ${isOutlined ? 'outlined' : ''}`} 
    {...props} />
  )
}
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
