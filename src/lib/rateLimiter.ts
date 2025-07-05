// lib/rateLimiter.ts
const RATE_LIMIT = 5; // max requests
const WINDOW_MS = 60 * 1000; // 1 minute

type IPRecord = {
  count: number;
  firstRequestTimestamp: number;
};

const ipStore = new Map<string, IPRecord>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, firstRequestTimestamp: now });
    return false;
  }

  const timeElapsed = now - record.firstRequestTimestamp;

  if (timeElapsed > WINDOW_MS) {
    ipStore.set(ip, { count: 1, firstRequestTimestamp: now });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count += 1;
  return false;
}