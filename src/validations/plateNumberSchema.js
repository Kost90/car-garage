import { z } from 'zod';

export const plateNumberSchema = z.object({
  plateNumber: z
    .string()
    .trim()
    .nonempty('Plate number is required')
    .regex(/^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$/i, 'Invalid UK registration format (e.g., AB12CDE)'),
});
