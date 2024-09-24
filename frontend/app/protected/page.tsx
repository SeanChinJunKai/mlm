import { CodeBlock } from "@/components/tutorial/code-block";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const {data, error} = await supabase.from('referral_code').select('referral_code').eq('user_id', user.id);

  const referralLink = `localhost:3000/sign-up?referral=${data?.[0]?.referral_code}`;

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your unique referral link</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          <CodeBlock code={referralLink} />
        </pre>
      </div>

    </div>
  );
}
