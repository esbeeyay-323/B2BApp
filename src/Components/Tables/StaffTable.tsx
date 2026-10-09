import { Button, ConfigProvider, Select, Table } from "antd";
import type { TableProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import  { useMemo, useState } from "react";

export type StaffRole = "Employee" | "Manager" | "HR Admin" | "Super Admin";
export type StaffStatus = "Active" | "Invited" | "Inactive";
type TeamFilter = "all" | "active"| "invited" | "inactive";
export interface StaffMember {
    id: number;
    name: string;
    jobTitle: string;
    initials: string;
    avatarClassName: string;
    department: string;
    accessRole: StaffRole;
    manager: string;
    status: StaffStatus;
    lastActive: string;
    email: string;
    location: string;
    joinedDate: string;
}

interface StaffTableProps {
    handleStaffSelect : (member:StaffMember)=> void;
}

const staffMembers: StaffMember[] = [
    {
        id: 1,
        name: "Adjoa Frimpong",
        jobTitle: "Product Designer",
        initials: "AF",
        avatarClassName: "bg-[#6657EB]",
        department: "Product",
        accessRole: "Manager",
        manager: "David Mensah",
        status: "Active",
        lastActive: "Today",
        email: "adjoa.frimpong@afrianom.com",
        location: "Accra Office",
        joinedDate: "Feb 2024",
    },
    {
        id: 2,
        name: "Kwabena Sarpong",
        jobTitle: "Financial Analyst",
        initials: "KS",
        avatarClassName: "bg-[#3B82F6]",
        department: "Finance & Accounting",
        accessRole: "Employee",
        manager: "Efua Danso",
        status: "Active",
        lastActive: "Yesterday",
        email: "kwabena.sarpong@afrianom.com",
        location: "Accra Office",
        joinedDate: "Aug 2024",
    },
    {
        id: 3,
        name: "Akosua Boateng",
        jobTitle: "HR Business Partner",
        initials: "AB",
        avatarClassName: "bg-[#16B5A6]",
        department: "Human Resources",
        accessRole: "HR Admin",
        manager: "—",
        status: "Active",
        lastActive: "2 days ago",
        email: "akosua.boateng@afrianom.com",
        location: "Accra Office",
        joinedDate: "Nov 2022",
    },
    {
        id: 4,
        name: "Yaa Asantewaa",
        jobTitle: "Sales Executive",
        initials: "YA",
        avatarClassName: "bg-[#F59E0B]",
        department: "Sales & Marketing",
        accessRole: "Employee",
        manager: "Kojo Mensah",
        status: "Invited",
        lastActive: "Not yet logged in",
        email: "yaa.asantewaa@afrianom.com",
        location: "Kumasi Office",
        joinedDate: "Invited Aug 2026",
    },
    {
        id: 5,
        name: "Kwesi Boateng",
        jobTitle: "Support Specialist",
        initials: "KB",
        avatarClassName: "bg-[#EF4444]",
        department: "Customer Success",
        accessRole: "Employee",
        manager: "Ama Serwaa",
        status: "Inactive",
        lastActive: "47 days ago",
        email: "kwesi.boateng@afrianom.com",
        location: "Accra Office",
        joinedDate: "Jun 2023",
    },
    {
        id: 6,
        name: "Ama Serwaa",
        jobTitle: "Ops Manager",
        initials: "AS",
        avatarClassName: "bg-[#7265E6]",
        department: "Operations",
        accessRole: "Manager",
        manager: "David Mensah",
        status: "Active",
        lastActive: "3 days ago",
        email: "ama.serwaa@afrianom.com",
        location: "Accra Office",
        joinedDate: "Mar 2023",
    },
    {
        id: 7,
        name: "David Mensah",
        jobTitle: "Head of IT Administration",
        initials: "DM",
        avatarClassName: "bg-[#0EA5A4]",
        department: "IT Administration",
        accessRole: "Super Admin",
        manager: "—",
        status: "Active",
        lastActive: "Today",
        email: "david.mensah@afrianom.com",
        location: "Accra Office",
        joinedDate: "Jan 2021",
    },
];

const roleClassNames: Record<StaffRole, string> = {
    Employee: "bg-[#F1F0F7] text-[#69657D]",
    Manager: "bg-blue-50 text-blue-600",
    "HR Admin": "bg-teal-50 text-teal-700",
    "Super Admin": "bg-violet-50 text-violet-600",
};

const statusClassNames: Record<StaffStatus, string> = {
    Active: "text-emerald-600 before:bg-emerald-500",
    Invited: "text-amber-600 before:bg-amber-500",
    Inactive: "text-text-secondary before:bg-[#D3D0E2]",
};

const columns: TableProps<StaffMember>["columns"] = [
    {
        title: "Employee",
        key: "employee",
        dataIndex: "name",
        fixed: "left",
        width: 235,
        rowScope: "row",
        render: (_, member) => (
            <div className="flex min-w-0 items-center gap-3">
                <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${member.avatarClassName}`}
                >
                    {member.initials}
                </span>
                <div className="min-w-0">
                    <p className="m-0 truncate text-[13px] font-bold text-text">{member.name}</p>
                    <p className="m-0 mt-0.5 truncate text-[11px] text-text-secondary">{member.jobTitle}</p>
                </div>
            </div>
        ),
    },
    {
        title: "Department",
        dataIndex: "department",
        key: "department",
        width: 185,
    },
    {
        title: "Access role",
        dataIndex: "accessRole",
        key: "accessRole",
        width: 135,
        render: (role: StaffRole) => (
            <span className={`inline-flex rounded-md px-2.5 py-1 text-[11px] font-semibold ${roleClassNames[role]}`}>
                {role}
            </span>
        ),
    },
    {
        title: "Manager",
        dataIndex: "manager",
        key: "manager",
        width: 140,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 110,
        render: (status: StaffStatus) => (
            <span
                className={`inline-flex items-center gap-2 text-[12px] font-bold before:size-1.5 before:rounded-full ${statusClassNames[status]}`}
            >
                {status}
            </span>
        ),
    },
    {
        title: "Last active",
        dataIndex: "lastActive",
        key: "lastActive",
        width: 145,
    },
    {
        title: "Action",
        key: "action",
        align: "right",
        width: 76,
        onCell: () => ({
            onClick: (event) => event.stopPropagation(),
        }),
        render: (_, member) =>
            member.status === "Invited" ? (
                <Button className="px-0 text-[12px] font-semibold" type="link">
                    Resend
                </Button>
            ) : (
                <Button
                    aria-label={`More actions for ${member.name}`}
                    icon={<EllipsisOutlined />}
                    shape="circle"
                    type="text"
                />
            ),
            
    },
];

const StaffTable = ({handleStaffSelect}:StaffTableProps) => {

      
    const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedDepartment, setSelectedDepartment] =  useState("all")

 const counts = useMemo(
        () => ({
            all: staffMembers.length,
            Active: staffMembers.filter((member) => member.status === "Active").length,
            Invited: staffMembers.filter((member) => member.status === "Invited").length,
            Inactive: staffMembers.filter((member) => member.status === "Inactive").length,
        }),
        [],
    );

    const deparments = useMemo(()=>[
        ...new Set(staffMembers.map(member => member.department))
    ]
    .sort((first, second)=>first.localeCompare(second)),[])


    const visibleMembers = useMemo(() => {
        const filteredMembers = staffMembers.filter((member) => {
            const matchStatus =
            activeFilter == "all"||
             (activeFilter === "active" && member.status === "Active") ||
              (activeFilter === "invited" && member.status === "Invited") ||
              (activeFilter === "inactive" && member.status === "Inactive");
         
              const matchesDepartment = selectedDepartment ==="all" || member.department === selectedDepartment;

            return matchStatus && matchesDepartment;
        });

        return [...filteredMembers].sort((first, second) => {
            const comparison = first.name.localeCompare(second.name);
            return sortOrder === "asc" ? comparison : -comparison;
        });
    }, [activeFilter, selectedDepartment, sortOrder]);

    const filters: { id: TeamFilter; label: string; count: number }[] = [
        { id: "all", label: "All", count: counts.all },
        { id: "active", label: "Active", count: counts.Active },
        { id: "inactive", label: "Inactive", count: counts.Inactive },
        { id: "invited", label: "Invited", count: counts.Invited },
    ];

 

return (
    <section className="staff-table-card flex h-[820px] flex-col overflow-hidden rounded-panel border border-border bg-white shadow-panel sm:h-[760px] xl:h-[720px]">
        <header className="shrink-0 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
            <h2 className="m-0 text-[18px] font-extrabold text-text">All employees</h2>
            <p className="m-0 mt-1 text-[13px] text-text-secondary">
                View roles, access levels, and account status at a glance.
            </p>
        </header>


        <div className="mx-4 shrink-0 overflow-x-auto rounded-card bg-[#F1F0F8] p-1 sm:mx-6">
                <div className="flex min-w-max gap-1" role="tablist" aria-label="Filter team members">
                    {filters.map((filter) => (
                        <button
                            aria-selected={activeFilter === filter.id}
                            className={`rounded-control px-3 py-2 text-[12px] font-bold transition sm:px-4 sm:text-[13px] ${
                                activeFilter === filter.id
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-[#625D7C] hover:bg-white/60"
                            }`}
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            role="tab"
                            type="button"
                        >
                            {filter.label} · {filter.count}
                        </button>
                    ))}
                </div>
            </div>


        <ConfigProvider
      theme={{
          components: {
              Select: {
                  optionActiveBg: "#F1F0F8",
                  optionSelectedBg: "#EFEAFF",
                  optionSelectedColor: "#6C5DF4",
                  optionSelectedFontWeight: 700,
                  optionFontSize: 13,
                  optionHeight: 40,
                  optionPadding: "8px 12px",   
              },
          },
      }}
  >

            <div className="my-4 flex w-full shrink-0 flex-col gap-3 px-4 sm:flex-row sm:gap-6 sm:px-6">
          {/* <label className="flex items-center gap-2 self-start rounded-control border border-border px-3 text-[13px] font-medium text-[#4D486F] xl:self-auto">
                   <span className="sr-only">Sort team members</span> 
                    Sort:
                    <select
                        aria-label="Sort team members"
                        className="min-h-10 cursor-pointer bg-transparent pr-1 outline-none"
                        onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
                        value={sortOrder}
                    > 
                        <option value="asc">Name (A–Z)</option>
                        <option value="desc">Name (Z–A)</option>
                    </select>
                </label> */}
                         <Select
                            className="w-full sm:w-52"
                            onChange={setSortOrder}
                            options={[

                                 { label: "Name (A–Z)", value: "asc" },
                                 { label: "Name (Z–A)", value: "desc" },
                            ]}
                            value={sortOrder}
                        />

          <label className="flex w-full items-center gap-2 self-start rounded-control text-[13px] font-medium text-[#4D486F] sm:w-auto xl:self-auto">
                    {/* <span className="sr-only">Sort team members</span>
                    Department :
                    <select
                        aria-label="Sort team members"
                        className="min-h-10 cursor-pointer bg-transparent pr-1 outline-none"
                        onChange={(event) => setSelectedDepartment(event.target.value)}
                        value={selectedDepartment}
                    > 
                        {deparments.map((deparment)=>(
                        <div className="bg-red-400">
                            <option key ={deparment} value={deparment}>
                                {deparment}
                            </option>
                    </div>
                        ))}
                    </select> */}
                         <Select
                            className="w-full sm:w-52"
                            onChange={setSelectedDepartment}
                            options={[
                                { label: "All departments", value: "all" },
                                ...deparments.map((department) => ({
                                    label: department,
                                    value: department,
                                })),
                            ]}
                            value={selectedDepartment}
                                            />
                        </label>
                    </div>
                    </ConfigProvider>


                    <div className="staff-table-reserved min-h-0 flex-1 overflow-hidden">
                    <Table<StaffMember>
                        className="staff-directory-table h-full"
                        columns={columns}
                        dataSource={visibleMembers}
                        pagination={false}
                        rowKey="id"
                        scroll={{ x: 1026 }}
                        size="middle"
                        onRow={(member)=>({
                            onClick: ()=> {
                                handleStaffSelect(member)
                            }
                        })}
                    />
                    </div>

        <footer className="shrink-0 border-t border-border px-5 py-4 text-[12px] text-text-secondary sm:px-6">
            Showing {visibleMembers.length} of 142 employees
        </footer>
    </section>
)
};

export default StaffTable;
