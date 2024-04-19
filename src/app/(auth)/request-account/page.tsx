import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import Image from 'next/image'
import pjtsau_logo from '@/images/logos/pjtsau_logo.png'
export const metadata: Metadata = {
    title: 'Request Account',
}

export default function Contact() {
    return (
        <SlimLayout>
            <div className="flex">
            <Link href="#" aria-label="Home">
              <Image className="h-12 w-auto" src={pjtsau_logo} alt='' />
            </Link>
            </div>
            <h2 className="mt-20 text-lg font-semibold text-gray-900">Request an Account</h2>
            <p className="mt-2 text-sm text-gray-700">Interested in joining? Get in touch with us to request access.</p>
            <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                <TextField
                    label="Your Name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                />
                <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                <TextField
                    label="Reason for Request"
                    name="reason"
                    type="text"
                    required
                />
                <div>
                    <Button type="submit" variant="solid" color="blue" className="w-full">
                        <span>
                            Request Account <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    );
}
