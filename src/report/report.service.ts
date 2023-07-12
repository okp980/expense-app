import { Injectable } from '@nestjs/common';
import { Report, ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';

const findReport = (report: Report[], id: string, responseType: ReportType) => {
  return report.find(
    (item: Report) => item.id === id && item.reportType === responseType,
  );
};

@Injectable()
export class ReportService {
  getAllReports() {
    return data.report;
  }
  getAllReportsByType(type: string) {
    const responseType =
      type === ReportType.EXPENSE ? ReportType.EXPENSE : ReportType.INCOME;

    return data.report.filter(
      (data: Report) => data.reportType === responseType,
    );
  }
  getReportById(type: string, id: string) {
    const responseType =
      type === ReportType.EXPENSE ? ReportType.EXPENSE : ReportType.INCOME;
    return findReport(data.report, id, responseType);
  }
  createReport(type: string, source: string, amount: number) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      reportType:
        type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport(
    type: string,
    id: string,
    body: { amount: number; source: string },
  ) {
    const responseType =
      type === ReportType.EXPENSE ? ReportType.EXPENSE : ReportType.INCOME;
    let report = findReport(data.report, id, responseType);
    const reportindex = data.report.findIndex((r: Report) => r.id === id);
    data.report[reportindex] = {
      ...report,
      ...body,
    };
    return report;
  }
  deleteReport(type: string, id: string) {
    const responseType =
      type === ReportType.EXPENSE ? ReportType.EXPENSE : ReportType.INCOME;
    let report = findReport(data.report, id, responseType);
    if (report) {
      const reportindex = data.report.findIndex((r: Report) => r.id === id);
      data.report.splice(reportindex, 1);
      return {};
    }
    return null;
  }
}
