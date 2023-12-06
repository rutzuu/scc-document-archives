'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { studentInfoSchema, StudentInfo } from '../_data/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'

export default function NewStudentInfoPage() {
  const { toast } = useToast()
  const [formStep, setFormStep] = React.useState(0)
  const form = useForm<StudentInfo>({
    resolver: zodResolver(studentInfoSchema),
    defaultValues: {
      id: '',
      studentFullName: '',
      studentFirstName: '',
      studentLastName: '',
      studentMiddleName: '',
      studentEmail: '',
      studentMiddleInitial: '',
      studentGender: '',
      studentPhone: '',
      studentNationality: '',
      studentFacebook: '',
      fathersName: '',
      mothersName: '',
      dateOfRegistration: '',
      studentBirthdate: '',
      schoolLevel: '',
      course: '',
      yearLevel: '',
      section: '',
    },
  })

  function onSubmit(data: StudentInfo) {
    // if (data !== data) {
    //   toast({
    //     title: 'Data does not match',
    //     variant: 'destructive',
    //   })
    //   return
    // }
    alert(JSON.stringify(data, null, 4))
    console.log(data)
  }

  {
    /* TODO: Add new step form, refactor code referring to: 
      https://www.youtube.com/watch?v=uDCBSnWkuH0
      https://github.com/WebDevSimplified/react-multistep-form/blob/main/src/App.tsx
    */
  }
  {
    /* TODO: Add upload files function */
  }
  return (
    <div className='relative m-auto pt-36 h-full flex justify-center'>
      <Card className={'w-[800px] h-fit'}>
        <CardHeader>
          <CardTitle>Add New Student</CardTitle>
          <CardDescription>Fill in New Student Information</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='relative space-y-3 overflow-x-hidden h-fit pb-3'>
              <motion.div
                className={'space-y-3 px-4'}
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                }}>
                {/* student id */}
                <FormField
                  control={form.control}
                  name='id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your student ID...'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* name */}
                <div className='flex flex-1 space-x-4 justify-between'>
                  <FormField
                    control={form.control}
                    name='studentFirstName'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='First name...'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='studentLastName'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Last name...'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='studentMiddleName'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Middle name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Middle name...'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='py-4'>
                  <Separator />
                </div>
                <div className='flex space-x-4 justify-between'>
                  {/* email */}
                  <FormField
                    control={form.control}
                    name='studentEmail'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your email...'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name='studentPhone'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your Phone...'
                            {...field}
                            type='phone'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Gender */}
                  <FormField
                    control={form.control}
                    name='studentGender'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a gender' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {['Male', 'Female', 'Other'].map((gender) => {
                              return (
                                <SelectItem
                                  value={gender.toString()}
                                  key={gender}>
                                  {gender}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>
              <motion.div
                className={'absolute space-y-3 top-0 left-0 right-0 pb-3 px-4'}
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 + formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                }}>
                <div className='flex space-x-4 justify-between'>
                  {/* Nationality */}
                  <FormField
                    control={form.control}
                    name='studentNationality'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Nationality</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your nationality...'
                            {...field}
                            tabIndex={formStep == 1 ? 0 : -1}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Facebook */}
                  <FormField
                    control={form.control}
                    name='studentFacebook'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Facebook</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Facebook'
                            {...field}
                            tabIndex={formStep == 1 ? 0 : -1}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Father's Name */}
                <FormField
                  control={form.control}
                  name='fathersName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father's Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Father's Name"
                          {...field}
                          tabIndex={formStep == 1 ? 0 : -1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Mother's Name */}
                <FormField
                  control={form.control}
                  name='mothersName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mother's Name"
                          {...field}
                          tabIndex={formStep == 1 ? 0 : -1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <div className='flex flex-1 flex-col space-y-4 px-4'>
                <Button
                  type='button'
                  className={clsx('mx-4 mt-4', {
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(['studentEmail', 'studentFirstName', 'studentGender', 'id'])
                    const emailState = form.getFieldState('studentEmail')
                    const firstNameState = form.getFieldState('studentFirstName')
                    const lastNameState = form.getFieldState('studentLastName')
                    const middleNameState = form.getFieldState('studentMiddleName')
                    const genderState = form.getFieldState('studentGender')
                    const idState = form.getFieldState('id')

                    if (!emailState.isDirty || emailState.invalid) return
                    if (!firstNameState.isDirty || firstNameState.invalid) return
                    if (!lastNameState.isDirty || lastNameState.invalid) return
                    if (!middleNameState.isDirty || middleNameState.invalid) return
                    if (!genderState.isDirty || genderState.invalid) return
                    if (!idState.isDirty || idState.invalid) return

                    setFormStep(1)
                  }}>
                  Next Step
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
                <Button
                  type='submit'
                  className={clsx({
                    hidden: formStep == 0,
                  })}>
                  Submit
                </Button>

                <Button
                  type='button'
                  variant={'outline'}
                  onClick={() => {
                    setFormStep(0)
                  }}
                  className={clsx({
                    hidden: formStep == 0,
                  })}>
                  Go Back
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
