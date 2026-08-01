import heroProducts from "./assets/hero-products.png";

function HeroImage() {
  return (

    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        h-[460px]
        rounded-[32px]
        bg-[#F5F7FB]
        p-10
      "
    >

        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
            rounded-[32px]
            bg-[#F7F9FC]
          "
        >
          <img
            src={heroProducts}
            alt="Products"
            className="w-4/5 h-auto object-contain select-none pointer-events-none"
          />
        </div>

    </div>

  
  );
}

export default HeroImage;