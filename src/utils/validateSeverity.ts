const allowedSeverities = ['Low', 'Medium', 'High'] as const;

export type Severity = (typeof allowedSeverities)[number];

export const isValidSeverity = (value: string): value is Severity => {
  return allowedSeverities.includes(value as Severity);
};
