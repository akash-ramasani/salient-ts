export const CallToAction = () => (
  <div className="px-8 sm:px-6 lg:px-8 pb-28 pt-20 sm:py-32">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">Crops</h1>
        <p className="mt-2 text-sm text-gray-700">A list of all the crops including their names and areas under cultivation.</p>
      </div>
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
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Rice</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">44 lakh ac.</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Maize/Corn</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14 lakh ac.</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Jowar/Sorghum</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.20 lakh ac.</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">4</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Cotton</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12.5 lakh ha.</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Castor</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">85,000 ha.</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">6</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Groundnut</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 lakh ac.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
