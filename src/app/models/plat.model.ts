import { User } from './user.model';

export class Plat {
   id: number;
   user: User;
   title: string;
   description: string;
   ingredients: string;
   categorie: string[];
   prix: number;
   images: Image[];
   mark: number;
   keywords: string[];
  }

export class Image {
    id: number;
    name: string;
   }

export class PlatDate {
    dish: Plat;
    date: Date ;
   }

export class Reservation {
    dishDate: PlatDate;
    isAccepted: boolean;
    location: string;
    comment: string;
    user: User;
   }
