"use client"

import { Card } from "@/components/ui/card"
import { Clock, ArrowUpRight, ArrowDownLeft, CheckCircle, AlertCircle } from "lucide-react"

interface Transaction {
  id: string
  fecha: string
  vault: string
  tipo: "Aporte" | "Retiro"
  monto: number
  activo: "USDC" | "XLM"
  estado: "Completada" | "Pendiente" | "Fallida"
}

export default function HistorialTransaccionesContent() {
  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: "tx_001",
      fecha: "2024-01-15",
      vault: "Viaje a Japón",
      tipo: "Aporte",
      monto: 250.0,
      activo: "USDC",
      estado: "Completada",
    },
    {
      id: "tx_002",
      fecha: "2024-01-14",
      vault: "Fondo de Emergencia",
      tipo: "Aporte",
      monto: 150.0,
      activo: "XLM",
      estado: "Completada",
    },
    {
      id: "tx_003",
      fecha: "2024-01-12",
      vault: "Moto Nueva",
      tipo: "Aporte",
      monto: 100.0,
      activo: "USDC",
      estado: "Pendiente",
    },
    {
      id: "tx_004",
      fecha: "2024-01-10",
      vault: "Casa de Playa Familiar",
      tipo: "Aporte",
      monto: 500.0,
      activo: "USDC",
      estado: "Completada",
    },
    {
      id: "tx_005",
      fecha: "2024-01-08",
      vault: "Vacaciones",
      tipo: "Retiro",
      monto: 75.0,
      activo: "XLM",
      estado: "Completada",
    },
    {
      id: "tx_006",
      fecha: "2024-01-05",
      vault: "Startup Tech",
      tipo: "Aporte",
      monto: 300.0,
      activo: "USDC",
      estado: "Completada",
    },
    {
      id: "tx_007",
      fecha: "2024-01-03",
      vault: "Viaje a Japón",
      tipo: "Aporte",
      monto: 250.0,
      activo: "USDC",
      estado: "Fallida",
    },
    {
      id: "tx_008",
      fecha: "2024-01-01",
      vault: "Fondo de Emergencia",
      tipo: "Aporte",
      monto: 200.0,
      activo: "XLM",
      estado: "Completada",
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  const getAssetColor = (asset: string) => {
    switch (asset) {
      case "USDC":
        return "bg-[#1B6AFF]/20 text-[#1B6AFF] border-[#1B6AFF]/30"
      case "XLM":
        return "bg-[#FF8C42]/20 text-[#FF8C42] border-[#FF8C42]/30"
      default:
        return "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#3A3A3A]"
    }
  }

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case "Completada":
        return "bg-[#00A86B]/20 text-[#00A86B] border-[#00A86B]/30"
      case "Pendiente":
        return "bg-[#FF8C42]/20 text-[#FF8C42] border-[#FF8C42]/30"
      case "Fallida":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#3A3A3A]"
    }
  }

  const getStatusIcon = (estado: string) => {
    switch (estado) {
      case "Completada":
        return <CheckCircle className="w-4 h-4" />
      case "Pendiente":
        return <Clock className="w-4 h-4" />
      case "Fallida":
        return <AlertCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const getTransactionIcon = (tipo: string) => {
    return tipo === "Aporte" ? (
      <ArrowDownLeft className="w-4 h-4 text-[#00A86B]" />
    ) : (
      <ArrowUpRight className="w-4 h-4 text-[#FF8C42]" />
    )
  }

  const getTransactionTypeColor = (tipo: string) => {
    return tipo === "Aporte" ? "text-[#00A86B]" : "text-[#FF8C42]"
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-sora">Historial de Transacciones</h2>
        <p className="text-[#F8F9FA]/70 font-inter">
          Revisa todas tus transacciones de aportes y retiros en tus vaults de ahorro
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#00A86B]/20 flex items-center justify-center">
              <ArrowDownLeft className="w-6 h-6 text-[#00A86B]" />
            </div>
            <div>
              <p className="text-sm text-[#F8F9FA]/70 font-inter">Total Aportes</p>
              <p className="text-2xl font-bold font-sora text-[#00A86B]">$1,750.00</p>
              <p className="text-xs text-[#F8F9FA]/50 font-inter">Este mes</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-[#FF8C42]" />
            </div>
            <div>
              <p className="text-sm text-[#F8F9FA]/70 font-inter">Total Retiros</p>
              <p className="text-2xl font-bold font-sora text-[#FF8C42]">$75.00</p>
              <p className="text-xs text-[#F8F9FA]/50 font-inter">Este mes</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#1B6AFF]/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#1B6AFF]" />
            </div>
            <div>
              <p className="text-sm text-[#F8F9FA]/70 font-inter">Transacciones</p>
              <p className="text-2xl font-bold font-sora text-[#1B6AFF]">{transactions.length}</p>
              <p className="text-xs text-[#F8F9FA]/50 font-inter">Total registradas</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="bg-[#2A2A2A] border-[#3A3A3A] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-[#3A3A3A] border-b border-[#4A4A4A]">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Fecha</th>
                <th className="text-left py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Vault</th>
                <th className="text-left py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Tipo</th>
                <th className="text-right py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Monto</th>
                <th className="text-center py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Activo</th>
                <th className="text-center py-4 px-6 text-sm font-semibold font-inter text-[#F8F9FA]">Estado</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#3A3A3A]">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-[#3A3A3A]/30 transition-colors duration-200">
                  {/* Fecha */}
                  <td className="py-4 px-6">
                    <span className="text-sm font-inter text-[#F8F9FA]">{formatDate(transaction.fecha)}</span>
                  </td>

                  {/* Vault */}
                  <td className="py-4 px-6">
                    <span className="text-sm font-inter text-[#F8F9FA] font-medium">{transaction.vault}</span>
                  </td>

                  {/* Tipo */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getTransactionIcon(transaction.tipo)}
                      <span className={`text-sm font-inter font-semibold ${getTransactionTypeColor(transaction.tipo)}`}>
                        {transaction.tipo}
                      </span>
                    </div>
                  </td>

                  {/* Monto */}
                  <td className="py-4 px-6 text-right">
                    <span className={`text-sm font-inter font-bold ${getTransactionTypeColor(transaction.tipo)}`}>
                      {transaction.tipo === "Aporte" ? "+" : "-"}
                      {formatCurrency(transaction.monto)}
                    </span>
                  </td>

                  {/* Activo */}
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${getAssetColor(transaction.activo)}`}
                    >
                      {transaction.activo}
                    </span>
                  </td>

                  {/* Estado */}
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(transaction.estado)}`}
                    >
                      {getStatusIcon(transaction.estado)}
                      <span>{transaction.estado}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State (if no transactions) */}
        {transactions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#F8F9FA]/50" />
            </div>
            <h3 className="text-lg font-bold font-sora mb-2 text-[#F8F9FA]">No hay transacciones aún</h3>
            <p className="text-[#F8F9FA]/70 font-inter">
              Tus transacciones aparecerán aquí una vez que comiences a usar tus vaults
            </p>
          </div>
        )}
      </Card>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <h3 className="text-lg font-bold font-sora text-[#F8F9FA] mb-4">Información</h3>
          <div className="space-y-3 text-sm font-inter">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" />
              <span className="text-[#F8F9FA]/70">
                <span className="text-[#00A86B] font-semibold">Completada:</span> Transacción procesada exitosamente
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#FF8C42]" />
              <span className="text-[#F8F9FA]/70">
                <span className="text-[#FF8C42] font-semibold">Pendiente:</span> Transacción en proceso de confirmación
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-[#F8F9FA]/70">
                <span className="text-red-400 font-semibold">Fallida:</span> Transacción no pudo ser procesada
              </span>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <h3 className="text-lg font-bold font-sora text-[#F8F9FA] mb-4">Tipos de Transacción</h3>
          <div className="space-y-3 text-sm font-inter">
            <div className="flex items-center space-x-2">
              <ArrowDownLeft className="w-4 h-4 text-[#00A86B]" />
              <span className="text-[#F8F9FA]/70">
                <span className="text-[#00A86B] font-semibold">Aporte:</span> Dinero añadido a un vault
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="w-4 h-4 text-[#FF8C42]" />
              <span className="text-[#F8F9FA]/70">
                <span className="text-[#FF8C42] font-semibold">Retiro:</span> Dinero retirado de un vault
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
