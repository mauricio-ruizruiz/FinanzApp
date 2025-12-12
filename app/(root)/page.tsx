import AccountTotalBalance from '@/components/AccountsTotalBalance/AccountTotalBalance';
import { StatsGroup } from '@/components/Dashboard/StatsGroup';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import TotalBalanceCard from '@/components/TotalBalanceCard/TotalBalanceCard';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  const loggedIn = { firstName: 'Mauricio' };
  return (
    <>
      <section className="home">
        <div className="home-header">
          <HeaderBox
            type="welcome"
            title="Hola"
            user={loggedIn?.firstName || '---'}
            subtitle="Bienvenido  a la gestion de tus Finanzas"
          />
          <TotalBalanceCard
            totalCurrentBalance={12863.98}
            account="Main Wallet"
            accountColor="blue"
          />
          <StatsGroup />
          <ColorSchemeToggle />
          <AccountTotalBalance />
        </div>
      </section>
    </>
  );
}
