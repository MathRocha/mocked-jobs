import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { JobDto } from './job.dto.js';
import { JobService } from './job.service.js';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('jobs')
  jobs(@Body() jobDto: JobDto) {
    return this.jobService.createJob(jobDto);
  }

  @Get('jobs/:id')
  getJob(@Param('id') id: string) {
    return this.jobService.getJob(id);
  }
}
