import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CustomersView from "./views/CustomersView";
import BillingView from "./views/BillingView";
import ReportsView from "./views/ReportsView";
import SettingsView from "./views/SettingsView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} />
          <Route path="/customers" element={<CustomersView />} />
          <Route path="/billing" element={<BillingView />} />
          <Route path="/reports" element={<ReportsView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
