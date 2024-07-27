export default [
  {
    id: 1,
    name: "Product 1",
    filters: [
      {
        id: 1,
        name: "image_list.Product Image 2",
        isActive: false,
      },
      {
        id: 2,
        name: "is Empty",
        isActive: true,
      },
      {
        id: 3,
        name: "And Discount Percentage",
        isActive: false,
      },
      {
        id: 4,
        name: "is",
        isActive: true,
      },
      {
        id: 5,
        name: "0",
        isActive: false,
      },
    ],
    variants: [
      {
        id: 1,
        image: "https://via.placeholder.com/200x200.png?text=Image+1",
        name: "Single Image Product",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200x200.png?text=Image+2",
        name: "Single Image Product",
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    filters: [
      {
        id: 1,
        name: "tags",
        isActive: false,
      },
      {
        id: 2,
        name: "Contains",
        isActive: true,
      },
      {
        id: 3,
        name: "On sale",
        isActive: false,
      },
    ],
    variants: [
      {
        id: 1,
        image: "https://via.placeholder.com/200x200.png?text=Image+3",
        name: "Multi Image - On Sale",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200x200.png?text=Image+4",
        name: "4 images - On Sale",
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    filters: [
      {
        id: 1,
        name: "tags",
        isActive: false,
      },
      {
        id: 2,
        name: "Contains",
        isActive: true,
      },
      {
        id: 3,
        name: "__label:New",
        isActive: false,
      },
    ],
    variants: [
      {
        id: 1,
        image: "https://via.placeholder.com/200x200.png?text=Image+5",
        name: "Mutli Image - New Arrival",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200x200.png?text=Image+6",
        name: "4 Image - New Arrival",
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    filters: [
      {
        id: 1,
        name: "Discount Percentage",
        isActive: false,
      },
      {
        id: 2,
        name: "is",
        isActive: true,
      },
      {
        id: 3,
        name: "0",
        isActive: false,
      },
    ],
    variants: [
      {
        id: 1,
        image: "https://via.placeholder.com/200x200.png?text=Image+7",
        name: "Single Image - left side",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200x200.png?text=Image+8",
        name: "4 Image - zero discount",
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    filters: [
      {
        id: 1,
        name: "image_list.Product Image 2",
        isActive: false,
      },
      {
        id: 2,
        name: "is",
        isActive: true,
      },
      {
        id: 3,
        name: "empty",
        isActive: false,
      },
    ],
    variants: [
      {
        id: 1,
        image: "https://via.placeholder.com/200x200.png?text=Image+9",
        name: "Single Image Product",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200x200.png?text=Image+10",
        name: "Single Image Product",
      },
    ],
  },
] as Product[];

export interface Product {
  id: number;
  name: string;
  filters: Filter[];
  variants: variant[];
}

interface Filter {
  id: number;
  name: string;
  isActive: boolean;
}

export interface variant {
  id: number;
  image: string;
  name: string;
}

export const Items = [
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+1",
    name: "Single Image Product",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+2",
    name: "Single Image Product",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+3",
    name: "Multi Image - On Sale",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+4",
    name: "4 images - On Sale",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+5",
    name: "Mutli Image - New Arrival",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+6",
    name: "4 Image - New Arrival",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+7",
    name: "Single Image - left side",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+8",
    name: "4 Image - zero discount",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+9",
    name: "Single Image Product",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+10",
    name: "Single Image Product",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+12",
    name: "Single Image Product",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Image+13",
    name: "Single Image Product",
  },
];

export type Item = {
  name: string;
  image: string;
};