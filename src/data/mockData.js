export const users = [{ username: "admin", password: "1234" }];

export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home" }
];

export const products = [
  { id: 1, name: "Laptop", categoryId: 1, price: 1000 },
  { id: 2, name: "T-shirt", categoryId: 2, price: 20 },
  // Bug: categoryId mismatch leads to undefined category name in UI
  { id: 3, name: "Coffee Maker", categoryId: 4, price: 80 }
];
