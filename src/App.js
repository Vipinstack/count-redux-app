import { Route, Routes } from 'react-router-dom';
import Add from './component/Add';
import Edit from './component/Edit';
import FetchApi from './component/FetchApi';
import Home from './component/Home';
import LifeCycle from './component/lifeCycle';
import NotFound from './component/NotFound';

function App() {
  return (
    <div>

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/lifecycle" exact element={<LifeCycle />} />
      <Route path="/fetchapi" exact element={<FetchApi />} />
      <Route path="add" exact element={<Add />} />
      <Route path="edit"  element={<Edit/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </div>
  );
}

export default App;
