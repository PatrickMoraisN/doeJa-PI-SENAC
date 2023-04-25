import axios from "axios";
import { FoodsListProps, foodsMock } from "./mocks";

const productsRoutes = "http://localhost:3334/products";

const parseLabels = (data: any) => {
  const dataParsed = data.map((item) => {
    const regex = /"(.+?)"/g;
    const arrayLabels = item.labels
      .match(regex)
      .map((match) => match.slice(1, -1));

    return { ...item, labels: arrayLabels };
  });

  return [...dataParsed];
};

const foodAPI = {
  // getFoods(): Promise<FoodsListProps> {
  //   return new Promise((resolve, _reject) => {
  //     window.setTimeout(() => {
  //       return resolve(foodsMock);
  //     }, Math.random() * 2000 + 1000);
  //   });
  // },
  async getFoods2() {
    const response = await axios.get(productsRoutes);
    const dataParsed = parseLabels(response.data);

    return [...dataParsed.reverse(), ...foodsMock];
  },
  createFood(data: any): Promise<any> {
    const response = axios.post(productsRoutes, data);

    return response;
  },
};

export default foodAPI;
