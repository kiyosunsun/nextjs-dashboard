/*
 * @Author: Setsuna
 * @Email: setsuna.xyz@qq.com
 * @FilePath: \nextjs-dashboard\auth.config.ts
 * @Date: 2026-05-12 09:22:17
 * @LastEditTime: 2026-05-12 09:23:31
 * @LastEditors: Setsuna
 */
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;