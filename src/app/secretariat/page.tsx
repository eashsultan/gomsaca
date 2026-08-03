import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LacaSecretariat } from "@/components/sections/laca-secretariat"

export default function SecretariatPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <LacaSecretariat />
      </main>
      <Footer />
    </>
  )
}
