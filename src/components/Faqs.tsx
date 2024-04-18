import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What data does TAIS provide?',
      answer:
        'TAIS provides various agricultural data including crop details, weather forecasts, soil health information, and market trends.',
    },
    {
      question: 'How can I access TAIS?',
      answer: 'You can access TAIS by logging in with your authorized credentials provided by the agriculture department.',
    },
    {
      question: 'Is TAIS available on mobile devices?',
      answer:
        'Yes, TAIS is accessible on mobile devices through its responsive web interface or dedicated mobile application.',
    },
  ],
  [
    {
      question: 'Can I customize the data displayed on TAIS?',
      answer:
        'Yes, TAIS allows users to customize their dashboard and select the specific agricultural data they want to view.',
    },
    {
      question:
        'Does TAIS provide real-time updates?',
      answer:
        'Yes, TAIS provides real-time updates on crop conditions, weather changes, and market fluctuations to aid in decision-making.',
    },
    {
      question:
        'Is TAIS suitable for small-scale farmers?',
      answer:
        'Yes, TAIS caters to the needs of all farmers, including small-scale farmers, by providing user-friendly tools and information.',
    },
  ],
  [
    {
      question: 'How secure is the data on TAIS?',
      answer:
        'TAIS employs robust security measures to ensure the confidentiality and integrity of agricultural data, including encryption and access controls.',
    },
    {
      question: 'Can I export data from TAIS for analysis?',
      answer: 'Yes, TAIS allows users to export agricultural data in various formats for further analysis and reporting purposes.',
    },
    {
      question: 'Is TAIS supported by the government?',
      answer:
        'Yes, TAIS is supported by the government of Telangana as part of its initiatives to modernize agriculture and improve farmer livelihoods.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
