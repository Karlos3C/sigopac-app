
import ProcrastinationTable from "../components/dashboard/ProcrastinationTable";
import RecentPaymentsTable from "../components/dashboard/RecentPaymentsTable";
import StatisticsCard from "../components/dashboard/StatisticsCard";
import { UserGroupIcon, CurrencyDollarIcon, ExclamationCircleIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const data = [
  {
    title: 'Total Clientes',
    information: '1,248',
    description: 'Activos: 1,034',
    icon: UserGroupIcon,
    iconColor: 'gray',
    additional: null
  },
  {
    title: 'Recaudación Mensual',
    information: '$54,320',
    description: 'Noviembre 2025',
    icon: CurrencyDollarIcon,
    iconColor: 'green',
    additional: null
  },
  {
    title: 'Deuda Acumulada',
    information: '$12,450',
    description: '234 cuentas con adeudo',
    icon: ExclamationCircleIcon,
    iconColor: 'yellow',
    additional: null
  },
  {
    title: 'Tasa de Cobranza',
    information: '92.5%',
    description: 'Efectividad del mes',
    iconColor: 'blue',
    icon: ArrowTrendingUpIcon,
    additional: '+3.2% vs mes anterior',
  }
]

export default function DashboardView() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <StatisticsCard
            key={index}
            title={item.title}
            information={item.information}
            description={item.description}
            icon={item.icon}
            iconColor={item.iconColor}
            additional={item.additional}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5">
        <RecentPaymentsTable />
        <ProcrastinationTable />
      </div>
    </div>
  )
}
