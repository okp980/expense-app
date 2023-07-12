import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  getTotal() {
    return (
      this.getSumaryByType(ReportType.INCOME) -
      this.getSumaryByType(ReportType.EXPENSE)
    );
  }
  getSumaryByType(type: ReportType) {
    return this.reportService
      .getAllReportsByType(type)
      .reduce((prev, currValue) => prev + currValue.amount, 0);
  }
}
