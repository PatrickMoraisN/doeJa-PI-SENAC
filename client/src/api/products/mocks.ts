export const foodsMock = [
  {
    id: 1,
    name: "Salada Colorful",
    description: "Delicie-se com uma salada fresca e crocante!",
    labels: ["SALADA", "SAUDÁVEL"],
    src: "/static/img/colorful.jpg",
  },
  {
    id: 2,
    name: "Tacos",
    description: "3 deliciosos tacos com carne de jaca. Uma combinação perfeita de sabores e texturas! ",
    src: "/static/img/tacos.jpg",
    labels: ["MEXICANO", "PICANTE"],
  },
  {
    id: 3,
    name: "Expresso grains",
    description: "Desfrute de um prato de grãos saudável e energizante!",
    src: "/static/img/grains.jpg",
    labels: ["GRÃOS", "SAUDÁVEL", "VEGANO"],
  },
  {
    id: 7,
    name: "Salada Green",
    description: "Meio a meio frutas e folhas com leite vaporizado",
    src: "/static/img/green.jpg",
    labels: ["SALADA", "VAPOR"],
  },
  {
    id: 12,
    name: "Gurjao",
    description: "Experimente um gurjão de frango crocante e temperado! ",
    src: "/static/img/gurjao.jpg",
    labels: ["PETISCOS"],
  },
  {
    id: 13,
    name: "Hamburgão",
    description:
      "Satisfaça sua fome com um hambúrguer suculento e recheado!",
    src: "/static/img/hamburgao.jpg",
    labels: ["ARTESANAL", "HAMBÚRGUER"],
  },
];

export interface Food {
  id: number;
  name: string;
  description: string;
  src: string;
  labels: string[];
}

export type FoodsListProps = Food[];

console.log("teste")
console.log("teste2")
console.log("teste3")