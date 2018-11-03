import * as React from 'react'

import {get,RequestOption} from '../../utils/middleware'

export interface ILayoutReducer{

    readonly initialState: LayoutState
    readonly state: LayoutState
    readonly dispatch: Function
}

type LayoutState ={
    count: number,
    loading: boolean,
    comments: []
    error: string
}

export default class LayoutReducer implements ILayoutReducer{

     initialState:LayoutState;
     state: LayoutState;
     dispatcher: Function;
     constructor(){
        this.initialState = {count: 0, loading: false, comments: [], error: ''}
        const [state, dispatch] = React.useReducer(this.reducer.bind(this), this.initialState);
        this.state = state || this.initialState;
        this.dispatcher = dispatch;
     }

    reducer(state:any, action: any) {
        switch (action.type) {
          case 'reset':
            return this.initialState;
          case 'increment':
            return {...state, count: state.count + 1};
          case 'decrement':
            return {...state, count: state.count - 1};
          case 'load_comments':
            get({
                path:'https://jsonplaceholder.typicode.com/comments',
                onSuccess: (response: any) => this.dispatch({type: "show_comments", comments: response}),
                onFail: (error: any) => this.dispatch({type: "error_comments", error: error})
            })
            return {...state, loading: true, error: ''}
          case 'show_comments':
            return { ...state, comments: action.comments, loading: false}
          case 'error_comments':
            
            return { ...state, error: action.error, loading: false}
          default:
            return state
        }
      }

    dispatch(action:any){
        this.dispatcher(action);
    }

}