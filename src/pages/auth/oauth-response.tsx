import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const storeAccessToken = async () => {
      const { token } = router.query;

      if (token) {
        localStorage.setItem("accessToken", token as string);
        console.log("AccessToken 저장:", token);

        const baseRedirectUrl =
          window.location.hostname === "localhost"
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
    <div className="flex justify-center items-center h-screen">
      <p>로그인 중...</p>
    </div>
  );
}
