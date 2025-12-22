import { useEffect, useState } from "react";
import StatCard from "./components/StatCard";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Bootstrap 5.3+ theme switch
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const totalRevenue = 128_500_000;
  const totalUsers = 3421;
  const pendingTasks = 7;

  const transactions: Transaction[] = [
    { id: 1, date: "2025-12-10", description: "Payment from client A", amount: 25_000_000, type: "income" },
    { id: 2, date: "2025-12-09", description: "Server costs", amount: -3_200_000, type: "expense" },
    { id: 3, date: "2025-12-08", description: "New subscription", amount: 1_200_000, type: "income" },
    { id: 4, date: "2025-12-07", description: "Marketing campaign", amount: -5_000_000, type: "expense" },
  ];

  const formatCurrency = (value: number) => value.toLocaleString("fa-IR");

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filteredTransactions =
    filter === "all" ? transactions : transactions.filter((tx) => tx.type === filter);

  return (
    <div className={darkMode ? "app app-dark" : "app app-light"}>
      <div className="container my-4">
        {/* Header + Dark Toggle */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <h2 className="m-0">Mini Dashboard</h2>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              Dark Mode
            </label>
          </div>
        </div>

        {/* کارت‌های بالا */}
        <div className="row g-3">
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard
              title="درآمد کل (تومان)"
              value={formatCurrency(totalRevenue)}
              subtitle="در ۳۰ روز گذشته"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard
              title="کاربران فعال"
              value={totalUsers.toString()}
              subtitle="در هفته‌ی اخیر"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <StatCard
              title="کارهای باز"
              value={pendingTasks.toString()}
              subtitle="منتظر رسیدگی"
            />
          </div>
        </div>

        {/* کارت جدول تراکنش‌ها */}
        <div className="card mt-4">
          {/* هدر + فیلتر */}
          <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
            <span>تراکنش‌های اخیر</span>

            <div className="btn-group">
              <button
                className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter("all")}
              >
                همه
              </button>
              <button
                className={`btn btn-sm ${filter === "income" ? "btn-success" : "btn-outline-success"}`}
                onClick={() => setFilter("income")}
              >
                درآمد
              </button>
              <button
                className={`btn btn-sm ${filter === "expense" ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => setFilter("expense")}
              >
                هزینه
              </button>
            </div>
          </div>

          {/* جدول */}
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>تاریخ</th>
                    <th>توضیحات</th>
                    <th className="text-end">مبلغ (تومان)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-4 text-muted">
                        تراکنشی یافت نشد
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((tx) => (
                      <tr key={tx.id}>
                        <td>{tx.id}</td>
                        <td>{tx.date}</td>
                        <td>{tx.description}</td>
                        <td className={`text-end ${tx.type === "income" ? "text-success" : "text-danger"}`}>
                          {tx.type === "income" ? "+" : "-"}
                          {formatCurrency(Math.abs(tx.amount))}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* دکمه تماس */}
          <div className="card-footer d-flex justify-content-end">
            <a
              href="mailto:aliireezaa.ahmadisha@gmail.com?subject=تماس%20از%20داشبورد"
              className="btn btn-success"
            >
              ارتباط با من
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



