
export default function MonthlySummaryTable() {
    return (
        <div className=" p-5 bg-white rounded shadow mt-10">
            <div className="overflow-x-auto">
                <h3 className="text-lg font-medium">Resumen Mensual - Noviembre 2025</h3>
                <table className="w-full text-sm text-left rtl:text-right text-body mt-5 border border-gray-200 rounded-xs mb-5">
                    <thead className="text-sm text-body bg-gray-200 border-b rounded-lg border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Concepto
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Monto
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Total de Pagos Recibidos
                            </th>
                            <td className="px-6 py-4">
                                486 pagos
                            </td>
                            <td className="px-6 py-4">
                                $125,480.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading">
                                Pagos en Efectivo
                            </th>
                            <td className="px-6 py-4">
                                486 pagos
                            </td>
                            <td className="px-6 py-4">
                                $125,480.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                Descuentos Aplicados
                            </th>
                            <td className="px-6 py-4">
                                24 aplicaciones
                            </td>
                            <td className="px-6 py-4">
                                -$1,850.00
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary border-b font-medium border-gray-200 last:border-none whitespace-nowrap bg-gray-50">
                            <th scope="row" className="px-6 py-4  text-heading ">
                                Ingresos Netos
                            </th>
                            <td className="px-6 py-4">
                                510 transacciones
                            </td>
                            <td className="px-6 py-4">
                                $123,630.00
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
