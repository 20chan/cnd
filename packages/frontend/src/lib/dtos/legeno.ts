export interface LegenoUser {
  uid: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface LegenoAuditLog {
  id: number;
  uid: string;
  ip: string;
  action: string;
  details: string;
  createdAt: string;
}
