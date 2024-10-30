import { useRouter } from "next/router";
import { useEffect } from "react";
export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const storeAccessToken = async () => {
      const { token, redirect } = router.query;

      if (token) {
        localStorage.setItem("accessToken", token as string);

        const redirectPath = redirect ? (redirect as string) : "/home";
        const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${
          redirectPath.startsWith("/") ? redirectPath : `/${redirectPath}`
        }`;
        window.location.href = redirectUrl;
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
