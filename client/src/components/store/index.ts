import { createStoreon, StoreonModule } from 'storeon'

import { idText } from 'typescript';

interface Player {
  id: number;
  position: {x:number, y:number},
  health:number,
  armor:number,
  image:string;

}

export interface PlayerState {
  players: Player[],
  currentPlayerHod: number
}

export interface PlayerEvents {
  "player/hod": { playerId: number, x:number, y: number},
  "player/currentPlayerHod": number
  "player/Board": {id: number; health:number, armor:number,}
  // "player/hod": { playerId: number, x:number, y: number}
}

export const playerModule: StoreonModule<PlayerState, PlayerEvents> = store => {
    store.on('@init', () => ({ currentPlayerHod:1, players: [{id: 1, position: {x: 0, y: 0}, image: "LSoldar.png", health: 100, armor:100},
                            {id:2, position: {x: 8, y: 5}, image: "LSoldar.png", health: 100, armor:100}
  ] }))

    store.on('player/hod', (state, {playerId, x, y}) => {
      const copy = state.players;
      const playerIndex = copy.findIndex(el => el.id === playerId)
      const currentPlayer = copy[playerIndex]
      copy[playerIndex].position = {x, y}

      return {
        players: copy
      }
    });

    store.on('player/currentPlayerHod', (state, playerId) => {
       return {
        currentPlayerHod: playerId
      }
    });
  }

  type State = PlayerState
  type Events = PlayerEvents

  const store = createStoreon<State, Events>([playerModule])

  export default store;

