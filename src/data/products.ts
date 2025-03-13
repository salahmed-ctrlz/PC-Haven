export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
  stock: number;
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "RTX 4080 Super Graphics Card",
    category: "Graphics Cards",
    price: 999.99,
    image: "../public/images/RTX 4080 Super Graphics Card.jpg",
    description: "The latest graphics card with ray tracing capabilities and 16GB of GDDR6X memory for ultimate gaming performance.",
    featured: true,
    stock: 15,
    rating: 4.8
  },
  {
    id: 2,
    name: "Intel Core i9-13900K Processor",
    category: "Processors",
    price: 599.99,
    image: "../public/images/Intel Core i9-13900K Processor.jpg",
    description: "24-core processor (8 P-cores, 16 E-cores) with up to 5.8GHz turbo frequency for extreme multitasking and gaming.",
    featured: true,
    stock: 20,
    rating: 4.9
  },
  {
    id: 3,
    name: "32GB DDR5 RAM Kit (2x16GB)",
    category: "Memory",
    price: 249.99,
    image: "../public/images/32GB DDR5 RAM Kit (2x16GB).jpg",
    description: "Blazing fast DDR5 memory kit with RGB lighting and aluminum heat spreaders for superior cooling.",
    featured: false,
    stock: 30,
    rating: 4.7
  },
  {
    id: 4,
    name: "2TB NVMe SSD M.2",
    category: "Storage",
    price: 199.99,
    image: "../public/images/2TB NVMe SSD M.2.jpg",
    description: "Ultra-fast NVMe SSD with read speeds up to 7000MB/s and write speeds up to 5500MB/s.",
    featured: true,
    stock: 25,
    rating: 4.8
  },
  {
    id: 5,
    name: "Z790 Gaming Motherboard",
    category: "Motherboards",
    price: 349.99,
    image: "../public/images/Z790 Gaming Motherboard.jpg",
    description: "Feature-rich gaming motherboard with PCIe 5.0, WiFi 6E, and support for the latest Intel processors.",
    featured: true,
    stock: 10,
    rating: 4.6
  },
  {
    id: 6,
    name: "850W Platinum Power Supply",
    category: "Power Supplies",
    price: 159.99,
    image: "../public/images/850W Platinum Power Supply.jpg",
    description: "Fully modular power supply with 80 Plus Platinum certification for efficient power delivery.",
    featured: false,
    stock: 12,
    rating: 4.7
  },
  {
    id: 7,
    name: "RGB Gaming Keyboard Mechanical",
    category: "Peripherals",
    price: 129.99,
    image: "../public/images/RGB Gaming Keyboard Mechanical.jpg",
    description: "Mechanical gaming keyboard with per-key RGB lighting and N-key rollover for gaming perfection.",
    featured: true,
    stock: 35,
    rating: 4.5
  },
  {
    id: 8,
    name: "360mm Liquid CPU Cooler",
    category: "Cooling",
    price: 179.99,
    image: "../public/images/360mm Liquid CPU Cooler.jpg",
    description: "Triple radiator liquid cooler with RGB fans and pump for maximum cooling performance.",
    featured: false,
    stock: 8,
    rating: 4.8
  }
];

export const categories = [
  { id: 1, name: "Graphics Cards", image: "/public/images/graphics cards.png" },
  { id: 2, name: "Processors", image: "/public/images/processors.png" },
  { id: 3, name: "Memory", image: "/public/images/memory.png" },
  { id: 4, name: "Storage", image: "/public/images/storage.png" },
  { id: 5, name: "Motherboards", image: "/public/images/motherboards.png" },
  { id: 6, name: "Power Supplies", image: "/public/images/power supplies.png" },
  { id: 7, name: "Peripherals", image: "/public/images/peripherals.png" },
  { id: 8, name: "Cooling", image: "/public/images/cooling.png" }
];

export const partners = [
  { id: 1, name: "NVIDIA", image: "../public/images/nvidia.png" },
  { id: 2, name: "AMD", image: "../public/images/amd.png" },
  { id: 3, name: "Intel", image: "../public/images/intel.png" },
  { id: 4, name: "ASUS", image: "../public/images/asus.png" },
  { id: 5, name: "MSI", image: "../public/images/msi.png" },
  { id: 6, name: "Corsair", image: "../public/images/corsair.png" }
];
