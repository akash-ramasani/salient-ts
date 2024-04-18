export function Stats() {
    return (
        <section id="stats">
            <div className="bg-white py-16 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Telangana Area</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">114,840 km²</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Area sown in the Telangana</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">53.51 lakh ha</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Farmers in State</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">58.33 lakh</dd>
                    </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}