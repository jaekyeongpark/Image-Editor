import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';

export default function EditPage() {
  return (
    <div>
      <input type="file" name="image" id="image" />
      <canvas id="canvas"></canvas>
    </div>
  );
}