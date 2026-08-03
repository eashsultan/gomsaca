import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AgencyFunctions } from "@/components/sections/agency-functions"
import { PageHeader } from "@/components/ui/page-header"

export default function FunctionsPage() {
  return (
    <>
      <Header />
      <main className="pb-16 bg-white min-h-screen">
        <PageHeader
          label="Functions"
          title="Functions of the Agency"
          description="GOMSACA is mandated to coordinate and implement comprehensive strategies to combat HIV/AIDS in Gombe State."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <AgencyFunctions />
        </div>
      </main>
      <Footer />
    </>
  )
}
