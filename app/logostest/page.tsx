"use client"

import { useState, useEffect } from "react"

const mainLogos = [
  { name: "Favico", path: "public/logos/favico.png" },
  { name: "Logo Blanco", path: "public/logos/logo_blanco.png" },
  { name: "Logo Negro", path: "public/logos/logo_negro.png" },
  { name: "Logo Original", path: "public/logos/logo_original.png" },
]

const partnerLogos = [
  { name: "AECID", path: "public/company_logos/logos/black/aecid.png" },
  { name: "Aparato", path: "public/company_logos/logos/black/aparato.png" },
  { name: "Avisa", path: "public/company_logos/logos/black/avisa.png" },
  { name: "Box", path: "public/company_logos/logos/black/box.png" },
  { name: "CCE", path: "public/company_logos/logos/black/cce.png" },
  { name: "Cimarrón", path: "public/company_logos/logos/black/cimarron.png" },
  { name: "Diagnóstico", path: "public/company_logos/logos/black/diagnostico.png" },
  { name: "Dominio", path: "public/company_logos/logos/black/dominio.png" },
  { name: "Don Obldulio", path: "public/company_logos/logos/black/donobldulio.png" },
  { name: "Embajada", path: "public/company_logos/logos/black/embajada.png" },
  { name: "Fullcat", path: "public/company_logos/logos/black/fullcat.png" },
  { name: "La Mayor", path: "public/company_logos/logos/black/lamayor.png" },
  { name: "Mueca", path: "public/company_logos/logos/black/mueca.png" },
  { name: "Olivera", path: "public/company_logos/logos/black/olivera.png" },
  { name: "Orben", path: "public/company_logos/logos/black/orben.png" },
  { name: "Oriental", path: "public/company_logos/logos/black/oriental.png" },
  { name: "Plataforma", path: "public/company_logos/logos/black/plataforma.png" },
  { name: "Producers", path: "public/company_logos/logos/black/producrers.png" },
  { name: "Sidley Jones", path: "public/company_logos/logos/black/sidleyjones.png" },
  { name: "SODRE", path: "public/company_logos/logos/black/sodre.png" },
  { name: "Tafirel", path: "public/company_logos/logos/black/tafirel.png" },
  { name: "UFilms", path: "public/company_logos/logos/black/ufilms.png" },
  { name: "Verne", path: "public/company_logos/logos/black/verne.png" },
]

interface Settings {
  width: number
  braille: boolean
  negative: boolean
  dither: boolean
  threshold: number
}

function LogoTuner({ logo }: { logo: { name: string; path: string } }) {
  const [ascii, setAscii] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [settings, setSettings] = useState<Settings>({
    width: 40,
    braille: false,
    negative: false,
    dither: false,
    threshold: 128,
  })
  const [expanded, setExpanded] = useState(false)

  const fetchAscii = async () => {
    setLoading(true)
    const params = new URLSearchParams({
      image: logo.path,
      width: settings.width.toString(),
      braille: settings.braille.toString(),
      negative: settings.negative.toString(),
      dither: settings.dither.toString(),
      threshold: settings.threshold.toString(),
    })
    try {
      const res = await fetch(`/api/ascii?${params}`)
      const data = await res.json()
      setAscii(data.ascii || data.error)
    } catch (e) {
      setAscii("Error fetching")
    }
    setLoading(false)
  }

  useEffect(() => {
    const timeout = setTimeout(fetchAscii, 300)
    return () => clearTimeout(timeout)
  }, [settings, logo.path])

  return (
    <div className="border border-gray-800 p-4 rounded">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-sm text-gray-400">{logo.name}</span>
        <span className="text-xs text-gray-600">{expanded ? "▼" : "▶"}</span>
      </div>

      {expanded && (
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <label className="flex items-center gap-2">
              Width
              <input
                type="range"
                min="20"
                max="100"
                value={settings.width}
                onChange={(e) => setSettings((s) => ({ ...s, width: Number(e.target.value) }))}
                className="flex-1"
              />
              <span className="w-8 text-right">{settings.width}</span>
            </label>
            <label className="flex items-center gap-2">
              Threshold
              <input
                type="range"
                min="0"
                max="255"
                value={settings.threshold}
                onChange={(e) => setSettings((s) => ({ ...s, threshold: Number(e.target.value) }))}
                className="flex-1"
              />
              <span className="w-8 text-right">{settings.threshold}</span>
            </label>
          </div>
          <div className="flex gap-4 text-xs">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={settings.braille}
                onChange={(e) => setSettings((s) => ({ ...s, braille: e.target.checked }))}
              />
              Braille
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={settings.negative}
                onChange={(e) => setSettings((s) => ({ ...s, negative: e.target.checked }))}
              />
              Negative
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={settings.dither}
                onChange={(e) => setSettings((s) => ({ ...s, dither: e.target.checked }))}
              />
              Dither
            </label>
            {loading && <span className="ml-auto text-xs text-gray-500">...</span>}
          </div>
        </div>
      )}

      <pre
        className={`mt-3 text-green-400 leading-none overflow-x-auto ${
          settings.braille ? "text-[6px]" : "text-[8px]"
        }`}
      >
        {loading ? "Loading..." : ascii}
      </pre>

      {expanded && ascii && (
        <button
          onClick={() => navigator.clipboard.writeText(ascii)}
          className="mt-2 text-xs text-gray-500 hover:text-gray-300"
        >
          Copy ASCII
        </button>
      )}
    </div>
  )
}

export default function LogosTestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      <h1 className="text-2xl mb-2">ASCII Logo Tuner</h1>
      <p className="text-sm text-gray-500 mb-8">Click a logo to expand controls</p>

      <section className="mb-12">
        <h2 className="text-lg mb-4 text-gray-400">Main Logos</h2>
        <div className="grid grid-cols-2 gap-4">
          {mainLogos.map((logo) => (
            <LogoTuner key={logo.path} logo={logo} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg mb-4 text-gray-400">Partner Logos</h2>
        <div className="grid grid-cols-3 gap-4">
          {partnerLogos.map((logo) => (
            <LogoTuner key={logo.path} logo={logo} />
          ))}
        </div>
      </section>
    </div>
  )
}
