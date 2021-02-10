interface Restaurant {
  id?: string;
  name: string;
  description?: string;
  created_at?: number;
  updated_at?: string;
  last_day_of_likes?: string | null;
}

export default Restaurant;
