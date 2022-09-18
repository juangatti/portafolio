import { ES_es, ENG_eng } from "./constants";




export function es_ES (payload) {
    return{
        type: ES_es,
        payload

    }
}

export function eng_ENG (payload) {
    return{
        type: ENG_eng,
        payload

    }
}