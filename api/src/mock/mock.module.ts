import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'MOCK_CONFIG',
      useValue: {
        idNumber: 123,
        jobs: [
          {
            id: 'job-123',
            text: 'Hello, welcome to the campus tour.',
            status: 'queued',
            createdAt: '2026-10-26T13:00:00Z',
            updatedAt: '2026-10-26T13:00:00Z',
          },
        ],
      },
    },
  ],
  exports: ['MOCK_CONFIG'],
})
export class MockModule {}
