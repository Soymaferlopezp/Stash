"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Plus, Users, Lock, Calendar, DollarSign, Trash2 } from "lucide-react"

interface CrearVaultContentProps {
  initialTab?: "privado" | "colaborativo"
}

export default function CrearVaultContent({ initialTab = "privado" }: CrearVaultContentProps) {
  const [activeTab, setActiveTab] = useState<"privado" | "colaborativo">(initialTab)
  const [formData, setFormData] = useState({
    nombre: "",
    metaAhorro: "",
    asset: "USDC",
    aiGoal: "",
    participants: [] as string[],
    newParticipant: "",
    lockLogic: "date" as "date" | "amount",
    lockDate: "",
    lockAmount: "",
  })
  const [isGeneratingAI, setIsGeneratingAI] = useState(false)
  const [aiStrategy, setAiStrategy] = useState<any>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddParticipant = () => {
    if (formData.newParticipant.trim() && !formData.participants.includes(formData.newParticipant.trim())) {
      setFormData((prev) => ({
        ...prev,
        participants: [...prev.participants, prev.newParticipant.trim()],
        newParticipant: "",
      }))
    }
  }

  const handleRemoveParticipant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants.filter((_, i) => i !== index),
    }))
  }

  const handleGenerateAIStrategy = async () => {
    if (!formData.aiGoal.trim()) return

    setIsGeneratingAI(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mockStrategy = {
      recommendedAmount: "$277.78",
      frequency: "Mensual",
      duration: "18 meses",
    }

    setAiStrategy(mockStrategy)
    setIsGeneratingAI(false)
  }

  const handleCreateVault = () => {
    // Simulate vault creation
    const vaultType = activeTab === "privado" ? "Vault Privado" : "Vault Colaborativo"
    alert(`¡${vaultType} "${formData.nombre}" creado exitosamente!`)
  }

  const isFormValid = () => {
    if (!formData.nombre.trim() || !formData.metaAhorro.trim()) return false
    if (activeTab === "colaborativo" && formData.participants.length === 0) return false
    return true
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-sora">Crear un Nuevo Vault</h2>
      </div>

      {/* Tab Selector */}
      <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("privado")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold font-inter transition-all duration-200 ${
              activeTab === "privado"
                ? "bg-[#00A86B] text-white shadow-lg"
                : "text-[#F8F9FA]/70 hover:text-[#F8F9FA] hover:bg-[#3A3A3A]"
            }`}
          >
            Vault Privado
          </button>
          <button
            onClick={() => setActiveTab("colaborativo")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold font-inter transition-all duration-200 ${
              activeTab === "colaborativo"
                ? "bg-[#1B6AFF] text-white shadow-lg"
                : "text-[#F8F9FA]/70 hover:text-[#F8F9FA] hover:bg-[#3A3A3A]"
            }`}
          >
            Vault Colaborativo
          </button>
        </div>
      </Card>

      {/* Form Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Form */}
        <div className="space-y-6">
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-sora text-[#F8F9FA]">Información Básica</h3>

              {/* Nombre del Vault */}
              <div className="space-y-2">
                <label className="text-sm font-semibold font-inter text-[#F8F9FA]">Nombre del Vault</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  placeholder="Ej: Viaje a Japón, Fondo de Emergencia"
                  className="w-full bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#00A86B]/50 focus:border-[#00A86B]/50 transition-all duration-200"
                />
              </div>

              {/* Meta de Ahorro */}
              <div className="space-y-2">
                <label className="text-sm font-semibold font-inter text-[#F8F9FA]">Meta de Ahorro (USD)</label>
                <input
                  type="number"
                  value={formData.metaAhorro}
                  onChange={(e) => handleInputChange("metaAhorro", e.target.value)}
                  placeholder="5000"
                  className="w-full bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#00A86B]/50 focus:border-[#00A86B]/50 transition-all duration-200"
                />
              </div>

              {/* Asset Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold font-inter text-[#F8F9FA]">Activo</label>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleInputChange("asset", "USDC")}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold font-inter transition-all duration-200 border ${
                      formData.asset === "USDC"
                        ? "bg-[#1B6AFF]/20 text-[#1B6AFF] border-[#1B6AFF]/50"
                        : "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#4A4A4A] hover:border-[#1B6AFF]/30"
                    }`}
                  >
                    USDC
                  </button>
                  <button
                    onClick={() => handleInputChange("asset", "XLM")}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold font-inter transition-all duration-200 border ${
                      formData.asset === "XLM"
                        ? "bg-[#FF8C42]/20 text-[#FF8C42] border-[#FF8C42]/50"
                        : "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#4A4A4A] hover:border-[#FF8C42]/30"
                    }`}
                  >
                    XLM
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Collaborative Vault Specific Fields */}
          {activeTab === "colaborativo" && (
            <>
              {/* Participants Section */}
              <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold font-sora text-[#F8F9FA] flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Participantes</span>
                  </h3>

                  {/* Add Participant */}
                  <div className="space-y-4">
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={formData.newParticipant}
                        onChange={(e) => handleInputChange("newParticipant", e.target.value)}
                        placeholder="Dirección Stellar (Ej: GABC...1234)"
                        className="flex-1 bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#1B6AFF]/50 focus:border-[#1B6AFF]/50 transition-all duration-200"
                      />
                      <Button
                        onClick={handleAddParticipant}
                        disabled={!formData.newParticipant.trim()}
                        className="bg-[#1B6AFF] hover:bg-[#1B6AFF]/90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Participants List */}
                    {formData.participants.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold font-inter text-[#F8F9FA]">
                          Participantes ({formData.participants.length})
                        </p>
                        <div className="space-y-2">
                          {formData.participants.map((participant, index) => (
                            <div key={index} className="flex items-center justify-between bg-[#3A3A3A] rounded-lg p-3">
                              <span className="text-sm font-inter text-[#F8F9FA] truncate">{participant}</span>
                              <button
                                onClick={() => handleRemoveParticipant(index)}
                                className="text-[#FF8C42] hover:text-[#FF8C42]/80 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Lock Logic Section */}
              <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold font-sora text-[#F8F9FA] flex items-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span>Lógica de Bloqueo</span>
                  </h3>

                  {/* Lock Type Selection */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleInputChange("lockLogic", "date")}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold font-inter transition-all duration-200 border flex items-center justify-center space-x-2 ${
                        formData.lockLogic === "date"
                          ? "bg-[#1B6AFF]/20 text-[#1B6AFF] border-[#1B6AFF]/50"
                          : "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#4A4A4A] hover:border-[#1B6AFF]/30"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Por Fecha</span>
                    </button>
                    <button
                      onClick={() => handleInputChange("lockLogic", "amount")}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold font-inter transition-all duration-200 border flex items-center justify-center space-x-2 ${
                        formData.lockLogic === "amount"
                          ? "bg-[#1B6AFF]/20 text-[#1B6AFF] border-[#1B6AFF]/50"
                          : "bg-[#3A3A3A] text-[#F8F9FA]/70 border-[#4A4A4A] hover:border-[#1B6AFF]/30"
                      }`}
                    >
                      <DollarSign className="w-4 h-4" />
                      <span>Por Monto</span>
                    </button>
                  </div>

                  {/* Lock Configuration */}
                  {formData.lockLogic === "date" ? (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-inter text-[#F8F9FA]">Fecha de Desbloqueo</label>
                      <input
                        type="date"
                        value={formData.lockDate}
                        onChange={(e) => handleInputChange("lockDate", e.target.value)}
                        className="w-full bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter focus:outline-none focus:ring-2 focus:ring-[#1B6AFF]/50 focus:border-[#1B6AFF]/50 transition-all duration-200"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-inter text-[#F8F9FA]">
                        Monto de Desbloqueo (USD)
                      </label>
                      <input
                        type="number"
                        value={formData.lockAmount}
                        onChange={(e) => handleInputChange("lockAmount", e.target.value)}
                        placeholder="10000"
                        className="w-full bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#1B6AFF]/50 focus:border-[#1B6AFF]/50 transition-all duration-200"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </>
          )}
        </div>

        {/* AI Assistant Section (Only for Private Vaults) */}
        {activeTab === "privado" && (
          <div className="space-y-6">
            <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-sora text-[#F8F9FA] flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-[#FF8C42]" />
                  <span>Asistente de IA</span>
                  <span className="text-xs bg-[#FF8C42]/20 text-[#FF8C42] px-2 py-1 rounded-full font-inter">
                    Opcional
                  </span>
                </h3>

                <p className="text-sm text-[#F8F9FA]/70 font-inter">
                  Describe tu meta en lenguaje natural y la IA te sugerirá una estrategia de ahorro.
                </p>

                <textarea
                  value={formData.aiGoal}
                  onChange={(e) => handleInputChange("aiGoal", e.target.value)}
                  placeholder="Ej: Quiero ahorrar para una moto nueva en 18 meses"
                  className="w-full h-24 bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/50 focus:border-[#FF8C42]/50 resize-none transition-all duration-200"
                />

                <Button
                  onClick={handleGenerateAIStrategy}
                  disabled={!formData.aiGoal.trim() || isGeneratingAI}
                  className="w-full bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Brain className="w-4 h-4" />
                  <span>{isGeneratingAI ? "Generando Estrategia..." : "Generar Estrategia con IA"}</span>
                  {isGeneratingAI && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                </Button>

                {/* AI Strategy Output */}
                {aiStrategy && (
                  <div className="bg-[#3A3A3A]/50 rounded-xl p-4 space-y-3">
                    <h4 className="text-sm font-semibold font-inter text-[#FF8C42]">Estrategia Sugerida</h4>
                    <div className="space-y-2 text-sm font-inter">
                      <div className="flex justify-between">
                        <span className="text-[#F8F9FA]/70">Ahorro recomendado:</span>
                        <span className="text-[#F8F9FA]">{aiStrategy.recommendedAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#F8F9FA]/70">Frecuencia:</span>
                        <span className="text-[#F8F9FA]">{aiStrategy.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#F8F9FA]/70">Duración estimada:</span>
                        <span className="text-[#F8F9FA]">{aiStrategy.duration}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Create Button */}
      <div className="flex justify-center pt-6">
        <Button
          onClick={handleCreateVault}
          disabled={!isFormValid()}
          className={`px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
            activeTab === "privado"
              ? "bg-[#00A86B] hover:bg-[#00A86B]/90 text-white"
              : "bg-[#1B6AFF] hover:bg-[#1B6AFF]/90 text-white"
          }`}
        >
          {activeTab === "privado" ? "Crear Vault" : "Crear Vault Colaborativo"}
        </Button>
      </div>
    </div>
  )
}
