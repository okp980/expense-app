import { Module } from '@nestjs/common';
import { AllReportsController, ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  controllers: [ReportController, AllReportsController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
