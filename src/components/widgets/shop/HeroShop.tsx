import PadingXLayouts from "@/layout/PadingXLayouts";
import { Filter } from "./Filter";
import { CardGrid } from "./CardGrid";

export function HeroShop() {
  return (
        <PadingXLayouts>
            <div className='flex flex-col justify-center items-center pt-10 md:pt-15 pb-12 md:pb-25 w-full'>
                <div className='flex flex-col w-full items-center justify-center'>
                    <Filter />
                    <CardGrid />
                </div>
            </div>
        </PadingXLayouts>
    );
}