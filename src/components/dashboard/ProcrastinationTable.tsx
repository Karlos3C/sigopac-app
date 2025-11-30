
export default function ProcrastinationTable() {
    return (
        <div className="bg-white p-5 mt-10 shadow border border-gray-300 rounded">
            <h3 className="mb-3 font-semibold text-lg">Estado de Cuentas por Localidad</h3>
            <div className="relative overflow-x-auto bg-white shadow-xs rounded border border-gray-100">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Localidad
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Clientes
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Morosidad
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                342
                            </td>
                            <td className="px-6 py-4">
                                8.2%
                            </td>
                            <td className="px-6 py-4">
                                <span className="border border-yellow-600 py-1 px-5 rounded-full bg-yellow-100 text-yellow-600">
                                    Bajo
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                342
                            </td>
                            <td className="px-6 py-4">
                                8.2%
                            </td>
                            <td className="px-6 py-4">
                                <span className="border border-blue-600 py-1 px-5 rounded-full bg-blue-100 text-blue-600">
                                    Revision
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                342
                            </td>
                            <td className="px-6 py-4">
                                8.2%
                            </td>
                            <td className="px-6 py-4">
                                <span className="border border-green-600 py-1 px-5 rounded-full bg-green-100 text-green-600">
                                    Óptimo
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                342
                            </td>
                            <td className="px-6 py-4">
                                8.2%
                            </td>
                            <td className="px-6 py-4">
                                <span className="border border-red-600 py-1 px-5 rounded-full bg-red-100 text-red-600">
                                    Critico
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Centro
                            </th>
                            <td className="px-6 py-4">
                                342
                            </td>
                            <td className="px-6 py-4">
                                8.2%
                            </td>
                            <td className="px-6 py-4">
                                <span className="border border-pink-600 py-1 px-5 rounded-full bg-pink-100 text-pink-600">
                                    Medio
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
