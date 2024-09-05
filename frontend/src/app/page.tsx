import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 " >
      <div className="" >Hello SIH</div>
      <Link href={`/userlogin`} >
      <Button  className="" >Login</Button>
      </Link>
    </div>
  );
}
