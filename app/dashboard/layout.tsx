/*
 * @Author: Setsuna
 * @Email: setsuna.xyz@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Date: 2026-03-23 15:37:53
 * @LastEditTime: 2026-03-26 09:14:37
 * @LastEditors: Setsuna
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}