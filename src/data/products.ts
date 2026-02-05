import Denim from "../assets/denim.jpg";
import Hoodie from "../assets/BlackHoodie.jpg";
import Jeans from "../assets/slimjeans.jpg";
import Shirt from "../assets/tshirt.jpg";
import GreyHoodie from "../assets/GreyHoodie.jpg";
import Jacket from "../assets/bomberjacket.jpg";
import BlueJeans from "../assets/bluejeans.jpg";
import WhiteBasicTee from "../assets/whitebasictee.jpg";
import ZipUpHoodie from "../assets/zipuphoodie.jpg";

export type Category = "All" | "Hoodies" | "Jeans" | "T-Shirts" | "Jackets";

export interface Product {
  id: number;
  name: string;
  image: string;
  size: string;
  price: number;
  category: Category;
  condition: "Like New" | "Good" | "New";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    image: Denim,
    size: "M",
    price: 1200,
    category: "Jackets",
    condition: "Like New",
  },
  {
    id: 2,
    name: "Black Hoodie",
    image: Hoodie,
    size: "L",
    price: 800,
    category: "Hoodies",
    condition: "Good",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    image: Jeans,
    size: "32",
    price: 900,
    category: "Jeans",
    condition: "Like New",
  },
  {
    id: 4,
    name: "Graphic T-Shirt",
    image: Shirt,
    size: "S",
    price: 400,
    category: "T-Shirts",
    condition: "Good",
  },
  {
    id: 5,
    name: "Grey Hoodie",
    image: GreyHoodie,
    size: "M",
    price: 750,
    category: "Hoodies",
    condition: "Like New",
  },
  {
    id: 6,
    name: "Bomber Jacket",
    image: Jacket,
    size: "L",
    price: 1500,
    category: "Jackets",
    condition: "New",
  },
  {
    id: 7,
    name: "Blue Jeans",
    image: BlueJeans,
    size: "30",
    price: 850,
    category: "Jeans",
    condition: "Good",
  },
  {
    id: 8,
    name: "White Basic Tee",
    image: WhiteBasicTee,
    size: "M",
    price: 350,
    category: "T-Shirts",
    condition: "Like New",
  },
  {
    id: 9,
    name: "Zip-Up Hoodie",
    image: ZipUpHoodie,
    size: "L",
    price: 950,
    category: "Hoodies",
    condition: "Like New",
  },
];
