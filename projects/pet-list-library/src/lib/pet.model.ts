export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tags[];
  status: string;
}

export interface Tags {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface ViewPet {
  id: number;
  name: string;
  status: string;
}
