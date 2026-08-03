import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LeadershipTeam } from "@/components/sections/leadership-team"
import { PageHeader } from "@/components/ui/page-header"

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main className="pb-16 bg-gray-50/50 min-h-screen">
        <PageHeader
          label="Leadership"
          title="Our Leadership"
          description="Meet the dedicated team of professionals leading the charge in Gombe State's fight against HIV/AIDS."
        />
        <div className="mt-12">
          <LeadershipTeam />
        </div>
      </main>
      <Footer />
    </>
  )
}
