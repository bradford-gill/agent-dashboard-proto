export interface Agent {
  id: string;
  title: string;
  subtitle: string;
  metrics: Metric[];
}

export interface Metric {
  name: string;
  value: string;
  type: 'self-generated' | 'dependent';
  description: string;
  timeSeriesData?: TimeSeriesData;
}

export interface TimeSeriesData {
  daily: DataPoint[];
  weekly: DataPoint[];
  monthly: DataPoint[];
}

export interface DataPoint {
  date: string;
  value: number;
}

export interface User {
  username: string;
  password: string;
}