import { Anime } from "./anime";

export interface AnimeResponse { 
    content: Anime[];
    totalPages: number;
    // tem mais atributos
}