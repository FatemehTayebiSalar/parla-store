import { Button } from "../../../../components/ui/button";

function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      
      <h1 className="mb-6 text-3xl font-extrabold leading-snug text-slate-900">
        همه چیز برای
        <br />
        خانه‌ای تمیز و
        <br />
        زندگی بهتر
      </h1>

      <p className="mb-8 max-w-md text-lg leading-8 text-slate-500">
        محصولات اصل با بهترین کیفیت
        برای مراقبت از شما و خانواده تان.
      </p>

      <div className="flex gap-4">
        <Button>
            مشاهده محصولات
        </Button>

        <Button variant="secondary">
            دسته‌بندی‌ها
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;