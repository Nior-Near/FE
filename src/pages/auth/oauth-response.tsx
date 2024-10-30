import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const storeAccessToken = async () => {
      const { token, redirect } = router.query;
      if (token) {
        localStorage.setItem("accessToken", token as string);

        const baseRedirectUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        
        const redirectPath = redirect ? `${baseRedirectUrl}${redirect}` : `${baseRedirectUrl}/home`;
        
        router.push(redirectPath);
      } else {
        console.error("토큰이 없습니다.");
        router.push("/login");
      }
    };

    if (router.isReady && router.query.token) {
      storeAccessToken();
    }
  }, [router.isReady, router.query.token]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>로그인 중...</p>
    </div>
  );
}
