import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthGuard from '@/_helpers/AuthGuard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
          <Route path='/user/*' element={
            <AuthGuard>
              <AdminRouter />
            </AuthGuard>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
