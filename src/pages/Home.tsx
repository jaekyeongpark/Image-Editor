import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';

import Layout from '@/components/layout/Layout';

export default function HomePage() {
  const navigate = useNavigate();

  const onClickEdit = () => {
    navigate(ROUTE_PATH.EDIT);
  };

  return (
    <div>
      <Layout>
      <h2>HOME</h2>

      <button
        onClick={onClickEdit}
      >Edit</button>
      </Layout>
    </div>
  );
}
