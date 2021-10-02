import { ICarsManagerInitial } from "./CarsManagerTypes";

export const CarsManagerInitial: ICarsManagerInitial = {
  id: "",
  data: {
    priceMax: 0,
    priceMin: 0,
    name: "",
    thumbnail: {
      path: "",
      name: "",
      file: null,
    },
    description: "",
    categoryId: {
      id: "",
      name: "",
    },
    colors: [],
    tank: 0,
    number: "",
  },
  error: false,
};
