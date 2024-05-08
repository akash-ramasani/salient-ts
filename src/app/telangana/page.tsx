import { type Metadata } from 'next'

import Kharif_Rice_Areas from '@/Kharif_Rice_Areas.json'

export const metadata: Metadata = {
  title: 'Telangana Map',
}

export default function Telangana() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
      <div>
        <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
          <a href="/telangana/karimnagar">
            <img
              src="https://www.telangana.gov.in/wp-content/uploads/2023/09/Telangana-State-Map.png"
              alt="Map of Telangana"
              width="1879"
              height="1897"
              className="h-full w-full object-cover object-center"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
              <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Title</th>
                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Email</th>
                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Role</th>
                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Kharif_Rice_Areas.map(crop => (
                    <tr key={crop.District}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{crop.District}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop[2021].toFixed(2)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop[2022].toFixed(2)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop[2023].toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};