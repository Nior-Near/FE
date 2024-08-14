export interface Done {
  orderId: number;
  profileImage: string;
  message: string;
  totalPrice: number;
  orderMenus: {
    menuName: string;
    menuPrice: number;
    quantity: number;
  }[];
}
