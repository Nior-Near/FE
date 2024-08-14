export interface Data {
  storeId: number;
  profileImage: string;
  name: string;
  storePhone: string;
  images: string[];
  title: string;
  introduction: string;
  possibleRegion: string[];
  placeId: number;
  placeName: string;
  auths: string[];
  temperature: number;
  menus: Menu[];
}
interface Menu {
  menuId: number;
  menuName: string;
  menuImage: string;
  menuIntroduction: string;
  menuPrice: number;
  menuGram: number;
  orderable: boolean;
}
