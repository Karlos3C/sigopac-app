import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function BillingView() {
    return (
        <div>
            <header className="mb-5">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">Módulo de Cobranza</h1>
                    <p className="text-gray-500">Registro de pagos y cobros</p>
                </div>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-5 xl:gap-5">
                <section className="col-span-2 bg-white p-5 rounded shadow mb-5 xl:mb-0">
                    <h3 className="font-medium text-lg">Búsqueda de Cliente</h3>
                    <form className="mt-2 flex flex-col sm:flex-row gap-3">
                        <input type="search" placeholder="Código o Nombre del Cliente..." className="w-full p-3 border border-gray-200 bg-gray-50" />
                        <button type="button" className="text-gray-600 border border-gray-300 px-4 py-2 font-medium flex justify-center items-center gap-2 hover:bg-gray-item rounded cursor-pointer hover:text-white" ><MagnifyingGlassIcon className="h-4 w-4" /></button>
                    </form>

                    <div className="border border-gray-300 mt-5 p-4 rounded">
                        <div className="flex flex-row justify-between">
                            <h4 className="font-medium text-lg">Juan Pérez García</h4>
                            <span className="border border-green-600 py-0.5 px-5 bg-green-100 rounded-full text-green-600 font-medium">Activo</span>
                        </div>
                        <p className="text-gray-700 mb-1">CLI-001</p>
                        <p className="text-gray-700">Calle Hidalgo 123, Centro</p>
                        <p className="text-gray-700">Tel: 555-1234</p>
                    </div>

                    <ul className="bg-gray-100 mt-5 p-4 rounded space-y-2">
                        <li className="flex flex-row justify-between">
                            <p className="text-gray-500">Monto Mensual:</p>
                            <span className="font-bold">$250.00</span>
                        </li>
                        <li className="flex flex-row justify-between border-b border-gray-300 pb-2">
                            <p className="text-gray-500">Meses Adeudados:</p>
                            <span className="font-bold text-orange-500">5</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p className="font-bold text-xl">Total Adeudo:</p>
                            <span className="font-bold text-orange-500 text-xl">$1,250.00</span>
                        </li>
                    </ul>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-body mt-5 border border-gray-200 rounded-xs mb-5">
                            <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Folio
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Fecha
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Monto
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading">
                                        F-2025-001120
                                    </th>
                                    <td className="px-6 py-4">
                                        15/10/2025
                                    </td>
                                    <td className="px-6 py-4">
                                        $500.00
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading">
                                        F-2025-000998
                                    </th>
                                    <td className="px-6 py-4">
                                        10/09/2025
                                    </td>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                        F-2025-000854
                                    </th>
                                    <td className="px-6 py-4">
                                        05/08/2025
                                    </td>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </section>
                <form className="col-span-3 bg-white p-5 rounded shadow">
                    <h3 className="font-medium text-lg">Detalle de Adeudos</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-body mt-5 border border-gray-200 rounded-xs mb-5">
                            <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Periodo
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Monto
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Estado
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading">
                                        Junio 2025
                                    </th>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="border border-yellow-600 py-0.5 px-5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading">
                                        Julio 2025
                                    </th>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="border border-yellow-600 py-0.5 px-5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                        Agosto 2025
                                    </th>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="border border-yellow-600 py-0.5 px-5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                        Septiembre 2025
                                    </th>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="border border-yellow-600 py-0.5 px-5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                        Octubre 2025
                                    </th>
                                    <td className="px-6 py-4">
                                        $250.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="border border-yellow-600 py-0.5 px-5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="size-5" name="select_all" id="select_all" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="py-3 border-t border-gray-200">
                        <h3 className="font-medium text-lg">Información de Pago</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-3">
                            <div>
                                <label htmlFor="payment_folio" className="block mb-2 font-medium">Folio de Pago</label>
                                <input type="text" id="payment_folio" name="payment_folio" className="border border-gray-300 w-full p-2 rounded-xs disabled:bg-gray-100" value={'F-2025-001234'} disabled />
                            </div>
                            <div>
                                <label htmlFor="payment_date" className="block mb-2 font-medium">Fecha</label>
                                <input type="text" id="payment_date" name="payment_date" className="border border-gray-300 w-full p-2 rounded-xs disabled:bg-gray-100" value="10/01/2025" disabled />
                            </div>
                            <div>
                                <label htmlFor="discount" className="block mb-2 font-medium">Descuento (% o $)</label>
                                <input type="number" id="discount" name="discount" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 0.00" />
                            </div>
                            <div>
                                <label htmlFor="amount_received" className="block mb-2 font-medium">Monto Recibido</label>
                                <input type="number" id="amount_received" name="amount_received" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 0.00" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="amount_received" className="block mb-2 font-medium">Observaciones</label>
                            <textarea className="border border-gray-300 w-full p-2 rounded-xs" id="observations" name="observations" placeholder="Notas adicionales sobre el pago..."></textarea>
                        </div>
                    </div>
                    <ul className="bg-gray-100 my-3 p-4 rounded space-y-2">
                        <li className="flex flex-row justify-between">
                            <p className="text-gray-500">Subtotal:</p>
                            <span className="font-bold">$0.00</span>
                        </li>
                        <li className="flex flex-row justify-between border-b border-gray-300 pb-2">
                            <p className="text-gray-500">Descuento:</p>
                            <span className="font-bold text-red-500">- $0.00</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p className="font-bold text-2xl">Total a Pagar:</p>
                            <span className="font-bold text-cyan-700 text-2xl">$0.00</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p className="text-gray-500">Cambio:</p>
                            <span className="font-bold">$0.00</span>
                        </li>
                    </ul>
                    <div className="py-3 border-t border-gray-200">
                        <button className="w-full bg-button-primary hover:bg-button-primary-hover text-white p-3 font-medium rounded cursor-pointer">
                            <CurrencyDollarIcon className="h-5 w-5 inline-block mr-2" />
                            Registrar Pago
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
