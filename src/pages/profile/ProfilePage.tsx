import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLogOut } from "@/stores/authSlice";
import { LogOut, ShieldAlert, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.auth.status);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  if (status === "unauthorized" && !user) {
    navigate(ROUTES.login);
  }

  const handleLogout = () => {
    dispatch(setLogOut());
    navigate(ROUTES.login);
  };

  const handleDeleteAccount = () => {
    dispatch(setLogOut());
    navigate(ROUTES.login);
  };

  return (
    <SectionContainer>
      <PageHeader
        title="Profile"
        description="Manage your account identity and session."
      />

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
        <Card className="p-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <UserAvatar user={user} className="h-20 w-20 text-2xl" />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold text-slate-950">
                  {user?.displayName ?? "User"}
                </h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                {user?.email ?? "No email available"}
              </p>
            </div>
          </div>

          <dl className="mt-6 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">Name</dt>
              <dd className="mt-1 font-medium text-slate-950">
                {user?.displayName ?? "-"}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Email</dt>
              <dd className="mt-1 font-medium text-slate-950">
                {user?.email ?? "-"}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Provider</dt>
              <dd className="mt-1 font-medium text-slate-950">
                {user?.oauthProviders.map((v) => v.provider).join(", ") ?? "-"}
              </dd>
            </div>
          </dl>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="font-semibold text-slate-950">Session</h2>
            <p className="mt-1 text-sm text-slate-500">
              End the current mock OAuth session.
            </p>
            <Button
              type="button"
              variant="danger"
              className="mt-4 w-full"
              icon={<LogOut className="h-4 w-4" />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Card>

          <Card className="border-rose-200 bg-rose-50">
            <div className="flex gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" />
              <div>
                <h2 className="font-semibold text-rose-950">Red zone</h2>
                <p className="mt-1 text-sm text-rose-700">
                  Delete this mock account state from the current session.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="danger"
              className="mt-4 w-full"
              icon={<Trash2 className="h-4 w-4" />}
              onClick={handleDeleteAccount}
            >
              Delete account
            </Button>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
