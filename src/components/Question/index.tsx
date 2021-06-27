<<<<<<< HEAD
import {ReactNode} from 'react'
import "./styles.scss"

import {useTheme} from "../../hooks/useTheme"

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isHighlighted?: boolean,
    isAnswered?: boolean,
    likeCount?: number,
}

export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
    likeCount = undefined,
}: QuestionProps) {
    const {themeName} = useTheme()
    return (
        
        <div className={`${themeName} question ${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'hightlighted' : ''}`}>
            <div className="content">
                <p className={themeName}>{content} </p>
                {
                    likeCount ? (
                        <span>{`${likeCount} curtida(s)`}</span>
                    ): ''
                }
            </div>
            
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span className={themeName}>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>

    )
=======
import { ReactNode } from 'react';
import cx from 'classnames'

import './styles.scss'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode,
  isAnswered?: boolean,
  isHighlighted?: boolean, 
}

export function Question({ 
  content, 
  author, 
  isAnswered = false, 
  isHighlighted = false, 
  children 
}: QuestionProps) {
  return (
    <div 
      className={cx(
        'question', 
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered},
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
}