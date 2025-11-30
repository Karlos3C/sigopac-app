import { MapPinIcon } from "@heroicons/react/24/outline";

type CustomerFormProps = {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomerForm({ setOpenDrawer }: CustomerFormProps) {
    return (
        <form>
            <p className="border-b border-gray-300 py-3 font-medium">Informacion personal</p>
            <div className="py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium">Nombre *</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Guadalupe" />
                    </div>
                    <div>
                        <label htmlFor="surname" className="block mb-2 font-medium">Apellidos *</label>
                        <input type="text" id="surname" name="surname" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Cabrera" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">Teléfono *</label>
                        <input type="text" id="phone" name="phone" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 123-456-7890" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">Correo electrónico</label>
                        <input type="text" id="email" name="email" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. ejemplo@correo.com" />
                    </div>
                </div>
            </div>
            <p className="border-b border-gray-300 py-3 font-medium">Dirección</p>
            <div className="py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="address" className="block mb-2 font-medium">Calle *</label>
                        <input type="text" id="address" name="address" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Calle Falsa 123" />
                    </div>
                    <div>
                        <label htmlFor="ext_number" className="block mb-2 font-medium">Numero exterior *</label>
                        <input type="text" id="ext_number" name="ext_number" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 21" />
                    </div>
                    <div>
                        <label htmlFor="int_number" className="block mb-2 font-medium">Numero interior</label>
                        <input type="text" id="int_number" name="int_number" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 22b" />
                    </div>
                    <div>
                        <label htmlFor="neighborhood" className="block mb-2 font-medium">Colonia</label>
                        <input type="text" id="neighborhood" name="neighborhood" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Centro" />
                    </div>
                    <div>
                        <label htmlFor="locality" className="block mb-2 font-medium">Localidad/Zona/Sección</label>
                        <input type="text" id="locality" name="locality" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. La Calzada" />
                    </div>
                    <div>
                        <label htmlFor="postal_code" className="block mb-2 font-medium">Código Postal</label>
                        <input type="text" id="postal_code" name="postal_code" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 12345" />
                    </div>
                </div>
            </div>
            <p className="border-b border-gray-300 py-3 font-medium">Geolocalización</p>
            <div className="py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                    <div>
                        <label htmlFor="latitude" className="block mb-2 font-medium">Latitud *</label>
                        <input type="text" id="latitude" name="latitude" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 19.4326" />
                    </div>
                    <div>
                        <label htmlFor="longitude" className="block mb-2 font-medium">Longitud *</label>
                        <input type="text" id="longitude" name="longitude" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. -99.1332" />
                    </div>
                </div>
                <button className="text-center w-full p-3 border border-gray-300 font-medium flex justify-center items-center gap-2 hover:bg-gray-item rounded cursor-pointer hover:text-white">
                    <MapPinIcon className="inline-block w-5 h-5 mr-2" />
                    Obtener Ubicación Actual</button>
            </div>
            <p className="border-b border-gray-300 py-3 font-medium">Datos del Servicio</p>
            <div className="py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                    <div>
                        <label htmlFor="rate" className="block mb-2 font-medium">Tarifa *</label>
                        <input type="text" id="rate" name="rate" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Domestica" />
                    </div>
                    <div>
                        <label htmlFor="subrate" className="block mb-2 font-medium">Subtarifa *</label>
                        <input type="text" id="subrate" name="subrate" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. Regular" />
                    </div>
                    <div>
                        <label htmlFor="inhabitants" className="block mb-2 font-medium">No. Habitantes *</label>
                        <input type="number" id="inhabitants" name="inhabitants" className="border border-gray-300 w-full p-2 rounded-xs" placeholder="Ej. 4" />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 flex justify-end py-4 gap-4">
                <button type="button" onClick={() => setOpenDrawer(false)} className="text-center py-2 px-5 border border-gray-300 font-medium flex justify-center items-center gap-2 hover:bg-gray-item rounded cursor-pointer hover:text-white">Cancelar</button>
                <input type="submit" value="Registrar Cliente" className="bg-button-primary hover:bg-button-primary-hover text-white py-2 px-5 rounded cursor-pointer" />
            </div>
        </form>
    )
}
