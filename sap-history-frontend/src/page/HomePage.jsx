import {Button, Divider, Result} from "antd";
import Title from "antd/es/typography/Title";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Result
      title="This Website is currently work in progress."
      extra={
        <>
          <Divider />
          <div style={{marginBottom: '20px', fontSize: '20px', padding: '0 50px'}} className={'ant-result-subtitle'}>
            This website is meant to collect all the data of the A-Z challenge and work as a mix of match-history / statistics site
          </div>
          <div style={{marginBottom: '20px', fontSize: '20px', padding: '0 50px'}} className={'ant-result-subtitle'}>
            If you want to contribute to this site, feel free to help us gather data
          </div>
          <Button type="primary" key="console" onClick={() => {navigate('/data/collect')}}>
            Contribute
          </Button>
        </>
      }
    />
  );
}

export default HomePage;