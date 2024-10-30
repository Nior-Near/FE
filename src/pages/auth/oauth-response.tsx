import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const storeAccessToken = async () => {
      const { token } = router.query;

      if (token) {
        localStorage.setItem("accessToken", token as string);

        const baseRedirectUrl =
        process.env.NEXT_PUBLIC_ENV === "development"
          ? "http://localhost:3000"
          : "https://www.niornear.store";


        const redirectPath = (router.query.redirect as string) || "/home";
        router.push(`${baseRedirectUrl}${redirectPath}`);
      } else {
        console.error("토큰이 없습니다.");
        router.push("/login");
      }
    };

    if (router.isReady) {
      storeAccessToken();
    }
  }, [router.isReady, router.query]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-[#638404] border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}
