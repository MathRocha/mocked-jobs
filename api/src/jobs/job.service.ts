import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JobDto } from './job.dto.js';
import type { Mock } from '../mock/mock.js';

@Injectable()
export class JobService {
  constructor(@Inject('MOCK_CONFIG') private mock: Mock) {}

  createJob(jobDto: JobDto) {
    this.mock.idNumber++;
    const job = {
      id: `job-${this.mock.idNumber}`,
      text: jobDto.texto,
      status: 'queued',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.mock.jobs.push(job);
    return job;
  }

  async getJob(id: string) {
    const job = this.mock.jobs.find((j) => j.id === id);

    if (job) {
      return job;
    } else {
      throw new NotFoundException();
    }
  }
}
