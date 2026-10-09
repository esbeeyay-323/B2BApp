import { BellOutlined, MoonOutlined, SearchOutlined } from "@ant-design/icons"
import { Avatar, Button, Input } from "antd"

const Header = () => {
    
    return (
        <>
        <header className="sticky inset-x-0 top-0 z-40 box-border flex w-full min-w-0 shrink-0 self-stretch items-center justify-between gap-3 border-b border-border bg-surface px-4 py-4 sm:gap-5 sm:px-6">
        <div className="dashboard-search min-w-0 flex-1 sm:w-[48%] sm:max-w-xl sm:flex-none">
          <Input
            aria-label="Search dashboard"
            placeholder="Search people, goals, cycles…"
            suffix={<SearchOutlined className="p-2 text-text-secondary" />}
            onPressEnter={(event) => console.log(event)}
          />
        </div>

        <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
          <Button
            aria-label="Switch theme"
            className="hidden h-10 w-10 items-center justify-center rounded-control p-2 sm:flex"
          >
            <MoonOutlined />
          </Button>
          <Button
            aria-label="View notifications"
            className="flex h-10 w-10 items-center justify-center rounded-control p-2"
          >
            <BellOutlined />
          </Button>

          <Button
            type="primary"
            className="hidden h-10 rounded-control px-4 lg:inline-flex"
          >
            + Start New Cycle
          </Button>

          <div className="flex flex-row-reverse items-center justify-center gap-2 sm:ml-3 lg:ml-6">
            <div className="hidden flex-col justify-center md:flex">
              <h1 className="text-[12px] font-medium text-text">Sam Agyars</h1>
              <h2 className="text-[11px] font-normal text-text-secondary">
                Super Admin
              </h2>
            </div>
            <Avatar className="bg-accent-purple text-xs font-semibold">SA</Avatar>
          </div>
        </div>
      </header>
        </>
    )
}

export default Header;
