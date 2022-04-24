import {Route, Routes, useNavigate} from "react-router-dom";
import PageNotFoundPage from "./page/PageNotFoundPage";
import HomePage from "./page/HomePage";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import MenuItem from "antd/es/menu/MenuItem";

import { useLocation } from "react-router-dom";
import DataCollectPage from "./page/DataCollectPage";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const routes = [{
    key: '/',
    label: 'Home'
  }, {
    key: '/data/collect',
    label: 'Upload Data'
  }];

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
          {
            routes.map(el =>
              (<MenuItem key={el.key} onClick={() => { navigate(el.key) }}>
                {el.label}
              </MenuItem>))
          }
        </Menu>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data/collect" element={<DataCollectPage />} />
          <Route path="/*" element={<PageNotFoundPage />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App;
