import Link from 'next/link'
import Image from 'next/image'
import pjtsau_logo from '@/images/logos/pjtsau_logo.png'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
      <Link href="#" aria-label="Home">
              <Image className="h-12 w-auto" src={pjtsau_logo} alt='' />
            </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Create account</h2>
      <p className="mt-2 text-sm text-gray-700">For authorized personnel only: Please proceed with caution when creating accounts.</p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Designation"
          name="designation"
          type="text"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="slate" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
