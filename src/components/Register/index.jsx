import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import { AntdTabs, Container } from "./style";

export const Register = () => {
  return (
    <Container>
      <AntdTabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Sign In`,
            children: <SignIn />,
          },
          {
            key: "2",
            label: `Sign Up`,
            children: <SignUp />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
