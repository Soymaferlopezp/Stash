"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Lock,
  Users,
  Brain,
  DollarSign,
  Shield,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  X,
  Wallet,
  TrendingUp,
  Target,
  Home,
  Vault,
  Plus,
  Clock,
  Settings,
  ChevronDown,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import VaultCard from "@/components/VaultCard"
import CrearVaultContent from "@/components/CrearVaultContent"
import HistorialTransaccionesContent from "@/components/HistorialTransaccionesContent"
import ConfiguracionContent from "@/components/ConfiguracionContent"

export default function StashLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)

    // Simulate wallet connection process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsConnecting(false)
    setIsConnected(true)
    setIsModalOpen(false)
  }

  const handleDisconnectWallet = () => {
    setIsConnected(false)
    // This will automatically show the landing page since isConnected becomes false
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsConnecting(false)
  }

  if (isConnected) {
    return <Dashboard onDisconnectWallet={handleDisconnectWallet} />
  }

  return (
    <>
      <div className="min-h-screen bg-[#1E1E1E] text-[#F8F9FA]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            {/* Logo */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#00A86B] font-sora">Stash</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl font-bold font-sora leading-tight">
                    Ahorra en Stellar, sin intermediarios
                  </h2>
                  <p className="text-xl text-[#F8F9FA]/80 font-inter leading-relaxed">
                    Tu herramienta para crear y gestionar estrategias de DCA de forma segura y descentralizada
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-[#00A86B] hover:bg-[#00A86B]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Conectar Lobstr Wallet
                </Button>
              </div>

              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DCA-oFsMRGwz34CeVabfkQrcgyj8FQTJ70.png"
                  alt="DCA Strategy Illustration"
                  width={500}
                  height={400}
                  className="w-full max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-[#1E1E1E]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold font-sora">
                  Ahorrar de forma segura sigue siendo complicado
                </h3>
                <p className="text-xl text-[#F8F9FA]/80 font-inter leading-relaxed">
                  Los bancos cobran comisiones, las apps custodiales controlan tu dinero y la automatización es
                  limitada.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#FF8C42]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                      <line x1="4" y1="4" x2="20" y2="20" />
                    </svg>
                  </div>
                  <p className="text-[#F8F9FA]/70 font-inter font-semibold">Comisiones Altas</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#FF8C42]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-[#F8F9FA]/70 font-inter font-semibold">Falta de Privacidad</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#FF8C42]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6" />
                      <path d="m15.5 8.5-3 3-3-3" />
                      <path d="M9 21h6" />
                    </svg>
                  </div>
                  <p className="text-[#F8F9FA]/70 font-inter font-semibold">Automatización Limitada</p>
                </div>
              </div>

              {/* Concluding Phrase */}
              <div className="pt-8">
                <p className="text-3xl lg:text-4xl font-bold font-sora text-[#FF8C42]">Es hora de un cambio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold font-sora">Tu ahorro, tu control</h3>
                  <p className="text-xl text-[#F8F9FA]/80 font-inter leading-relaxed">
                    Stash combina la velocidad de Stellar, la seguridad de contratos inteligentes y la flexibilidad de
                    estrategias DCA, todo sin intermediarios.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-60 bg-gradient-to-br from-[#1B6AFF]/20 to-[#00A86B]/20 rounded-3xl border-4 border-[#FF8C42] flex items-center justify-center">
                    <div className="w-32 h-24 bg-[#00A86B]/30 rounded-xl border-2 border-[#00A86B] flex items-center justify-center">
                      <Lock className="w-12 h-12 text-[#00A86B] stroke-[3]" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF8C42] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#1E1E1E]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-bold font-sora mb-6">3 módulos para alcanzar tus metas</h3>
              </div>

              <div className="space-y-6">
                <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8 hover:border-[#FF8C42]/50 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-8 h-8 text-[#FF8C42] stroke-[3]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-sora text-[#F8F9FA]">Privacidad y Propósito</h4>
                      <p className="text-lg text-[#F8F9FA]/70 font-inter">Tus metas, solo tuyas</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8 hover:border-[#FF8C42]/50 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-[#FF8C42] stroke-[3]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-sora text-[#F8F9FA]">Colaborativo sin Custodia</h4>
                      <p className="text-lg text-[#F8F9FA]/70 font-inter">Ahorra en equipo sin intermediarios</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8 hover:border-[#FF8C42]/50 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF8C42]/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-8 h-8 text-[#FF8C42] stroke-[3]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-sora text-[#F8F9FA]">Asistente de IA</h4>
                      <p className="text-lg text-[#F8F9FA]/70 font-inter">De tu sueño a un plan, en segundos</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-4xl lg:text-5xl font-bold font-sora">Empieza tu estrategia de ahorro hoy</h3>

              <Button
                size="lg"
                onClick={openModal}
                className="bg-[#00A86B] hover:bg-[#00A86B]/90 text-white px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                Conectar Lobstr Wallet
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] border-t border-[#3A3A3A] py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-[#00A86B] font-sora">Stash</h4>
                <p className="text-[#F8F9FA]/70 font-inter">Hecho con ♥️ desde Web3</p>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center space-x-2 bg-[#2A2A2A] rounded-lg px-4 py-2">
                  <Globe className="w-4 h-4 text-[#FF8C42]" />
                  <select className="bg-transparent text-[#F8F9FA] text-sm font-inter border-none outline-none">
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center md:justify-end space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FF8C42]/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-[#FF8C42]" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FF8C42]/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#FF8C42]" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FF8C42]/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#FF8C42]" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FF8C42]/20 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-[#FF8C42]" />
                </Link>
              </div>
            </div>

            <div className="border-t border-[#3A3A3A] mt-8 pt-8 text-center">
              <p className="text-[#F8F9FA]/50 text-sm font-inter">
                © {new Date().getFullYear()} Stash. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Wallet Connection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal */}
          <div className="relative bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#3A3A3A] hover:bg-[#4A4A4A] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-[#F8F9FA]" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-inter text-[#F8F9FA]">Conectar tu Wallet</h3>
                <p className="text-[#F8F9FA]/70 font-inter">
                  Conecta tu wallet de Stellar para acceder a tu dashboard de Stash.
                </p>
              </div>

              <div className="space-y-4">
                {/* Primary Button - Lobstr Connection */}
                <Button
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                  className="w-full bg-[#1B6AFF] hover:bg-[#1B6AFF]/90 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  <Wallet className="w-5 h-5" />
                  <span>{isConnecting ? "Firmando transacción..." : "Conectar con Lobstr Wallet"}</span>
                  {isConnecting && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                </Button>

                {/* Secondary Button - Cancel */}
                <Button
                  onClick={closeModal}
                  disabled={isConnecting}
                  variant="outline"
                  className="w-full border-[#3A3A3A] text-[#F8F9FA] hover:bg-[#3A3A3A] py-4 text-lg font-semibold rounded-xl transition-all duration-200 bg-transparent"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Dashboard Component (shown after wallet connection)
function Dashboard({ onDisconnectWallet }: { onDisconnectWallet?: () => void }) {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false)

  const handleDisconnectWallet = () => {
    if (confirm("¿Estás seguro de que quieres desconectar tu wallet? Perderás acceso a tu dashboard.")) {
      if (onDisconnectWallet) {
        onDisconnectWallet()
      }
    }
    setIsWalletDropdownOpen(false)
  }

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "crear-vault", label: "Crear Vault", icon: Plus },
    { id: "mis-vaults", label: "Mis Vaults", icon: Vault },
    { id: "vaults-colaborativos", label: "Vaults Colaborativos", icon: Users },
    { id: "asistente-ia", label: "Asistente de IA", icon: Brain },
    { id: "historial", label: "Historial de Transacciones", icon: Clock },
    { id: "configuracion", label: "Configuración", icon: Settings },
  ]

  const renderMainContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />
      case "mis-vaults":
        return <MisVaultsContent />
      case "vaults-colaborativos":
        return <VaultsColaborativosContent />
      case "asistente-ia":
        return <AsistenteIAContent />
      case "crear-vault":
        return <CrearVaultContent />
      case "historial":
        return <HistorialTransaccionesContent />
      case "configuracion":
        return <ConfiguracionContent onDisconnectWallet={handleDisconnectWallet} />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#F8F9FA] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#2A2A2A] border-r border-[#3A3A3A] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#3A3A3A]">
          <h1 className="text-2xl font-bold text-[#00A86B] font-sora">Stash</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-inter text-left transition-all duration-200 ${
                  isActive
                    ? "bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/30"
                    : "text-[#F8F9FA]/70 hover:bg-[#3A3A3A] hover:text-[#F8F9FA]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#2A2A2A] border-b border-[#3A3A3A] p-6">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-3">
              {/* Clickable Wallet Address with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}
                  className="flex items-center space-x-2 bg-[#3A3A3A] hover:bg-[#4A4A4A] rounded-lg px-3 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A86B]/50"
                >
                  <Wallet className="w-4 h-4 text-[#00A86B]" />
                  <span className="text-sm font-inter text-[#F8F9FA]">GABC...1234</span>
                  <ChevronDown
                    className={`w-3 h-3 text-[#F8F9FA]/70 transition-transform duration-200 ${isWalletDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Wallet Dropdown */}
                {isWalletDropdownOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsWalletDropdownOpen(false)} />

                    {/* Dropdown Content */}
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl shadow-2xl z-50 overflow-hidden">
                      <div className="p-4 space-y-4">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-[#00A86B]/20 flex items-center justify-center mx-auto mb-3">
                            <Wallet className="w-6 h-6 text-[#00A86B]" />
                          </div>
                          <p className="text-sm font-semibold font-inter text-[#F8F9FA] mb-1">Wallet Conectada</p>
                          <code className="text-xs font-mono text-[#F8F9FA]/70 bg-[#3A3A3A] px-2 py-1 rounded">
                            GABC...1234
                          </code>
                        </div>

                        <Button
                          onClick={handleDisconnectWallet}
                          className="w-full bg-[#E53935] hover:bg-[#E53935]/90 text-white py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Desconectar Wallet</span>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="w-3 h-3 bg-[#00A86B] rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">{renderMainContent()}</div>
      </div>
    </div>
  )
}

// Dashboard Content Component
function DashboardContent() {
  const chartData = [
    { month: "Ene", amount: 0 },
    { month: "Feb", amount: 150 },
    { month: "Mar", amount: 320 },
    { month: "Abr", amount: 480 },
    { month: "May", amount: 650 },
    { month: "Jun", amount: 820 },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Title */}
      <div>
        <h2 className="text-3xl font-bold font-sora mb-2">Bienvenido a Stash</h2>
        <p className="text-[#F8F9FA]/70 font-inter">Gestiona tus ahorros de forma inteligente y descentralizada</p>
      </div>

      {/* Main Summary Card */}
      <Card className="bg-gradient-to-br from-[#00A86B]/10 to-[#1B6AFF]/10 border-[#00A86B]/30 p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#F8F9FA]/70 font-inter mb-2">Total Ahorrado</p>
              <p className="text-4xl font-bold font-sora text-[#00A86B]">$820.00 USD</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#00A86B]/20 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[#00A86B]" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-inter">
              <span className="text-[#F8F9FA]/70">Progreso hacia tu meta</span>
              <span className="text-[#00A86B]">82%</span>
            </div>
            <div className="w-full bg-[#3A3A3A] rounded-full h-3">
              <div
                className="bg-gradient-to-r from-[#00A86B] to-[#1B6AFF] h-3 rounded-full transition-all duration-500"
                style={{ width: "82%" }}
              ></div>
            </div>
            <p className="text-xs text-[#F8F9FA]/50 font-inter">Meta: $1,000 USD</p>
          </div>
        </div>
      </Card>

      {/* Quick Summary Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-sora">Resumen Rápido</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 hover:border-[#00A86B]/30 transition-all duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#00A86B]/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#00A86B]" />
              </div>
              <div>
                <p className="text-sm text-[#F8F9FA]/70 font-inter">Total Ahorrado</p>
                <p className="text-2xl font-bold font-sora text-[#F8F9FA]">$820.00</p>
                <p className="text-xs text-[#00A86B] font-inter">+12% este mes</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 hover:border-[#FF8C42]/30 transition-all duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <p className="text-sm text-[#F8F9FA]/70 font-inter">Vaults Activos</p>
                <p className="text-2xl font-bold font-sora text-[#F8F9FA]">3</p>
                <p className="text-xs text-[#FF8C42] font-inter">2 personales, 1 colaborativo</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 hover:border-[#1B6AFF]/30 transition-all duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#1B6AFF]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1B6AFF]" />
              </div>
              <div>
                <p className="text-sm text-[#F8F9FA]/70 font-inter">Próximo DCA</p>
                <p className="text-2xl font-bold font-sora text-[#F8F9FA]">2 días</p>
                <p className="text-xs text-[#1B6AFF] font-inter">$50 USD en XLM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Savings Chart */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-sora">Progreso de Ahorros</h3>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#F8F9FA]/70 font-inter">Últimos 6 meses</p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#00A86B] rounded-full"></div>
                <span className="text-xs text-[#F8F9FA]/70 font-inter">Ahorros acumulados</span>
              </div>
            </div>

            {/* Line Chart */}
            <div className="h-64 w-full">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                {/* Grid Lines */}
                <defs>
                  <pattern id="grid" width="100" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 40" fill="none" stroke="#3A3A3A" strokeWidth="0.5" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Horizontal Grid Lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="60"
                    y1={40 + i * 32}
                    x2="540"
                    y2={40 + i * 32}
                    stroke="#3A3A3A"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                ))}

                {/* Y-axis Labels */}
                {[800, 600, 400, 200, 0].map((value, i) => (
                  <text
                    key={i}
                    x="50"
                    y={48 + i * 32}
                    fill="#F8F9FA"
                    fontSize="10"
                    opacity="0.7"
                    textAnchor="end"
                    className="font-inter"
                  >
                    ${value}
                  </text>
                ))}

                {/* X-axis Labels */}
                {chartData.map((data, i) => (
                  <text
                    key={i}
                    x={80 + i * 80}
                    y="190"
                    fill="#F8F9FA"
                    fontSize="10"
                    opacity="0.7"
                    textAnchor="middle"
                    className="font-inter"
                  >
                    {data.month}
                  </text>
                ))}

                {/* Line Path */}
                <path
                  d={`M 80,${168 - (chartData[0].amount / 820) * 128} ${chartData
                    .map((data, i) => `L ${80 + i * 80},${168 - (data.amount / 820) * 128}`)
                    .join(" ")}`}
                  fill="none"
                  stroke="#00A86B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {chartData.map((data, i) => (
                  <g key={i}>
                    <circle
                      cx={80 + i * 80}
                      cy={168 - (data.amount / 820) * 128}
                      r="4"
                      fill="#00A86B"
                      stroke="#2A2A2A"
                      strokeWidth="2"
                    />
                    {/* Hover Effect Circle */}
                    <circle
                      cx={80 + i * 80}
                      cy={168 - (data.amount / 820) * 128}
                      r="8"
                      fill="transparent"
                      className="hover:fill-[#00A86B] hover:fill-opacity-20 transition-all duration-200 cursor-pointer"
                    >
                      <title>
                        ${data.amount} USD - {data.month}
                      </title>
                    </circle>
                    {/* Value Labels */}
                    <text
                      x={80 + i * 80}
                      y={158 - (data.amount / 820) * 128}
                      fill="#00A86B"
                      fontSize="9"
                      textAnchor="middle"
                      className="font-inter font-semibold"
                    >
                      ${data.amount}
                    </text>
                  </g>
                ))}

                {/* Gradient Fill Under Line */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00A86B" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00A86B" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d={`M 80,${168 - (chartData[0].amount / 820) * 128} ${chartData
                    .map((data, i) => `L ${80 + i * 80},${168 - (data.amount / 820) * 128}`)
                    .join(" ")} L 480,168 L 80,168 Z`}
                  fill="url(#areaGradient)"
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Mis Vaults Content Component
function MisVaultsContent() {
  const vaultsData = [
    {
      id: 1,
      name: "Viaje a Japón",
      asset: "USDC",
      currentAmount: 1500,
      goalAmount: 5000,
      progress: 30,
    },
    {
      id: 2,
      name: "Fondo de Emergencia",
      asset: "XLM",
      currentAmount: 2800,
      goalAmount: 3500,
      progress: 80,
    },
    {
      id: 3,
      name: "Moto Nueva",
      asset: "USDC",
      currentAmount: 750,
      goalAmount: 2500,
      progress: 30,
    },
    {
      id: 4,
      name: "Vacaciones",
      asset: "XLM",
      currentAmount: 420,
      goalAmount: 1200,
      progress: 35,
    },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold font-sora mb-2">Mis Vaults de Ahorro</h2>
        <p className="text-[#F8F9FA]/70 font-inter">Gestiona y monitorea tus objetivos de ahorro personales</p>
      </div>

      {/* Vaults Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vaultsData.map((vault) => (
          <VaultCard key={vault.id} vault={vault} />
        ))}
      </div>

      {/* Empty State for when no vaults exist */}
      {vaultsData.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-6">
            <Vault className="w-10 h-10 text-[#F8F9FA]/50" />
          </div>
          <h3 className="text-xl font-bold font-sora mb-2">No tienes vaults aún</h3>
          <p className="text-[#F8F9FA]/70 font-inter mb-6">Crea tu primer vault para comenzar a ahorrar</p>
          <Button className="bg-[#00A86B] hover:bg-[#00A86B]/90 text-white px-6 py-3 rounded-xl font-semibold">
            Crear Mi Primer Vault
          </Button>
        </div>
      )}
    </div>
  )
}

// Vaults Colaborativos Content Component
function VaultsColaborativosContent() {
  const collaborativeVaultsData = [
    {
      id: 1,
      name: "Fondo para Vacaciones",
      asset: "USDC",
      currentAmount: 3200,
      goalAmount: 8000,
      progress: 40,
      participants: { current: 4, max: 6 },
      lockStatus: "Bloqueado hasta 2026",
      isLocked: true,
    },
    {
      id: 2,
      name: "Casa de Playa Familiar",
      asset: "XLM",
      currentAmount: 12500,
      goalAmount: 25000,
      progress: 50,
      participants: { current: 3, max: 5 },
      lockStatus: "Meta alcanzada",
      isLocked: false,
    },
    {
      id: 3,
      name: "Startup Tech",
      asset: "USDC",
      currentAmount: 4800,
      goalAmount: 15000,
      progress: 32,
      participants: { current: 6, max: 8 },
      lockStatus: "Bloqueado hasta 2025",
      isLocked: true,
    },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold font-sora mb-2">Vaults Colaborativos</h2>
        <p className="text-[#F8F9FA]/70 font-inter">Ahorra en equipo y alcanza metas compartidas sin intermediarios</p>
      </div>

      {/* Collaborative Vaults Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collaborativeVaultsData.map((vault) => (
          <CollaborativeVaultCard key={vault.id} vault={vault} />
        ))}
      </div>

      {/* Empty State for when no collaborative vaults exist */}
      {collaborativeVaultsData.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-[#F8F9FA]/50" />
          </div>
          <h3 className="text-xl font-bold font-sora mb-2">No tienes vaults colaborativos aún</h3>
          <p className="text-[#F8F9FA]/70 font-inter mb-6">
            Crea o únete a un vault colaborativo para ahorrar en equipo
          </p>
          <Button className="bg-[#1B6AFF] hover:bg-[#1B6AFF]/90 text-white px-6 py-3 rounded-xl font-semibold">
            Crear Mi Primer Vault Colaborativo
          </Button>
        </div>
      )}
    </div>
  )
}

// Individual Collaborative Vault Card Component
function CollaborativeVaultCard({ vault }: { vault: any }) {
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

  const getLockStatusColor = (isLocked: boolean) => {
    return isLocked
      ? "bg-[#FF8C42]/20 text-[#FF8C42] border-[#FF8C42]/30"
      : "bg-[#00A86B]/20 text-[#00A86B] border-[#00A86B]/30"
  }

  return (
    <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6 hover:border-[#1B6AFF]/30 hover:shadow-lg hover:shadow-[#1B6AFF]/10 transition-all duration-300 cursor-pointer group">
      <div className="space-y-4">
        {/* Header with name and asset */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold font-sora text-[#F8F9FA] group-hover:text-[#1B6AFF] transition-colors duration-200">
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
            <span className="text-2xl font-bold font-sora text-[#1B6AFF]">{formatCurrency(vault.currentAmount)}</span>
            <span className="text-sm text-[#F8F9FA]/50 font-inter">/ {formatCurrency(vault.goalAmount)}</span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#F8F9FA]/70 font-inter">Progreso</span>
              <span className="text-xs text-[#1B6AFF] font-semibold">{vault.progress}%</span>
            </div>
            <div className="w-full bg-[#3A3A3A] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#1B6AFF] to-[#00A86B] h-2 rounded-full transition-all duration-500 group-hover:shadow-sm group-hover:shadow-[#1B6AFF]/50"
                style={{ width: `${vault.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Participants Info */}
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-[#1B6AFF]" />
          <span className="text-sm font-inter text-[#F8F9FA]">
            {vault.participants.current}/{vault.participants.max} participantes
          </span>
        </div>

        {/* Lock Status */}
        <div
          className={`px-3 py-2 rounded-lg text-xs font-semibold border ${getLockStatusColor(vault.isLocked)} flex items-center space-x-2`}
        >
          <Lock className="w-3 h-3" />
          <span>{vault.lockStatus}</span>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs text-[#F8F9FA]/50 font-inter pt-2 border-t border-[#3A3A3A]">
          <span>Restante: {formatCurrency(vault.goalAmount - vault.currentAmount)}</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#1B6AFF] rounded-full"></div>
            <span>Colaborativo</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Empty Section Component for other navigation items
function EmptySection({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 flex items-center justify-center min-h-full">
      <div className="text-center space-y-4 max-w-md">
        <div className="w-16 h-16 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto">
          <Target className="w-8 h-8 text-[#F8F9FA]/50" />
        </div>
        <h3 className="text-2xl font-bold font-sora">{title}</h3>
        <p className="text-[#F8F9FA]/70 font-inter">{description}</p>
        <p className="text-sm text-[#F8F9FA]/50 font-inter">Esta sección estará disponible próximamente.</p>
      </div>
    </div>
  )
}

function AsistenteIAContent() {
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
      goal: "$5,000 para una moto",
      monthlyAmount: "$277.78",
      recommendedAsset: "USDC",
      duration: "18 meses",
    }

    setStrategy(mockStrategy)
    setIsGenerating(false)
  }

  const handleApplyPlan = () => {
    // This would typically navigate to vault creation with pre-filled data
    alert("¡Plan aplicado! Te redirigiremos a crear tu vault.")
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-sora">Asistente de IA</h2>
        <p className="text-[#F8F9FA]/70 font-inter text-lg">
          Describe tu meta de ahorro en lenguaje natural y nuestro asistente de IA te propondrá una estrategia viable de
          DCA.
        </p>
      </div>

      {/* Input Area */}
      <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8">
        <div className="space-y-6">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Quiero ahorrar $5,000 para una moto en 18 meses"
            className="w-full h-32 bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-4 text-[#F8F9FA] font-inter placeholder-[#F8F9FA]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/50 focus:border-[#FF8C42]/50 resize-none transition-all duration-200"
          />

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

      {/* AI Output Placeholder */}
      {(strategy || isGenerating) && (
        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Estrategia Propuesta</h3>

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
                  {/* Strategy Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-[#3A3A3A]">
                      <span className="text-[#F8F9FA]/70 font-inter">Meta:</span>
                      <span className="text-[#F8F9FA] font-semibold font-inter">{strategy.goal}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#3A3A3A]">
                      <span className="text-[#F8F9FA]/70 font-inter">Ahorro Mensual:</span>
                      <span className="text-[#F8F9FA] font-semibold font-inter">{strategy.monthlyAmount}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#3A3A3A]">
                      <span className="text-[#F8F9FA]/70 font-inter">Activo Recomendado:</span>
                      <span className="text-[#F8F9FA] font-semibold font-inter">{strategy.recommendedAsset}</span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-[#F8F9FA]/70 font-inter">Duración:</span>
                      <span className="text-[#F8F9FA] font-semibold font-inter">{strategy.duration}</span>
                    </div>
                  </div>

                  {/* Apply Plan Button */}
                  <div className="pt-4">
                    <Button
                      onClick={handleApplyPlan}
                      className="bg-[#00A86B] hover:bg-[#00A86B]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                    >
                      Aplicar Plan
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
