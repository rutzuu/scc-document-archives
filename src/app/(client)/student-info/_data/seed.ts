import * as fs from 'fs'
import * as path from 'path'
import { faker } from '@faker-js/faker'

import { yearLevel, section, schoolLevels, courses } from '../_data/data'

function mock() {
  const mockGender = faker.person.sexType()
  const mockFirstName = faker.person.firstName(mockGender)
  const mockLastName = faker.person.lastName()
  const mockMiddleName = faker.person.middleName()
  const mockMiddleInitial = `${mockMiddleName.charAt(0)}.`
  const mockEmail = faker.helpers.unique(faker.internet.email, [mockFirstName, mockLastName])
  const mockFathersName = faker.person.fullName({ sex: 'male', lastName: mockLastName })
  const mockMothersName = faker.person.fullName({ sex: 'female', lastName: mockLastName })
  const mockSchoolLevel = faker.helpers.arrayElement(schoolLevels).value
  const mockCourse = mockSchoolLevel === 'tertiary' ? faker.helpers.arrayElement(courses).value : null
  return {
    id: faker.number.int({ min: 20220000, max: 20240000 }).toString(),
    studentFullName: `${mockLastName}, ${mockFirstName} ${mockMiddleName}`,
    studentFirstName: mockFirstName,
    studentLastName: mockLastName,
    studentMiddleName: mockMiddleName,
    studentMiddleInitial: mockMiddleInitial,
    studentEmail: mockEmail,
    studentGender: mockGender,
    studentPhone: faker.phone.number(),
    studentNationality: 'Filipino',
    studentFacebook: `https://www.facebook.com/${faker.internet.userName(mockFirstName, mockLastName)}`,
    fathersName: mockFathersName,
    mothersName: mockMothersName,
    dateOfRegistration: faker.date.past({ years: 1 }),
    studentBirthdate: faker.date.birthdate({ min: 18, max: 25, mode: 'age' }),
    schoolLevel: mockSchoolLevel,
    course: mockCourse,
    yearLevel: faker.helpers.arrayElement(yearLevel).value,
    section: faker.helpers.arrayElement(section).value,
  }
}

const studentInfo = Array.from({ length: 50 }, () => mock())

fs.writeFileSync(path.join(__dirname, 'student-info.json'), JSON.stringify(studentInfo, null, 2))

console.log('✅ student-info data generated.')
