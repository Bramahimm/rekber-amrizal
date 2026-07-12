import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TransactionGuide } from "@/components/sections/TransactionGuide";
import { Rules } from "@/components/sections/Rules";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/common/Reveal";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />

      <Reveal delay="short">
        <WhyChooseUs />
      </Reveal>

      <Reveal delay="short">
        <TransactionGuide />
      </Reveal>

      <Reveal delay="short">
        <Rules />
      </Reveal>

      <Reveal delay="medium">
        <ContactCTA />
      </Reveal>
    </div>
  );
}
