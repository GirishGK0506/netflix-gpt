import { createBrowserRouter, RouterProvider as ReactProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
    const approuter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
        path : "/Browse",
        element : <Browse/>
        }
       
    ]);
  return (
    <ReactProvider router={approuter}/>
  )
};
export default Body;
