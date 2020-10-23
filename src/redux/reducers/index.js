import {MURAD} from '../types'

export const bahruz = (data = "Salam again" , action) =>{
    switch (action.type){
        case MURAD :
            return action.payload
        default :
            return data;
    }
}

export const murad = (data = [] , action) =>{
    switch (action.type){
        default :
            return data;
    }
}
