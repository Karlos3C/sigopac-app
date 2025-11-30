import { BarsArrowUpIcon } from "@heroicons/react/24/outline";

export default function SettingsView() {
    return (
        <div>
            <header className="mb-5">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">Configuración del Sistema</h1>
                    <p className="text-gray-500">Generación de reportes administrativos</p>
                </div>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div className="bg-white p-5 rounded shadow">
                    <p className="py-3 font-medium">Datos del Organismo</p>
                    <form className="py-5 space-y-3">
                        <div>
                            <label htmlFor="organization" className="block mb-2 font-medium">Nombre del Organismo *</label>
                            <input type="text" id="organization" name="organization" className="border border-gray-300 bg-gray-50 w-full p-2 rounded-xs" placeholder="Ej. Organismo Operador de Agua Municipal" value={'Organismo Operador de Agua Municipal'} />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 font-medium">Dirección Oficial *</label>
                            <input type="text" id="address" name="address" className="border border-gray-300 bg-gray-50 w-full p-2 rounded-xs" placeholder="Ej. Av. Independencia 100, Centro" value={'Av. Independencia 100, Centro'} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                            <div>
                                <label htmlFor="phone" className="block mb-2 font-medium">Telefono *</label>
                                <input type="text" id="phone" name="phone" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 123-456-7890" value={'(555) 123-4567'} />
                            </div>
                            <div>
                                <label htmlFor="rfc" className="block mb-2 font-medium">RFC *</label>
                                <input type="text" id="rfc" name="rfc" className="border border-gray-300 w-full p-2 rounded-xs" value={'OOA123456ABC'} placeholder="Ej. XXXXXXXXXXXXX" />
                            </div>
                        </div>

                        <button type="submit" className="bg-button-primary hover:bg-button-primary-hover text-white py-2 px-5 rounded cursor-pointer w-full font-medium flex justify-center items-center">
                            <BarsArrowUpIcon className="w-5 h-5 inline-block mr-2" />
                            Guardar Cambios
                        </button>
                    </form>

                </div>
                <div className="bg-white p-5 rounded shadow">
                    <p className="py-3 font-medium">Parámetros de Cobranza</p>
                    <form className="py-5 space-y-3">
                        <div>
                            <label htmlFor="organization" className="block mb-2 font-medium">Tarifa Base Mensual *</label>
                            <input type="number" id="organization" name="organization" className="border border-gray-300 bg-gray-50 w-full p-2 rounded-xs" placeholder="Ej. 250.00" value={'250.00'} />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 font-medium">Meses a Precargar (Nuevo Cliente)</label>
                            <input type="text" id="address" name="address" className="border border-gray-300 bg-gray-50 w-full p-2 rounded-xs" placeholder="Ej. 3" value={'3'} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="address" className="block mb-2 font-medium">Prefijo de Folios *</label>
                            <input type="text" id="address" name="address" className="border border-gray-300 bg-gray-50 w-full p-2 rounded-xs" placeholder="Ej. PAG-2025-" value={'PAG-2025-'} />
                        </div>
                        <button type="submit" className="bg-button-primary hover:bg-button-primary-hover text-white py-2 px-5 rounded cursor-pointer w-full font-medium flex justify-center items-center">
                            <BarsArrowUpIcon className="w-5 h-5 inline-block mr-2" />
                            Guardar Parametros
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
