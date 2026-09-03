import { AdminLogin } from "./AdminLogin";
import { AdminLayout } from "./AdminLayout";
import { AdminDashboard } from "./AdminDashboard";
import { AdminAppointments } from "./AdminAppointments";
import { AdminCustomers } from "./AdminCustomers";
import { AdminServices } from "./AdminServices";
import { AdminReviews } from "./AdminReviews";

export function AdminApp({ currentPage }) {
  if (currentPage === "/admin" || currentPage === "/admin/login") {
    return <AdminLogin />;
  }

  const pages = {
    "/admin/dashboard": AdminDashboard,
    "/admin/appointments": AdminAppointments,
    "/admin/customers": AdminCustomers,
    "/admin/services": AdminServices,
    "/admin/reviews": AdminReviews,
  };

  const PageComponent = pages[currentPage] ?? AdminDashboard;

  return (
    <AdminLayout currentPage={currentPage}>
      <PageComponent />
    </AdminLayout>
  );
}
