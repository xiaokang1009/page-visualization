import create from 'zustand'

type State = {
  thumbScrollHeight: number
  elScrollHeight: number
}

const useStore = create<State>((set, get) => {
  return {
    thumbScrollHeight: 0,
    elScrollHeight: 0
  }
})
