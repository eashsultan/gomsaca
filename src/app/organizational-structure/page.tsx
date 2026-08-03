import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrgChart } from "@/components/sections/org-chart"
import { PageHeader } from "@/components/ui/page-header"

export default function OrganizationalStructurePage() {
  return (
    <>
      <Header />
      <main className="pb-16 bg-gray-50/50 min-h-screen">
        <PageHeader
          label="Structure"
          title="Organizational Structure"
          description="The Gombe State Agency for the Control of AIDS is structured to ensure effective coordination and implementation of HIV/AIDS interventions."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <OrgChart />
        </div>
      </main>
      <Footer />
    </>
  )
}
