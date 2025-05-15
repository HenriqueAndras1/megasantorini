// src/data/categorias.ts

export interface CategoriaInfo {
    nome: string;
    slug: string;
    imagem: string;
  }
  
  export const categorias: CategoriaInfo[] = [
    { nome: 'Camisetas', slug: 'camisetas', imagem: '/produtos/pg-categorias/camiseta.png' },
    { nome: 'Moletons', slug: 'moletom', imagem: '/produtos/pg-categorias/blusa.jpg' },
    { nome: 'Calças', slug: 'calca', imagem: '/produtos/pg-categorias/calça.jpg' },
    { nome: 'T-Shirt Feminina', slug: 'tShirtsFemininas', imagem: '/produtos/pg-categorias/tshirt.jpg' },
    { nome: 'Bobojaco', slug: 'bobojaco', imagem: '/produtos/pg-categorias/bobojaco.jpg' },
    { nome: 'Tênis', slug: 'tenis', imagem: '/produtos/pg-categorias/tenis.jpg' },
    { nome: 'Cueca', slug: 'cueca', imagem: '/produtos/pg-categorias/cueca.jpg' },
    { nome: 'Meia', slug: 'meia', imagem: '/produtos/pg-categorias/meia.jpg' },
    { nome: 'Plus Size', slug: 'plusSize', imagem: '/produtos/pg-categorias/plus.jpg' },
    { nome: 'Polo', slug: 'polo', imagem: '/produtos/pg-categorias/polo.jpg' },
    { nome: 'Bermuda', slug: 'bermuda', imagem: '/produtos/pg-categorias/bermuda.jpg' },
  ];
  
 /* Usando para ter imagem na pagina de categorias de produtos! */