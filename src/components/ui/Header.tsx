import { Bars3Icon } from "@heroicons/react/24/solid";

type HeaderProps = {
    setVisible: (visible: boolean) => void;
};

export default function Header({ setVisible }: HeaderProps) {
    return (
        <>
            <div className="bg-white border border-gray-200 shadow">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <button
                            className="p-2 lg:hidden"
                            onClick={() => setVisible(true)}
                        >
                            <Bars3Icon className="w-6 h-6 text-gray-600" />
                        </button>

                        <p className="text-base lg:text-xl font-medium text-gray-600">Sistema de Gestión Operativa y Pagos de Agua</p>
                    </div>
                    <div className="hidden lg:flex flex-row gap-3 items-center">
                        <div className="text-sm">
                            <p className="font-bold">Carlos Cabrera Carreon</p>
                            <p className="font-light text-gray-500">carlos@correo.falso.com</p>
                        </div>
                        <div
                            className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-medium shadow-sm"
                            aria-label="Avatar de Carlos Cabrera"
                            title="Carlos Cabrera"
                        >
                            C
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}