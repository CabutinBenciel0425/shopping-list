export type ItemsType = {
  id: number;
  date_created: string;
  item: string;
  quantity: number;
  isPurchased: boolean;
};

export const Items: ItemsType[] = [
  {
    id: 1,
    date_created: "2026-04-07T10:00:00Z",
    item: "Milk",
    quantity: 2,
    isPurchased: true,
  },
  {
    id: 2,
    date_created: "2026-04-07T10:02:00Z",
    item: "Bread",
    quantity: 1,
    isPurchased: false,
  },
  {
    id: 3,
    date_created: "2026-04-07T10:04:00Z",
    item: "Eggs",
    quantity: 12,
    isPurchased: true,
  },
  {
    id: 4,
    date_created: "2026-04-07T10:06:00Z",
    item: "Apples",
    quantity: 6,
    isPurchased: false,
  },
  {
    id: 5,
    date_created: "2026-04-07T10:08:00Z",
    item: "Chicken Breast",
    quantity: 2,
    isPurchased: false,
  },
  {
    id: 6,
    date_created: "2026-04-07T10:10:00Z",
    item: "Rice",
    quantity: 5,
    isPurchased: true,
  },
  {
    id: 7,
    date_created: "2026-04-07T10:12:00Z",
    item: "Tomatoes",
    quantity: 4,
    isPurchased: false,
  },
  {
    id: 8,
    date_created: "2026-04-07T10:14:00Z",
    item: "Onions",
    quantity: 3,
    isPurchased: true,
  },
  {
    id: 9,
    date_created: "2026-04-07T10:16:00Z",
    item: "Coffee",
    quantity: 1,
    isPurchased: false,
  },
  {
    id: 10,
    date_created: "2026-04-07T10:18:00Z",
    item: "Cheese",
    quantity: 2,
    isPurchased: true,
  },
];
