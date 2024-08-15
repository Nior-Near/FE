import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = router.query.access_token;
    const redirectPath = router.query.redirect || "/";

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken as string);

      router.push(redirectPath as string); // 모달이 뜬 원래 경로로 리다이렉트
    }
  }, [router.query]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>로그인 중...</p>
    </div>
  );
}
