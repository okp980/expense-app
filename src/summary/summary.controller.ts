import { Controller, Get, Param, ParseEnumPipe } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { type } from 'os';
import { ReportType } from 'src/data';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  getTotal() {
    return this.summaryService.getTotal();
  }
  @Get(':type')
  getSummary(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType) {
    return this.summaryService.getSumaryByType(type);
  }
}
