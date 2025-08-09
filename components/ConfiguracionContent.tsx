"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Copy, Moon, Sun, Globe, Check, ChevronDown, LogOut } from "lucide-react"

interface ConfiguracionContentProps {
  onDisconnectWallet?: () => void
}

export default function ConfiguracionContent({ onDisconnectWallet }: ConfiguracionContentProps = {}) {
  const [darkMode, setDarkMode] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("es")
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)

  // Mock wallet address
  const walletAddress = "GABC1234567890DEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  const truncatedAddress = `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2000)
    } catch (err) {
      console.error("Failed to copy address:", err)
    }
  }

  const handleDisconnectWallet = () => {
    if (confirm("¿Estás seguro de que quieres desconectar tu wallet? Perderás acceso a tu dashboard.")) {
      // Call the parent's disconnect handler if provided, otherwise reload
      if (onDisconnectWallet) {
        onDisconnectWallet()
      } else {
        window.location.reload()
      }
    }
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
    // This would typically trigger a language change in the app
  }

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage)

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-sora">Configuración</h2>
        <p className="text-[#F8F9FA]/70 font-inter">Gestiona tu perfil, seguridad y preferencias de la aplicación</p>
      </div>

      {/* Profile Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Perfil</h3>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-[#00A86B]/20 flex items-center justify-center flex-shrink-0">
              <User className="w-10 h-10 text-[#00A86B]" />
            </div>

            {/* Wallet Info */}
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-sm font-semibold font-inter text-[#F8F9FA]/70 mb-2">Dirección de Wallet</p>
                <div className="flex items-center space-x-3">
                  <code className="text-lg font-mono text-[#F8F9FA] bg-[#3A3A3A] px-3 py-2 rounded-lg">
                    {truncatedAddress}
                  </code>
                  <Button
                    onClick={handleCopyAddress}
                    variant="outline"
                    size="sm"
                    className="border-[#3A3A3A] text-[#F8F9FA] hover:bg-[#3A3A3A] bg-transparent flex items-center space-x-2"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-4 h-4 text-[#00A86B]" />
                        <span className="text-[#00A86B]">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Additional Profile Info */}
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-[#3A3A3A]">
                <div>
                  <p className="text-xs font-inter text-[#F8F9FA]/50 mb-1">Conectado desde</p>
                  <p className="text-sm font-inter text-[#F8F9FA]">15 de Enero, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-inter text-[#F8F9FA]/50 mb-1">Tipo de Wallet</p>
                  <p className="text-sm font-inter text-[#F8F9FA]">Lobstr Wallet</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Seguridad</h3>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold font-sora text-[#F8F9FA] mb-2">Gestión de Sesión</h4>
              <p className="text-sm text-[#F8F9FA]/70 font-inter mb-4">
                Desconecta tu wallet para cerrar sesión de forma segura. Necesitarás volver a conectar tu wallet para
                acceder a tu dashboard.
              </p>
            </div>

            <Button
              onClick={handleDisconnectWallet}
              className="bg-[#E53935] hover:bg-[#E53935]/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-3"
            >
              <LogOut className="w-5 h-5" />
              <span>Desconectar Wallet</span>
            </Button>

            {/* Security Tips */}
            <div className="bg-[#3A3A3A]/50 rounded-xl p-4 mt-6">
              <h5 className="text-sm font-semibold font-inter text-[#F8F9FA] mb-3">Consejos de Seguridad</h5>
              <ul className="space-y-2 text-xs text-[#F8F9FA]/70 font-inter">
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A86B] mt-1">•</span>
                  <span>Nunca compartas tu clave privada o frase semilla con nadie</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A86B] mt-1">•</span>
                  <span>Siempre verifica las direcciones antes de enviar transacciones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A86B] mt-1">•</span>
                  <span>Desconéctate cuando uses dispositivos públicos</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Preferences Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Preferencias</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Theme Preference */}
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6AFF]/20 flex items-center justify-center">
                  {darkMode ? <Moon className="w-5 h-5 text-[#1B6AFF]" /> : <Sun className="w-5 h-5 text-[#FF8C42]" />}
                </div>
                <div>
                  <h4 className="text-lg font-semibold font-sora text-[#F8F9FA]">Tema</h4>
                  <p className="text-sm text-[#F8F9FA]/70 font-inter">Personaliza la apariencia de la aplicación</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-inter text-[#F8F9FA]">{darkMode ? "Modo Oscuro" : "Modo Claro"}</span>

                {/* Toggle Switch */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1B6AFF]/50 ${
                    darkMode ? "bg-[#1B6AFF]" : "bg-[#3A3A3A]"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      darkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card>

          {/* Language Preference */}
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#FF8C42]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold font-sora text-[#F8F9FA]">Idioma</h4>
                  <p className="text-sm text-[#F8F9FA]/70 font-inter">Selecciona tu idioma preferido</p>
                </div>
              </div>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="w-full flex items-center justify-between bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl p-3 text-[#F8F9FA] font-inter hover:border-[#FF8C42]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{selectedLang?.flag}</span>
                    <span className="text-sm">{selectedLang?.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#3A3A3A] border border-[#4A4A4A] rounded-xl shadow-lg z-10 overflow-hidden">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#4A4A4A] transition-colors duration-200 ${
                          selectedLanguage === language.code ? "bg-[#FF8C42]/20 text-[#FF8C42]" : "text-[#F8F9FA]"
                        }`}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="text-sm font-inter">{language.name}</span>
                        {selectedLanguage === language.code && <Check className="w-4 h-4 ml-auto" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-sora text-[#F8F9FA]">Notificaciones</h3>

        <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
          <div className="space-y-6">
            <p className="text-sm text-[#F8F9FA]/70 font-inter">
              Configura cómo quieres recibir notificaciones sobre tus vaults y transacciones.
            </p>

            <div className="space-y-4">
              {[
                {
                  id: "dca",
                  label: "Recordatorios de DCA",
                  description: "Notificaciones antes de ejecutar aportes automáticos",
                },
                { id: "goals", label: "Metas Alcanzadas", description: "Cuando completes el objetivo de un vault" },
                {
                  id: "collaborative",
                  label: "Actividad Colaborativa",
                  description: "Cuando otros participantes hagan aportes",
                },
              ].map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between py-3 border-b border-[#3A3A3A] last:border-b-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold font-inter text-[#F8F9FA]">{notification.label}</p>
                    <p className="text-xs text-[#F8F9FA]/50 font-inter">{notification.description}</p>
                  </div>

                  {/* Toggle Switch */}
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#00A86B] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A86B]/50">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 translate-x-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* App Info */}
      <Card className="bg-[#2A2A2A] border-[#3A3A3A] p-6">
        <div className="text-center space-y-2">
          <h4 className="text-lg font-bold font-sora text-[#00A86B]">Stash</h4>
          <p className="text-sm text-[#F8F9FA]/70 font-inter">Versión 1.0.0</p>
          <p className="text-xs text-[#F8F9FA]/50 font-inter">Hecho con ♥️ para la comunidad Stellar</p>
        </div>
      </Card>
    </div>
  )
}
