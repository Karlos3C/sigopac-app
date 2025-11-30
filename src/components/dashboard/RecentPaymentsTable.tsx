
export default function RecentPaymentsTable() {
    return (
        <div className="bg-white p-5 mt-10 shadow border border-gray-300 rounded">
            <h3 className="mb-3 font-semibold text-lg">Últimos Pagos Registrados</h3>
            <div className="relative overflow-x-auto bg-white shadow-xs rounded border border-gray-100">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Folio
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Cliente
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Monto
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                PAG-2025-001
                            </th>
                            <td className="px-6 py-4">
                                Juan Pérez García
                            </td>
                            <td className="px-6 py-4">
                                $1,250.00
                            </td>
                            <td className="px-6 py-4">
                                26/11/2025 10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                PAG-2025-001
                            </th>
                            <td className="px-6 py-4">
                                Juan Pérez García
                            </td>
                            <td className="px-6 py-4">
                                $1,250.00
                            </td>
                            <td className="px-6 py-4">
                                26/11/2025 10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                PAG-2025-001
                            </th>
                            <td className="px-6 py-4">
                                Juan Pérez García
                            </td>
                            <td className="px-6 py-4">
                                $1,250.00
                            </td>
                            <td className="px-6 py-4">
                                26/11/2025 10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                PAG-2025-001
                            </th>
                            <td className="px-6 py-4">
                                Juan Pérez García
                            </td>
                            <td className="px-6 py-4">
                                $1,250.00
                            </td>
                            <td className="px-6 py-4">
                                26/11/2025 10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                PAG-2025-001
                            </th>
                            <td className="px-6 py-4">
                                Juan Pérez García
                            </td>
                            <td className="px-6 py-4">
                                $1,250.00
                            </td>
                            <td className="px-6 py-4">
                                26/11/2025 10:30 AM
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
