import Link from "next/link";
import { Button } from "@src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@src/components/ui/sheet";

export function Header() {
  return (
   <header data-editor-tag="TVnbyXdG6N"  className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <div data-editor-tag="IRE8k9WD7z"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
       <div data-editor-tag="xYyi8dVjOt"  className="flex gap-6 md:gap-10">
         <Link data-editor-tag="XwVwkTqIcW"  href="/" className="flex items-center space-x-2">
           <span data-editor-tag="O4FnconCCU"  className="inline-block font-bold text-xl">YourBrand</span>
          </Link>
         <nav data-editor-tag="YHhOC7QKkx"  className="hidden md:flex gap-6">
           <Link data-editor-tag="OhE8mijXjj" 
              href="/other"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
           <Link data-editor-tag="EVkcCa7evO" 
              href="#testimonials"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Testimonials
            </Link>
           <Link data-editor-tag="nlzUqeV2vh" 
              href="#pricing"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Pricing
            </Link>
           <Link data-editor-tag="VyJIInH6QG" 
              href="#contact"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
       <div data-editor-tag="YCmF0vwHa8"  className="hidden md:flex items-center space-x-4">
         <Button data-editor-tag="aAiyRh1WFz"  asChild variant="ghost">
           <Link data-editor-tag="w8y4Xii0cY"  href="#login">Login</Link>
          </Button>
         <Button data-editor-tag="5EFxZP3VIA"  asChild>
           <Link data-editor-tag="R9bVq5GUD8"  href="#signup">Sign Up</Link>
          </Button>
        </div>
       <Sheet data-editor-tag="RLql3rZ9oq" >
         <SheetTrigger data-editor-tag="xDu6o5qUtu"  asChild className="md:hidden">
           <Button data-editor-tag="pF66eEwKBy"  variant="outline" size="icon">
             <svg data-editor-tag="uygQGf4PxY" 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
               <line data-editor-tag="vzdftln4Zl"  x1="3" y1="6" x2="21" y2="6" />
               <line data-editor-tag="DZ4Coi35zB"  x1="3" y1="12" x2="21" y2="12" />
               <line data-editor-tag="H2k2qQlVmH"  x1="3" y1="18" x2="21" y2="18" />
              </svg>
             <span data-editor-tag="IlkgoaHwkc"  className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
         <SheetContent data-editor-tag="o4obqi1jSq"  side="right" className="w-[240px] sm:w-[300px]">
           <div data-editor-tag="b44TpjF49B"  className="flex flex-col gap-4 py-6">
             <Link data-editor-tag="eWGL4foHHf" 
                href="/other"
                className="text-sm font-medium hover:underline"
              >
                Features
              </Link>
             <Link data-editor-tag="yAoH3rNXtE" 
                href="#testimonials"
                className="text-sm font-medium hover:underline"
              >
                Testimonials
              </Link>
             <Link data-editor-tag="cgp6gfM7R4" 
                href="#pricing"
                className="text-sm font-medium hover:underline"
              >
                Pricing
              </Link>
             <Link data-editor-tag="gD0daMk87Z" 
                href="#contact"
                className="text-sm font-medium hover:underline"
              >
                Contact
              </Link>
             <div data-editor-tag="05mPNDeMoU"  className="flex flex-col gap-2 mt-4">
               <Button data-editor-tag="c7QRywHLPo"  asChild variant="ghost">
                 <Link data-editor-tag="q8rynzDsFj"  href="#login">Login</Link>
                </Button>
               <Button data-editor-tag="B9GOz5WATs"  asChild>
                 <Link data-editor-tag="aCeicPUlHi"  href="#signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
