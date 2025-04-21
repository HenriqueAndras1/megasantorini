export type Categoria =
  | "camisetas"
  | "moletom"
  | "calca"
  | "bermuda"
  | "plus-size"
  | "polo"
  | "t-shirts-femininas"
  | "bobojaco"
  | "tenis"
  | "cueca"
  | "meia"
  | "combos";

  export interface Produto {
    id: number;
    nome: string;
    marca: string;
    imagem: string;
    logoMarca: string;
    categoria: Categoria;
    tamanhos?: string[];
    linkShopee?: string;
  }
  
  