import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const studentInfoSchema = z.object({
  id: z.string(),
  studentFullName: z.string(),
  studentFirstName: z.string(),
  studentLastName: z.string(),
  studentMiddleName: z.string(),
  studentMiddleInitial: z.string(),
  studentEmail: z.string(),
  studentGender: z.string(),
  studentPhone: z.string(),
  studentNationality: z.string(),
  studentFacebook: z.string(),
  fathersName: z.string(),
  mothersName: z.string(),
  dateOfRegistration: z.string(),
  studentBirthdate: z.string(),
  schoolLevel: z.string(),
  course: z.string(),
  yearLevel: z.string(),
  section: z.string(),
})

export type StudentInfo = z.infer<typeof studentInfoSchema>
