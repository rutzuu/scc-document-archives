'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import * as z from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import logo from 'public/scc-online-logo.svg'

const loginFormSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, { message: 'Username must be alphanumeric' })
    .min(3, { message: 'Username must be at least 2 characters long' })
    .max(25, { message: 'Username must be less than 25 characters long' }),
  password: z.string().min(8).max(25),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

export default function HomePage() {
  //Define form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  //Define submit handler
  function onSubmit(values: LoginFormValues) {
    console.log(values)
  }

  return (
    <div className='h-full'>
      <div className='flex flex-reverse w-full justify-end p-8'>
        <ModeToggle></ModeToggle>
      </div>
      <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div>
            <Image
              src={logo}
              className='mx-auto h-40 w-auto rounded-lg border-2 shadow-sm'
              width={240}
              height={240}
              alt='Your Company'
            />
          </div>
          <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-foreground'>
            SCC Document Archives
          </h2>
        </div>

        <Card className='mt-10 mx-8 sm:mx-auto sm:w-full sm:max-w-[480px]'>
          <CardHeader>
            <CardTitle className='mt-6 px-0 sm:px-6'>Sign in to your account</CardTitle>
          </CardHeader>
          <div className='bg-card px-6 pb-12 shadow sm:rounded-lg sm:px-12'>
            <Form {...form}>
              <form
                className='space-y-6'
                onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className='block w-full'
                          placeholder='Username'
                          autoComplete='username'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          className='block w-full'
                          placeholder='Password'
                          autoComplete='current-password'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Checkbox
                      id='remember-me'
                      name='remember-me'
                    />
                    <Label
                      htmlFor='remember-me'
                      className='ml-2'>
                      Remember me
                    </Label>
                  </div>

                  <div className='text-sm leading-6 m-0'>
                    <Button
                      variant='link'
                      size='smNone'>
                      <Link href='#'>Forgot password?</Link>
                    </Button>
                  </div>
                </div>

                <Button
                  type='submit'
                  className='flex w-full'>
                  <Link href='/dashboard'>Sign in</Link>
                </Button>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  )
}
