import product_1 from "../assets/product-1.jpg"
import product_2 from "../assets/product-2.jpg"
import product_3 from "../assets/product-3.jpg"
import product_4 from "../assets/product-4.jpg"

import product_5 from "../assets/product-5.jpg"
import product_5_1 from "../assets/product-5-1.jpg"
import product_5_2 from "../assets/product-5-2.jpg"
import product_5_3 from "../assets/product-5-3.jpg"
import product_5_4 from "../assets/product-5-4.jpg"

import product_6 from "../assets/product-6.jpg"

export const Products = [
    {
        id: 1,
        img: product_1,
        brand: "Nike",
        name: "Victori One Slide Sandals",
        price: 404100
    },
    {
        id: 2,
        img: product_2,
        brand: "Nike",
        name: "Victori One Slides",
        price: 359200
    },
    {
        id: 3,
        img: product_3,
        brand: "Nike",
        name: "Men's Court Vision Low Next..",
        price: 799000
    },
    // {
    //     id: 4,
    //     img: product_4,
    //     brand: "Nike",
    //     name: "Men's Offcourt",
    //     price: 529000
    // },
    {
        id: 5,
        img: [product_5, product_5_1, product_5_2, product_5_3, product_5_4],
        brand: "Nike",
        name: "Court Royale 2 Next Nature..",
        fullName: "Court Royale 2 Next Nature Men's Shoes",
        price: 749000,
        discPrice:561750,
        disc: 25,
        variant: product_5,
        size:[40, 41, 42, 43, 44, 45]
    },
    // {
    //     id: 6,
    //     img: product_6,
    //     brand: "Nike",
    //     name: "Nike Court Vision Lo Nn",
    //     price: 799000
    // },

]