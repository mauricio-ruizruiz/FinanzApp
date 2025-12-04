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
          <TotalBalanceCard totalCurrentBalance={12863.98} accounts={[]} />
          <ColorSchemeToggle />
        </div>
      </section>
    </>
  );
}
