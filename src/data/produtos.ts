export type Categoria =
  | "camisetas"
  | "moletom"
  | "calca"
  | "bermuda"
  | "plusSize"
  | "polo"
  | "tShirtsFemininas"
  | "bobojaco"
  | "tenis"
  | "cueca"
  | "meia"
  | "combos";

  export interface Produto {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  imagem: string;
  logoMarca: string;
  categoria: Categoria;
  tamanhos?: string[];
  estoque: number;
  linkShopee?: string;
  cor?: string; 
}
  
  
  