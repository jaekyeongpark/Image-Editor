import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import ImageEditorPage from '@/pages/ImageEditorPage';
import ErrorPage from '@/pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageEditorPage />,
    errorElement: <ErrorPage />, // 404 에러 페이지
  },
]);

export default router;
