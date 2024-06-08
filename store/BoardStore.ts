import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface BoardState {
  board: Board
  getBoard: () => void
}

const useBearStore = create<BoardState>()(
  board:null,
  getBoard: ()=>{
    
  }
)