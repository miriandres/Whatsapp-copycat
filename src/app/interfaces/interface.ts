export interface HeaderLi {
    ruta  : string,
    clase : string,
    span  : string,
    num?  : number
}
export interface UsersInfo {
    id            :  number,
    h2            :  string,
    h3            :  string,
    chat          :  string,
    estado        :  string,
    date          :  string,
    llamada       :  string,
    img           :  string,
    conversacion? :  Array<Chats>,
}
interface Chats {
    envio   : string,
    mensaje : string,
    hora    : number,
}