import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Card, CardContent } from "@src/components/ui/card";

export function Testimonials() {
  return (
   <section data-editor-tag="Iwve1PIWE5"  id="testimonials" className="py-24 bg-background">
     <div data-editor-tag="0A7VEldyDX"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div data-editor-tag="SzNRGkUXVO"  className="flex flex-col items-center justify-center space-y-4 text-center">
         <div data-editor-tag="FZ8GWbAA1x"  className="space-y-2">
           <div data-editor-tag="aMu39odESB"  className="inline-block rounded-lg bg-foreground/10 px-3 py-1 text-sm">
              Testimonials
            </div>
           <h2 data-editor-tag="RELbGZuuRh"  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Customer Success Stories
            </h2>
           <p data-editor-tag="EJEyFQFnPZ"  className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with our product.
            </p>
          </div>
        </div>
       <div data-editor-tag="ChPpQmv19G"  className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
         <Card data-editor-tag="9D0eeuU6PL"  className="border-0 bg-foreground/5">
           <CardContent data-editor-tag="Zi7MV2i8uk"  className="pt-6">
             <div data-editor-tag="vbhs8WaDYQ"  className="flex flex-col gap-4">
               <div data-editor-tag="lGSoLIFAbl"  className="flex items-center gap-4">
                 <Avatar data-editor-tag="gjHPxYnwBz" >
                   <AvatarImage data-editor-tag="b5b30BW31u"  alt="User" />
                   <AvatarFallback data-editor-tag="erQEFuHz59" >JD</AvatarFallback>
                  </Avatar>
                 <div data-editor-tag="HJBh2UiGD0" >
                   <h3 data-editor-tag="5BhLQ977gp"  className="font-semibold">John Doe</h3>
                   <p data-editor-tag="rYPUnqHKkA"  className="text-sm text-foreground/70">Lead Developer, TechCorp</p>
                  </div>
                </div>
               <p data-editor-tag="999SmeQ0Ti"  className="text-foreground/80">
                  &quot;This product has been a game-changer for our team. The quality is exceptional and the customer service is outstanding. Highly recommended!&quot;
                </p>
              </div>
            </CardContent>
          </Card>
         <Card data-editor-tag="nocw60T3s8"  className="border-0 bg-foreground/5">
           <CardContent data-editor-tag="OtWq0sPCAp"  className="pt-6">
             <div data-editor-tag="hNTfSag6Lh"  className="flex flex-col gap-4">
               <div data-editor-tag="M5M7MSD2IZ"  className="flex items-center gap-4">
                 <Avatar data-editor-tag="9h4hj3NM67" >
                   <AvatarImage data-editor-tag="pjaIBCBwVL"  alt="User" />
                   <AvatarFallback data-editor-tag="Rr6wToGHJl" >SJ</AvatarFallback>
                  </Avatar>
                 <div data-editor-tag="QOSA2aJ0W8" >
                   <h3 data-editor-tag="cjQD2Z7dOg"  className="font-semibold">Sarah Johnson</h3>
                   <p data-editor-tag="5itKK2eOGe"  className="text-sm text-foreground/70">Frontend Developer, StartupX</p>
                  </div>
                </div>
               <p data-editor-tag="VwCBsZRl1Z"  className="text-foreground/80">
                  &quot;We&apos;ve seen incredible results since implementing this solution. Our productivity has increased by 40% and our team couldn&apos;t be happier.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
         <Card data-editor-tag="x1QTuKC1Px"  className="border-0 bg-foreground/5">
           <CardContent data-editor-tag="4N9LmOzQTr"  className="pt-6">
             <div data-editor-tag="UBmNOo1F35"  className="flex flex-col gap-4">
               <div data-editor-tag="gpI9ESYpBV"  className="flex items-center gap-4">
                 <Avatar data-editor-tag="K4P7gXPNA1" >
                   <AvatarImage data-editor-tag="7u4uLqUjNN"  alt="User" />
                   <AvatarFallback data-editor-tag="fxOv38Wun5" >RM</AvatarFallback>
                  </Avatar>
                 <div data-editor-tag="m8e5x9JUBL" >
                   <h3 data-editor-tag="hyKXomUnG3"  className="font-semibold">Robert Miller</h3>
                   <p data-editor-tag="WQq7t5vpCE"  className="text-sm text-foreground/70">CTO, WebSolutions</p>
                  </div>
                </div>
               <p data-editor-tag="2ABHnAyOK3"  className="text-foreground/80">
                  &quot;The attention to detail is impressive. Every aspect of the product shows thoughtful design and quality craftsmanship. Worth every penny.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
