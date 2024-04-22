"use client"

import { useState, useTransition } from "react"

import { CardWrapper } from "./card-wrapper"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/schemas"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

import { register } from "@/actions/register"

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      register(values).then((data) => {
        setError(data.Error)
        setSuccess(data.Success)
      })
    })
  }

  return (
    <div>
      <CardWrapper
        headerLabel='Create a new user'
        backButtonHref='/auth/login'
        backButtonLabel='Sign in'
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='space-y-3'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        id='name'
                        type='text'
                        placeholder='Name'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        id='email'
                        type='email'
                        placeholder='Email'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        id='password'
                        type='password'
                        placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type='submit'
              className='w-full font-semibold text-gray-800'
              variant='outline'
            >
              Register
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  )
}
