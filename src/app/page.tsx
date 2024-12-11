import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant delivery",
    Icon: ArrowDownToLine,
    description: "Get you assets delivered to your email in seconds and download them right away."
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Every assets on our platform is verified by our team to ensure highest quality standards. Not happy? We offer a 30-day refund guarantee."
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the nantural environment."
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
            Your marketplace for high quality {' '}
            <span className="text-yellow-600">
              digital assets
            </span>
            .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digital E-commerce. Every assest on our platform is verified
            by our team to ensure our highest quality standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
            <Button variant='ghost'> Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t bordedr-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:items-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
