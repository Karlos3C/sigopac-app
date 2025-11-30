
type StatisticsCardProps = {
    title: string;
    information: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    additional?: string | null;
};

const iconColorClasses: { [key: string]: string } = {
    gray: 'bg-gray-100 text-gray-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    blue: 'bg-blue-100 text-blue-600',
};

export default function StatisticsCard(props: StatisticsCardProps) {
    const Icon = props.icon;
    return (
        <div className="bg-white p-4 border border-gray-300 rounded">
            <div className="flex flex-row justify-between items-center mb-5">
                <h3 className="text-gray-500 font-medium text-lg">{props.title}</h3>
                <span className={`${iconColorClasses[props.iconColor]} p-2 rounded`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
            </div>
            <div className="space-y-2">
                <p className="font-bold text-4xl">{props.information}</p>
                <p className="text-gray-600 text-sm">{props.description}</p>
                {props.additional && <p className="text-green-600 text-sm font-medium">{props.additional}</p>}
            </div>
        </div>
    )
}
