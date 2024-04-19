import { type Metadata } from 'next'
import Image from 'next/image';
import Arnaknda_Map_SurveyNumbers from '@/images/Arnaknda_Map_SurveyNumbers.png'
export const metadata: Metadata = {
  title: 'Arnakonda | Choppadandi',
}
export default function Arnakonda() {
    return (
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        <div>
          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <a href="/telangana/karimnagar">
              <Image
                src={Arnaknda_Map_SurveyNumbers}
                alt="Map of Telangana"
                width="1879"
                height="1897"
                className="h-full w-full object-cover object-center"
              />
            </a>
          </div>
        </div>
        
          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <div className="px-8 sm:px-6 lg:px-8 pb-28 pt-20 sm:py-32">
              
              

              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-gray-900">Arnakonda Crops</h1>
                  <p className="mt-2 text-sm text-gray-700">A list of all the crops including their names and areas under cultivation.</p>
                </div>
              </div>
              <div>
                
          <div className='flex items-center justify-end gap-x-6'>
            <label className="text-base font-semibold text-gray-900 ce">Season</label>
            <fieldset className="mt-4">
              <legend className="sr-only">Notification method</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div className="flex items-center">
                  <input id="email" name="notification-method" type="radio" checked className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                  <label for="email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">Kharif</label>
                </div>
                <div className="flex items-center">
                  <input id="sms" name="notification-method" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                  <label for="sms" className="ml-3 block text-sm font-medium leading-6 text-gray-900">Rabi</label>
                </div>
              </div>
            </fieldset>
          </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300 text-center">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Crop Name</th>
                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Crop Area</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {[
                            { id: 1, name: 'Rice', area: '44 lakh ac.' },
                            { id: 2, name: 'Maize/Corn', area: '14 lakh ac.' },
                            { id: 3, name: 'Jowar/Sorghum', area: '1.20 lakh ac.' },
                            { id: 4, name: 'Cotton', area: '12.5 lakh ha.' },
                            { id: 5, name: 'Castor', area: '85,000 ha.' },
                            { id: 6, name: 'Groundnut', area: '2 lakh ac.' }
                          ].map(crop => (
                            <tr key={crop.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{crop.id}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop.name}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop.area}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  