import { CalendarIcon, DocumentTextIcon } from "@heroicons/react/24/outline"
import DownloadReportCard from "../components/reports/DownloadReportCard"
import MonthlySummaryTable from "../components/reports/MonthlySummaryTable"
import DebtLocalityTable from "../components/reports/DebtLocalityTable"

const data = [
    {
        title: 'Recaudación Mensual',
        description: 'Reporte de ingresos del periodo actual',
        icon: DocumentTextIcon,
        iconColor: 'gray',
        url: '/'
    },
    {
        title: 'Cuentas por Cobrar',
        description: 'Listado de adeudos pendientes',
        icon: DocumentTextIcon,
        iconColor: 'orange',
        url: '/'
    },
    {
        title: 'Histórico de Pagos',
        description: 'Registro completo de transacciones',
        icon: CalendarIcon,
        iconColor: 'gray',
        url: '/'
    },
]

export default function ReportsView() {
    return (
        <div>
            <header className="mb-5">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">Reportes y Estadísticas</h1>
                    <p className="text-gray-500">Generación de reportes administrativos</p>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.map((item) => (
                    <DownloadReportCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        iconColor={item.iconColor}
                        url={item.url}
                    />
                ))}
            </div>
            <MonthlySummaryTable />
            <DebtLocalityTable />
        </div>
    )
}
