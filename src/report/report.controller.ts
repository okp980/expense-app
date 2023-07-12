import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReportType } from 'src/data';
import { CreateReportDto, UpdateReportDto } from 'src/dto/report.dto';
import { ReportService } from './report.service';

@Controller('reports')
export class AllReportsController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllReports() {
    return this.reportService.getAllReports();
  }
}

@Controller('reports/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllReportsByType(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    return this.reportService.getAllReportsByType(type);
  }
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.reportService.getReportById(type, id);
  }
  @Post()
  createReport(
    @Body() { source, amount }: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    return this.reportService.createReport(type, source, amount);
  }
  @Put(':id')
  updateReport(
    @Body() body: UpdateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.reportService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.reportService.deleteReport(type, id);
  }
}
