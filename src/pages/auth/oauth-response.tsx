import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const redirectPath = router.query.redirect || "/";

    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      router.push(redirectPath as string);
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>로그인 중...</p>
    </div>
  );
}
