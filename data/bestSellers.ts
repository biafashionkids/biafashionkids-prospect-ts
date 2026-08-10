export type BestSellerItem = {
  id: string;
  name: string;
  image?: string;
  discountPercent: number;
  reviewCount: number;
  oldPrice: number;
  price: number;
  installments: string;
  cottonTag?: boolean;
  gender: "Meninos" | "Meninas";
  sku: string;
};

export const meninosBestSellers: BestSellerItem[] = [
  {
    id: "conjunto-menino-1",
    name: "Conjunto Inverno Menino Marinho Jaqueta com Capuz e Calça em Moletom Recortes",
    image: "/produtos/conjunto-1.png",
    discountPercent: 30,
    reviewCount: 136,
    oldPrice: 99.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    cottonTag: true,
    gender: "Meninos",
    sku: "12801-MAR",
  },
  {
    id: "conjunto-menino-2",
    name: "Conjunto Inverno Menino Azul Blusão MLK com Capuz e Calça em Moletom",
    image: "/produtos/conjunto-2.png",
    discountPercent: 30,
    reviewCount: 146,
    oldPrice: 99.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    cottonTag: true,
    gender: "Meninos",
    sku: "12802-AZL",
  },
  {
    id: "conjunto-menino-3",
    name: "Conjunto Inverno Menina Rosa Blusão com Capuz e Calça em Moletom Laços",
    image: "/produtos/conjunto-3.png",
    discountPercent: 36,
    reviewCount: 6,
    oldPrice: 109.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    gender: "Meninos",
    sku: "12803-CNZ",
  },
  {
    id: "conjunto-menino-4",
    name: "Conjunto Inverno Menino Natural Jaqueta com Capuz e Calça em Moletom",
    image: "/produtos/conjunto-4.png",
    discountPercent: 27,
    reviewCount: 40,
    oldPrice: 109.9,
    price: 79.9,
    installments: "1x de R$ 79,90 no cartão s/ juros",
    gender: "Meninos",
    sku: "12804-NAT",
  },
];

export const meninasBestSellers: BestSellerItem[] = [
  {
    id: "conjunto-menina-1",
    name: "Conjunto Inverno Menina Rosa Jaqueta com Capuz e Calça em Moletom Recortes",
    image: "/produtos/meninas/conjunto-1.png",
    discountPercent: 30,
    reviewCount: 98,
    oldPrice: 99.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    cottonTag: true,
    gender: "Meninas",
    sku: "12901-CHI",
  },
  {
    id: "conjunto-menina-2",
    name: "Conjunto Inverno Menina Lilás Blusão com Capuz e Calça em Moletom",
    image: "/produtos/meninas/conjunto-2.png",
    discountPercent: 30,
    reviewCount: 112,
    oldPrice: 99.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    cottonTag: true,
    gender: "Meninas",
    sku: "12902-LIL",
  },
  {
    id: "conjunto-menina-3",
    name: "Conjunto Inverno Menina Pink Blusão com Capuz e Calça em Moletom Laços",
    image: "/produtos/meninas/conjunto-3.png",
    discountPercent: 36,
    reviewCount: 21,
    oldPrice: 109.9,
    price: 69.9,
    installments: "1x de R$ 69,90 no cartão s/ juros",
    gender: "Meninas",
    sku: "12903-PNK",
  },
  {
    id: "conjunto-menina-4",
    name: "Conjunto Inverno Menina Floral Jaqueta com Capuz e Calça em Moletom",
    image: "/produtos/meninas/conjunto-4.png",
    discountPercent: 27,
    reviewCount: 33,
    oldPrice: 109.9,
    price: 79.9,
    installments: "1x de R$ 79,90 no cartão s/ juros",
    gender: "Meninas",
    sku: "12904-FLR",
  },
];
