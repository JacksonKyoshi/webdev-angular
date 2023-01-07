import { IntegerType } from "mongodb";

export interface Tache {
    _id?:string;
    titre:string;
    termine:boolean;
    statut:IntegerType;
}
