/*
 * @Author: Setsuna
 * @Email: setsuna.xyz@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\[id]\edit\page.tsx
 * @Date: 2026-04-10 17:18:33
 * @LastEditTime: 2026-04-13 14:41:54
 * @LastEditors: Setsuna
 */
import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
