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
}

export interface User {
  username: string;
  password: string;
}