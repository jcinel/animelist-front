import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from '../../interfaces/anime';

@Pipe({
    name: 'arrayFiltroAnime'
})
export class AnimeFiltroPipe implements PipeTransform {
    transform(value: Array<Anime>, filtro: string): any {
        if (filtro) {
            filtro = filtro.toUpperCase();
            
            return value.filter(a =>
                a.nome.toUpperCase().indexOf(filtro) >= 0
            );
        } else {
            return value;
        }
    }
}