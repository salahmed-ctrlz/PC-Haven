import rtx4080 from "@/assets/images/RTX 4080 Super Graphics Card.jpg";
import i9Processor from "@/assets/images/Intel Core i9-13900K Processor.jpg";
import ddr5Ram from "@/assets/images/32GB DDR5 RAM Kit (2x16GB).jpg";
import nvmeSsd from "@/assets/images/2TB NVMe SSD M.2.jpg";
import motherboard from "@/assets/images/Z790 Gaming Motherboard.jpg";
import powerSupply from "@/assets/images/850W Platinum Power Supply.jpg";
import keyboard from "@/assets/images/RGB Gaming Keyboard Mechanical.jpg";
import liquidCooler from "@/assets/images/360mm Liquid CPU Cooler.jpg";

import graphicsCards from "@/assets/images/graphics cards.png";
import processors from "@/assets/images/processors.png";
import memory from "@/assets/images/memory.png";
import storage from "@/assets/images/storage.png";
import motherboards from "@/assets/images/motherboards.png";
import powerSupplies from "@/assets/images/power supplies.png";
import peripherals from "@/assets/images/peripherals.png";
import cooling from "@/assets/images/cooling.png";

import nvidia from "@/assets/images/nvidia.png";
import amd from "@/assets/images/amd.png";
import intel from "@/assets/images/intel.png";
import asus from "@/assets/images/asus.png";
import msi from "@/assets/images/msi.png";
import corsair from "@/assets/images/corsair.png";

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
    image: rtx4080,
    description: "Ray tracing, 16GB GDDR6X memory.",
    featured: true,
    stock: 15,
    rating: 4.8
  },
  {
    id: 2,
    name: "Intel Core i9-13900K Processor",
    category: "Processors",
    price: 599.99,
    image: i9Processor,
    description: "24-core processor, 5.8GHz turbo.",
    featured: true,
    stock: 20,
    rating: 4.9
  },
  {
    id: 3,
    name: "32GB DDR5 RAM Kit (2x16GB)",
    category: "Memory",
    price: 249.99,
    image: ddr5Ram,
    description: "Blazing fast DDR5 memory with RGB.",
    featured: false,
    stock: 30,
    rating: 4.7
  },
  {
    id: 4,
    name: "2TB NVMe SSD M.2",
    category: "Storage",
    price: 199.99,
    image: nvmeSsd,
    description: "Ultra-fast NVMe SSD with 7000MB/s read speed.",
    featured: true,
    stock: 25,
    rating: 4.8
  },
  {
    id: 5,
    name: "Z790 Gaming Motherboard",
    category: "Motherboards",
    price: 349.99,
    image: motherboard,
    description: "PCIe 5.0, WiFi 6E, Intel support.",
    featured: true,
    stock: 10,
    rating: 4.6
  },
  {
    id: 6,
    name: "850W Platinum Power Supply",
    category: "Power Supplies",
    price: 159.99,
    image: powerSupply,
    description: "Fully modular, 80 Plus Platinum certified.",
    featured: false,
    stock: 12,
    rating: 4.7
  },
  {
    id: 7,
    name: "RGB Gaming Keyboard Mechanical",
    category: "Peripherals",
    price: 129.99,
    image: keyboard,
    description: "Per-key RGB lighting, N-key rollover.",
    featured: true,
    stock: 35,
    rating: 4.5
  },
  {
    id: 8,
    name: "360mm Liquid CPU Cooler",
    category: "Cooling",
    price: 179.99,
    image: liquidCooler,
    description: "Triple radiator, RGB fans, max cooling.",
    featured: false,
    stock: 8,
    rating: 4.8
  }
];

export const categories = [
  { id: 1, name: "Graphics Cards", image: graphicsCards },
  { id: 2, name: "Processors", image: processors },
  { id: 3, name: "Memory", image: memory },
  { id: 4, name: "Storage", image: storage },
  { id: 5, name: "Motherboards", image: motherboards },
  { id: 6, name: "Power Supplies", image: powerSupplies },
  { id: 7, name: "Peripherals", image: peripherals },
  { id: 8, name: "Cooling", image: cooling }
];

export const partners = [
  { id: 1, name: "NVIDIA", image: nvidia },
  { id: 2, name: "AMD", image: amd },
  { id: 3, name: "Intel", image: intel },
  { id: 4, name: "ASUS", image: asus },
  { id: 5, name: "MSI", image: msi },
  { id: 6, name: "Corsair", image: corsair }
];
