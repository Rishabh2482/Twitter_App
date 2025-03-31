// These folders files are validating based on request not based on database validation. 
import {z} from 'zod';

export const tweetZodSchema = z.object({
    body: z.string().min(1).max(280)
})