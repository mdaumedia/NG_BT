import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://localhost:4400' },
  reporter: [['list']],
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }]
});
