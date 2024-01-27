import React from 'react'
//get my actions
import { incrementLike,decrementLike } from './Actions'
//get my store
import {createStore} from 'redux'
//get the reducer
import Reducer from './Reducer'
//createsstore - creates a store using reducer
const store = createStore(Reducer);
const  LikeCounter=()=> {
    const [Like ,setLikes] = React.useState(store.getState().likes);
    
    function handleLike(){
        store.dispatch(incrementLike())
    }
    function handleUnlike(){
       const currentLike = store.getState().likes;
       if(currentLike>0){
        store.dispatch(decrementLike())
       }
        

    }
    React.useEffect(()=>{
        const subscribe = store.subscribe(()=>setLikes(store.getState().likes));
        return subscribe;
    },[])
  return (
    <div>
      <h1>{Like}</h1>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  )
}

export default  LikeCounter
