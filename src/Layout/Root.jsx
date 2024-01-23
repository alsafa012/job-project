import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
     return (
          <div>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Root;