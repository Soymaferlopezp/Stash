"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Sparkles, Target, Calendar, DollarSign, Coins } from "lucide-react"

export default function AsistenteIAContent() {
  const [userInput, setUserInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [strategy, setStrategy] = useState<any>(null)

  const handleGenerateStrategy = async () => {
    if (!userInput.trim()) return

    setIsGenerating(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Generate mock strategy based on input
    const mockStrategy = {
      goal: extractGoalFromInput(userInput),
      monthlyAmount: "$277.78",
      recommendedAsset: "USDC",
      duration: "18 meses",
      totalAmount: "$5,000",
      explanation:
        "Basado en tu meta, te recomendamos ahorrar de forma constante en USDC para minimizar la volatilidad y alcanzar tu objetivo de manera predecible.",
    }

    setStrategy(mockStrategy)
    setIsGenerating(false)
  }

  const extractGoalFromInput = (input: string) => {
    // Simple extraction logic for demo
    if (input.toLowerCase().includes("moto")) return "$5,000 para una moto"
    if (input.toLowerCase().includes("viaje")) return "Viaje soñado"
    if (input.toLowerCase().includes("casa")) return "Casa propia"
    return "Meta de ahorro personalizada"
  }

  const handleApplyPlan = () => {
    // This would typically navigate to vault creation with pre-filled data
    alert("¡Plan aplicado! Te redirigiremos a crear tu vault.")
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
            <Brain className="w-6 h-6 text-[#FF8C42]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-sora">Asistente de IA</h2>
            <p className="text-[#F8F9FA]/70 font-inter">
              Describe tu meta de ahorro en lenguaje natural y nuestro asistente de IA te propondrá una estrategia
              viable de DCA.
            </p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="goal-input" className="text-lg font-semibold font-sora text-[#F8F9FA]">
              Describe tu meta de ahorro
            </label>
            <textarea
              id="goal-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Quiero ahorrar $5,000 para una moto en 18 meses"
              className="w-full h-32 bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/50 focus:border-[#FF8C42]/50 resize-none transition-all duration-200"
            />
          </div>

          <Button
            onClick={handleGenerateStrategy}
            disabled={!userInput.trim() || isGenerating}
            className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Brain className="w-5 h-5" />
            <span>{isGenerating ? "Generando Estrategia..." : "Generar Estrategia"}</span>
            {isGenerating && (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            )}
          </Button>
        </div>
      </Card>

      {/* AI Output Section */}
      {(strategy || isGenerating) && (
        <Card className="bg-gradient-to-br from-[#FF8C42]/5 to-[#1B6AFF]/5 border-[#FF8C42]/20 p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-[#FF8C42]" />
              <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Estrategia Propuesta</h3>
            </div>

            {isGenerating ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-[#FF8C42]/30 border-t-[#FF8C42] rounded-full animate-spin" />
                  <span className="text-[#F8F9FA]/70 font-inter">Analizando tu meta de ahorro...</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-4 bg-[#3A3A3A] rounded animate-pulse"
                      style={{ width: `${60 + i * 10}%` }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              strategy && (
                <div className="space-y-6">
                  {/* Strategy Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A]">
                        <Target className="w-5 h-5 text-[#00A86B]" />
                        <div>
                          <p className="text-sm text-[#F8F9FA]/70 font-inter">Meta</p>
                          <p className="text-lg font-semibold font-sora text-[#F8F9FA]">{strategy.goal}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A]">
                        <DollarSign className="w-5 h-5 text-[#1B6AFF]" />
                        <div>
                          <p className="text-sm text-[#F8F9FA]/70 font-inter">Ahorro Mensual</p>
                          <p className="text-lg font-semibold font-sora text-[#F8F9FA]">{strategy.monthlyAmount}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A]">
                        <Coins className="w-5 h-5 text-[#FF8C42]" />
                        <div>
                          <p className="text-sm text-[#F8F9FA]/70 font-inter">Activo Recomendado</p>
                          <p className="text-lg font-semibold font-sora text-[#F8F9FA]">{strategy.recommendedAsset}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A]">
                        <Calendar className="w-5 h-5 text-[#1B6AFF]" />
                        <div>
                          <p className="text-sm text-[#F8F9FA]/70 font-inter">Duración</p>
                          <p className="text-lg font-semibold font-sora text-[#F8F9FA]">{strategy.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="p-4 bg-[#2A2A2A]/50 rounded-xl border border-[#3A3A3A]/50">
                    <p className="text-[#F8F9FA]/80 font-inter leading-relaxed">{strategy.explanation}</p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      onClick={handleApplyPlan}
                      className="bg-[#00A86B] hover:bg-[#00A86B]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-3"
                    >
                      <Target className="w-5 h-5" />
                      <span>Aplicar Plan</span>
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      )}

      {/* Example Prompts */}
      {!strategy && !isGenerating && (
        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-sora text-[#F8F9FA]">Ejemplos de metas</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Quiero ahorrar $10,000 para un viaje a Europa en 2 años",
                "Necesito $3,000 para una laptop nueva en 8 meses",
                "Mi meta es ahorrar $50,000 para el enganche de una casa en 5 años",
                "Quiero juntar $2,500 para un curso de programación en 6 meses",
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setUserInput(example)}
                  className="text-left p-4 bg-[#3A3A3A] hover:bg-[#4A4A4A] rounded-xl border border-[#4A4A4A] hover:border-[#FF8C42]/30 transition-all duration-200 group"
                >
                  <p className="text-sm text-[#F8F9FA]/70 group-hover:text-[#F8F9FA] font-inter transition-colors">
                    "{example}"
                  </p>
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Features Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#FF8C42]/20 flex items-center justify-center mx-auto mb-4">
            <Brain className="w-6 h-6 text-[#FF8C42]" />
          </div>
          <h5 className="text-lg font-semibold font-sora text-[#F8F9FA] mb-2">IA Avanzada</h5>
          <p className="text-sm text-[#F8F9FA]/70 font-inter">
            Algoritmos inteligentes analizan tu meta y crean estrategias personalizadas
          </p>
        </Card>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#1B6AFF]/20 flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-[#1B6AFF]" />
          </div>
          <h5 className="text-lg font-semibold font-sora text-[#F8F9FA] mb-2">Estrategias DCA</h5>
          <p className="text-sm text-[#F8F9FA]/70 font-inter">
            Planes de inversión periódica optimizados para minimizar riesgos
          </p>
        </Card>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#00A86B]/20 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#00A86B]" />
          </div>
          <h5 className="text-lg font-semibold font-sora text-[#F8F9FA] mb-2">Implementación Fácil</h5>
          <p className="text-sm text-[#F8F9FA]/70 font-inter">
            Aplica tu plan con un clic y comienza a ahorrar automáticamente
          </p>
        </Card>
      </div>
    </div>
  )
}
