import Container from "../../../components/common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="bg-white py-12 min-h-[620px]">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="w-full lg:w-3/5 flex justify-end">
                <HeroImage />
            </div>
            <div className="w-full lg:w-2/5">
                <HeroContent />
            </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;