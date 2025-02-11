import { ProfileForm } from "@/components/gg_form";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-[400px] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">GGI</h1>
        <ProfileForm />
      </Card>
    </div>
  );
}
