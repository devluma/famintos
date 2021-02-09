interface VotingRecord {
  id?: number;
  userId?: number;
  restaurantId: number;
  attempts?: number;
  dayWeek: number;
  weekDayName: string;
  created_at?: string;
  updated_at?: string;
}

export default VotingRecord;
