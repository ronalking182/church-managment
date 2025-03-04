import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsSidebar } from "@/components/settings-sidebar"
import { ProfileSettings } from "@/components/profile-settings"
import { NotificationSettings } from "@/components/notification-settings"
import { DisplaySettings } from "@/components/display-settings"
import { AccountSettings } from "@/components/account-settings"
import { ChoirSettings } from "@/components/choir-settings"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <SettingsSidebar />

          <div className="flex-1 max-w-full md:max-w-3xl">
            <div id="profile" className="mb-10 scroll-mt-20">
              <ProfileSettings />
            </div>

            <div id="notifications" className="mb-10 scroll-mt-20">
              <NotificationSettings />
            </div>

            <div id="display" className="mb-10 scroll-mt-20">
              <DisplaySettings />
            </div>

            <div id="account" className="mb-10 scroll-mt-20">
              <AccountSettings />
            </div>

            <div id="choir" className="scroll-mt-20">
              <ChoirSettings />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

