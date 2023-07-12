import { v4 as uuid } from 'uuid';

export enum ReportType {
  EXPENSE = 'expense',
  INCOME = 'income',
}

export const data: Data = {
  report: [
    {
      id: uuid(),
      source: 'Bussiness',
      amount: 20_000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType: ReportType.INCOME,
    },
    {
      id: uuid(),
      source: 'Programming',
      amount: 100_000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType: ReportType.INCOME,
    },
    {
      id: uuid(),
      source: 'Rent',
      amount: 50_000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType: ReportType.EXPENSE,
    },
    {
      id: uuid(),
      source: 'Food and Refreshment',
      amount: 10_000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType: ReportType.EXPENSE,
    },
    {
      id: uuid(),
      source: 'Salary',
      amount: 400_000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: Report[];
}

export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: string;
  updated_at: string;
  reportType: ReportType;
}
