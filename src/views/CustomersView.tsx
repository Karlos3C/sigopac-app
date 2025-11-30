import { PhoneIcon, MapPinIcon, PencilIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CustomerDrawerForm from "../components/customers/CustomerDrawerForm";
import { useState } from "react";
import Pagination from "../components/ui/Pagination";

const data = [
    {
        "id": "CLI-001",
        "nombre": "Juan Pérez García",
        "telefono": "555-1234",
        "direccion": "Calle Hidalgo 123, Centro",
        "zona": "Centro",
        "deuda": 1250.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-002",
        "nombre": "María López Ruiz",
        "telefono": "555-5678",
        "direccion": "Av. Reforma 456, Norte",
        "zona": "Norte",
        "deuda": 0.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-003",
        "nombre": "Carlos Sánchez Mora",
        "telefono": "555-9012",
        "direccion": "Calle Morelos 789, Sur",
        "zona": "Sur",
        "deuda": 3450.00,
        "estado": "Suspendido"
    },
    {
        "id": "CLI-004",
        "nombre": "Ana Martínez Cruz",
        "telefono": "555-3456",
        "direccion": "Av. Juárez 321, Este",
        "zona": "Este",
        "deuda": 850.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-005",
        "nombre": "Roberto Díaz Luna",
        "telefono": "555-7890",
        "direccion": "Calle Allende 654, Oeste",
        "zona": "Oeste",
        "deuda": 0.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-006",
        "nombre": "Juan Pérez García",
        "telefono": "555-1234",
        "direccion": "Calle Hidalgo 123, Centro",
        "zona": "Centro",
        "deuda": 1250.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-007",
        "nombre": "María López Ruiz",
        "telefono": "555-5678",
        "direccion": "Av. Reforma 456, Norte",
        "zona": "Norte",
        "deuda": 0.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-008",
        "nombre": "Carlos Sánchez Mora",
        "telefono": "555-9012",
        "direccion": "Calle Morelos 789, Sur",
        "zona": "Sur",
        "deuda": 3450.00,
        "estado": "Suspendido"
    },
    {
        "id": "CLI-009",
        "nombre": "Ana Martínez Cruz",
        "telefono": "555-3456",
        "direccion": "Av. Juárez 321, Este",
        "zona": "Este",
        "deuda": 850.00,
        "estado": "Activo"
    },
    {
        "id": "CLI-010",
        "nombre": "Roberto Díaz Luna",
        "telefono": "555-7890",
        "direccion": "Calle Allende 654, Oeste",
        "zona": "Oeste",
        "deuda": 0.00,
        "estado": "Activo"
    }
];
export default function CustomersView() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <header className="mb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">Gestión de Clientes</h1>
                        <p className="text-gray-500">Administración de clientes del sistema</p>
                    </div>
                    <button type="button" className="bg-button-primary hover:bg-button-primary-hover text-white px-4 py-2 rounded cursor-pointer"
                        onClick={() => setOpenDrawer(true)}>
                        <PlusIcon className="w-4 h-4 inline-block mr-1" />
                        Nuevo Cliente
                    </button>
                </div>

                <form className="mt-5 flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input type="search" placeholder="Buscar por nombre, código o dirección..." className="bg-white w-full p-3 border border-gray-200 pl-10" />
                    </div>
                    <input type="submit" value="Filtrar" className="text-gray-600 border border-gray-300 px-4 py-2 font-medium flex justify-center items-center gap-2 hover:bg-gray-item rounded cursor-pointer hover:text-white" />
                </form>
            </header>
            <div>
                <div className="relative overflow-x-auto bg-white shadow-xs border border-gray-300 rounded">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-gray-200 border-b rounded border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Codigo
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Contacto
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Ubicación
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Localidad
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Adeudo
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Estado
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((cliente) => (
                                <tr key={cliente.id} className="bg-neutral-primary border-b border-gray-200 last:border-none whitespace-nowrap">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading ">
                                        {cliente.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {cliente.nombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">

                                            <PhoneIcon className="w-4 h-4 inline-block mr-1 text-gray-500" />
                                            {cliente.telefono}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">

                                            <MapPinIcon className="w-4 h-4 inline-block mr-1 text-gray-500" />
                                            {cliente.direccion}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {cliente.zona}
                                    </td>
                                    <td className="px-6 py-4">
                                        {cliente.deuda}
                                    </td>
                                    <td className="px-6 py-4">
                                        {cliente.estado}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-600 border border-gray-300 px-4 py-2 font-medium flex justify-center items-center gap-2 hover:bg-gray-50 rounded cursor-pointer" onClick={() => setOpenDrawer(true)}>
                                            <PencilIcon className="w-4 h-4 inline-block mr-1 text-gray-500" />
                                            Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
            <CustomerDrawerForm openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </>
    )
}
