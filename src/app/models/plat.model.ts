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
    plat: Plat;
    date: Date ;

   }

export class Reservation {
    platdate: PlatDate;
    isAccepted: boolean;
    comment: string;
    user: User;
   }
