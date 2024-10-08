"use client";

import AdminPageContent from "../_components/authentication/admin/admin-page-content";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import WaitlistWelcomePage from "../_components/authentication/admin/waitlist-welcome-page";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  
  if (session?.user.role === "waitlist") {
    return <WaitlistWelcomePage />;
  }

  return (
    <div>
      <AdminPageContent />
    </div>
  );
}
