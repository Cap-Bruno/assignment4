import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../../Categoria'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService){
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getAll().subscribe((categorias) => (this.categorias = categorias))  
  }
}
