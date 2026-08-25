import { BellOutlined, MoonOutlined, SearchOutlined } from "@ant-design/icons"
import { Avatar, Button, Input } from "antd"

const Header = () => {
    
    return (
        <>
        <header className="relative flex w-full shrink-0 items-center justify-between gap-5 bg-surface px-6 py-4 shadow-[0_8px_16px_-12px_rgba(30,27,46,0.35)]">
        <div className="w-1/2 max-w-100">
          <Input
            aria-label="Search dashboard"
            placeholder="Search"
            suffix={<SearchOutlined className="p-2 text-text-secondary" />}
            onPressEnter={(event) => console.log(event)}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            aria-label="Switch theme"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <MoonOutlined />
          </Button>
          <Button
            aria-label="View notifications"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <BellOutlined />
          </Button>

          <Button
            type="primary"
            className="h-10 px-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            + Start New Cycle
          </Button>

          <div className="ml-6 flex flex-row-reverse items-center justify-center gap-2">
            <div className="flex flex-col justify-center">
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
