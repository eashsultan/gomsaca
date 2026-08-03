import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LacaFramework } from "@/components/sections/laca-framework"
import { LacaComposition } from "@/components/sections/laca-composition"
import { LacaSecretariat } from "@/components/sections/laca-secretariat"

export default function LacaPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <LacaFramework />
        <LacaComposition />
        <LacaSecretariat />
      </main>
      <Footer />
    </>
  )
}
