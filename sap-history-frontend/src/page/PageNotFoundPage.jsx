import { Result, Button } from 'antd';
import {useNavigate} from "react-router-dom";

const PageNotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => { navigate("/"); }}>Back Home</Button>}
    />
  );
};

export default PageNotFoundPage;