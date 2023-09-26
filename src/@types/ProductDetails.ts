interface KeyAndValue {
  title: string;
  value: string;
}

interface ArrayOfKeysAndValues {
  [key: string]: KeyAndValue[];
}

export interface IProductDetails {
  _id: string;
  title: string;
  specs: string;
  description: string;
  price: number;
  imageUrl: string;
  characteristics: ArrayOfKeysAndValues;
  rating: number;
  countInStock: number;
  brand: string;
  type: string;
  typeSystem: string;
  variety: string;
  model: string;
  inverter: string;
  area: string;
  country: string;
}
