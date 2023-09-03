import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="p-6">
      <Link href={"/signIn"}>
        <Button>Landing Page - Sign In</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
