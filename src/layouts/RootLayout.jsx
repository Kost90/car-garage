import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from '../components/ui/Container';

function RootLayout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main className="py-6">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default RootLayout;
