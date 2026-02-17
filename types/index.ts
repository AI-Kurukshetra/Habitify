export interface Item {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
}

export interface CreateItemData {
  title: string;
  description?: string;
  image?: File;
}

export interface UpdateItemData {
  id: string;
  title: string;
  description?: string;
  image?: File;
}
