import React from 'react'

export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  finished: boolean;
}

export interface Movie {
  id: string;
  title: string;
  director: string;
  durationMinutes: number;
  finished: boolean;
}


const Content = () => {
  return (
    <div>Content</div>
  )
}

export default Content