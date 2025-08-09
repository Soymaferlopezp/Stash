import { Card } from "@/components/ui/card"

export default function VaultCard({ vault }: { vault: any }) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
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

  return (
    <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 hover:border-[#00A86B]/30 hover:shadow-lg hover:shadow-[#00A86B]/10 transition-all duration-300 cursor-pointer group">
      <div className="space-y-4">
        {/* Header with name and asset */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold font-sora text-[#F8F9FA] group-hover:text-[#00A86B] transition-colors duration-200">
              {vault.name}
            </h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getAssetColor(vault.asset)}`}>
            {vault.asset}
          </div>
        </div>

        {/* Amount Display */}
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold font-sora text-[#00A86B]">{formatCurrency(vault.currentAmount)}</span>
            <span className="text-sm text-[#F8F9FA]/50 font-inter">/ {formatCurrency(vault.goalAmount)}</span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#F8F9FA]/70 font-inter">Progreso</span>
              <span className="text-xs text-[#00A86B] font-semibold">{vault.progress}%</span>
            </div>
            <div className="w-full bg-[#3A3A3A] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#00A86B] to-[#1B6AFF] h-2 rounded-full transition-all duration-500 group-hover:shadow-sm group-hover:shadow-[#00A86B]/50"
                style={{ width: `${vault.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs text-[#F8F9FA]/50 font-inter pt-2 border-t border-[#3A3A3A]">
          <span>Restante: {formatCurrency(vault.goalAmount - vault.currentAmount)}</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#00A86B] rounded-full"></div>
            <span>Personal</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
