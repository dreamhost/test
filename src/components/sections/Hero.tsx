import Link from 'next/link'
import { Button } from "@src/components/ui/button";

export function Hero() {
  return (
   <section data-editor-tag="EDedF6mmNL"  className="py-24 md:py-32 bg-background">
     <div data-editor-tag="oAOPlZGi3b"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div data-editor-tag="MQrU0J2ilY"  className="flex flex-col items-center space-y-4 text-center">
         <div data-editor-tag="bixoD2qbGv"  className="space-y-2">
           <h1 data-editor-tag="XfsmHsX0S8"  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Your Amazing Landing Page
            </h1>
           <p data-editor-tag="L6AMSk5bwE"  className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
              The perfect place to showcase your product, service, or brand. Engage your visitors with beautiful design and compelling content that converts.
            </p>
          </div>
         <div data-editor-tag="daaFtCwRMM"  className="flex flex-col gap-2 min-[400px]:flex-row">
           <Button data-editor-tag="3wHdxL6PW0"  asChild size="lg">
             <Link data-editor-tag="B5rsCi2PbR"  href="#get-started">Get Started</Link>
            </Button>
           <Button data-editor-tag="QOMp4gGhw2"  asChild variant="outline" size="lg">
             <Link data-editor-tag="R8DbjoNdna"  href="#learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
