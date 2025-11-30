import { BanknotesIcon, ChartBarIcon, Cog8ToothIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

type SidebarMenuProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const links = [
    { name: "Panel de Control", href: "/", icon: HomeIcon },
    { name: "Clientes", href: "/customers", icon: UserGroupIcon },
    { name: "Cobranza", href: "/billing", icon: BanknotesIcon },
    { name: "Reportes", href: "/reports", icon: ChartBarIcon },
    { name: "Configuración", href: "/settings", icon: Cog8ToothIcon },
]

export default function SidebarMenu({ visible, setVisible }: SidebarMenuProps) {
    const location = useLocation();
    const classesVisible = visible ? "translate-x-0" : "-translate-x-full";

    return (
        <>
            {visible && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setVisible(false)}
                ></div>
            )}

            <aside className={`fixed lg:static top-0 left-0 h-full z-50 bg-gray-sidebar p-4 w-64 lg:min-w-80 transform transition-transform duration-300 ease-in-out ${classesVisible} lg:translate-x-0 h-screen`}>
                <header className="my-5 p-1">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                        <BanknotesIcon className="w-6 h-6 text-white" />
                        SIGOPAC
                    </h2>
                    <p className="text-gray-400">
                        Sistema de Clientes y Cobranza
                    </p>
                </header>
                <p className="text-gray-400 p-1 mb-2">Menú Principal</p>
                <ul className="space-y-2">
                    {links.map(link => (
                        <li key={link.name} className={classNames(
                            "block p-2 rounded hover:bg-gray-700 text-white",
                            location.pathname === link.href ? "bg-gray-item " : "text-gray-300"
                        )}>
                            <Link to={link.href} className="w-full flex items-center gap-2">
                                <link.icon className="w-6 h-6" />
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}
