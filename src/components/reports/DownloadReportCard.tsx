import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type DownloadReportCardProps = {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    url: string;
};

const iconColorClasses: { [key: string]: string } = {
    gray: 'bg-gray-100 text-gray-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    orange: 'bg-orange-100 text-orange-600',
    blue: 'bg-blue-100 text-blue-600',
};

export default function DownloadReportCard(props: DownloadReportCardProps) {
    const Icon = props.icon;
    return (
        <div className="bg-white p-4 border border-gray-300 rounded">
            <div className="flex flex-row items-center justify-between">
                <span className={`${iconColorClasses[props.iconColor]} p-2 rounded`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <a href={props.url} >
                    <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
                </a>
            </div>
            <div className="space-y-1 mt-5">
                <h3 className="text-lg font-medium">{props.title}</h3>
                <p className="text-gray-500">{props.description}</p>
            </div>
        </div>
    )
}
