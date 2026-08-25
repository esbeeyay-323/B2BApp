interface SecurityItem {
  label: string;
  value: string;
  statusClassName: string;
}

const securityItems: SecurityItem[] = [
  {
    label: "Two-Factor Auth",
    value: "Enabled",
    statusClassName: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "Password Age",
    value: "45 days",
    statusClassName: "bg-amber-50 text-amber-700",
  },
  {
    label: "Active Sessions",
    value: "2 devices",
    statusClassName: "bg-violet-100 text-violet-700",
  },
];

const AccountSecurity = () => {
    return (
        <>
             <div className="mb-4">
          <h2 className="text-[16px] font-bold text-text">
            Account Security
          </h2>

          <p className="text-[12px] text-text-secondary">
            Snapshot of your account protection
          </p>
        </div>

        <ul className="space-y-4">
          {securityItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-[13px] font-semibold text-text">
                {item.label}
              </span>

              <span
                className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold ${item.statusClassName}`}
              >
                {item.value}
              </span>
            </li>
          ))}
        </ul>
        
        </>
    )
}


export default AccountSecurity;