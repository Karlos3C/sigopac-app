
export default function DebtLocalityTable() {
    return (
        <div className=" p-5 bg-white rounded shadow mt-10">

            <div className="overflow-x-auto">
                <h3 className="text-lg font-medium">Deuda por Localidad</h3>
                <table className="w-full text-sm text-left rtl:text-right text-body mt-5 border border-gray-200 rounded-xs mb-5">
                    <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Localidad
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Clientes con Adeudo
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Meses Promedio
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Total Adeudo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                28 clientes
                            </td>
                            <td className="px-6 py-4">
                                2.3 meses
                            </td>
                            <td className="px-6 py-4">
                                $8,450.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Norte
                            </th>
                            <td className="px-6 py-4">
                                32 clientes
                            </td>
                            <td className="px-6 py-4">
                                3.1 meses
                            </td>
                            <td className="px-6 py-4">
                                $11,280.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Sur
                            </th>
                            <td className="px-6 py-4">
                                37 clientes
                            </td>
                            <td className="px-6 py-4">
                                4.2 meses
                            </td>
                            <td className="px-6 py-4">
                                $15,920.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Este
                            </th>
                            <td className="px-6 py-4">
                                29 clientes
                            </td>
                            <td className="px-6 py-4">
                                2.8 meses
                            </td>
                            <td className="px-6 py-4">
                                $9,340.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Oeste
                            </th>
                            <td className="px-6 py-4">
                                25 clientes
                            </td>
                            <td className="px-6 py-4">
                                2.5 meses
                            </td>
                            <td className="px-6 py-4">
                                $7,630.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b font-medium border-gray-200 last:border-none whitespace-nowrap bg-gray-50">
                            <th scope="row" className="px-6 py-4  text-heading ">
                                Total
                            </th>
                            <td className="px-6 py-4">
                                151 clientes
                            </td>
                            <td className="px-6 py-4">
                                3.0 meses
                            </td>
                            <td className="px-6 py-4">
                                $52,620.00
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
