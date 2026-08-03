import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AgencyPowers } from "@/components/sections/agency-powers"
import { PageHeader } from "@/components/ui/page-header"

export default function PowersPage() {
  return (
    <>
      <Header />
      <main className="pb-16 bg-gray-50/50 min-h-screen">
        <PageHeader
          label="Powers"
          title="Powers of GomSACA"
          description="The statutory powers granted to the agency to effectively manage, regulate, and coordinate the state's response to HIV/AIDS."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <AgencyPowers />
        </div>
      </main>
      <Footer />
    </>
  )
}
