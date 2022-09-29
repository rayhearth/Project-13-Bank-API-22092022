import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter';

// import PublicRouter from '@/pages/PublicRouter'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
          <Route path='/login/*' element={<AdminRouter />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
