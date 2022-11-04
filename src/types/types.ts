export interface Subject {
  id: number;
  subject: string;
}

export interface ThingsIknow {
  id: any;
  things: Subject[];
}
