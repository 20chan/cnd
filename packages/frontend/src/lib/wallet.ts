export interface WalletTransaction {
  ts: string;
  amount: number;
  balance: number;
  kind: string;
  source: string;
  target: string;
}
