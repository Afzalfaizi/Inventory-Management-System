import Card from '../../components/Card';
import Overview from '@/components/Overview';

export default function DashboardPage() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <Overview />
      </Card>
      <Card>
        <h3 className="text-lg font-semibold text-primary">Inventory Stats</h3>
        <p className="text-gray-700">Overview of your inventory items.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold text-primary">Recent Activity</h3>
        <p className="text-gray-700">Track recent updates and actions.</p>
      </Card>
    </div>
  );
}
