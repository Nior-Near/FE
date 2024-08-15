import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function OAuthResponse() {
  const router = useRouter();

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const response = await axios.get(
          "https://niornear-server.store/api/v1/auth/token",
          {
            withCredentials: true,
          }
        );

        const accessToken = Cookies.get("accessToken");
        console.log("쿠키 토큰:", accessToken);
        if (accessToken) {
          const redirectPath = (router.query.redirect as string) || "/";
          router.push(redirectPath);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Failed to fetch access token", error);
        router.push("/login");
      }
    };

    checkAccessToken();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>로그인 중...</p>
    </div>
  );
}
