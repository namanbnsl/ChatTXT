import { Overview } from "@/components/dashboard/chart/overview";
import DashboardHeader from "@/components/dashboard/nav/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div>
      <DashboardHeader />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 p-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
