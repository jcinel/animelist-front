import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Pipe({
    name: 'arrayFiltroUsuario'
})
export class UsuarioFiltroPipe implements PipeTransform {
    transform(value: Array<Usuario>, filtro: string): any {
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