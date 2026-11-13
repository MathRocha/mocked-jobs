import { Module } from '@nestjs/common';
import { MockModule } from './mock/mock.module.js';
import { JobModule } from './jobs/job.module.js';

@Module({
  imports: [MockModule, JobModule],
})
export class AppModule {}
