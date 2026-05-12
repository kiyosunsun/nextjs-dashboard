/*
 * @Author: Setsuna
 * @Email: setsuna.xyz@qq.com
 * @FilePath: \nextjs-dashboard\app\login\page.tsx
 * @Date: 2026-05-11 14:41:28
 * @LastEditTime: 2026-05-11 14:41:29
 * @LastEditors: Setsuna
 */
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}