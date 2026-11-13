export interface Mock {
  idNumber: number;
  jobs: Job[];
}

export interface Job {
  id: string;
  text: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
