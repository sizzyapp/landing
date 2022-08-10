import { Container, Title } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import Benefit from "sections/BenefitsSection/Benefit";
import { Vertical } from "styles/layout-components";

const Benefits: React.FC = () => {
  return (
    <Container size="xl" id="benefits">
      <Vertical center spacing="xl">
        <BadassTitle>
          The <Highlight>missing</Highlight> tool that web developers were
          waiting for
        </BadassTitle>

        <Benefit slug="save-testing-time" />
        <Benefit slug="investigate-visual-bugs" />
        <Benefit slug="pretty-presentations" />
        <Benefit slug="context-switching" />
        <Benefit slug="modern-workflow" />
      </Vertical>
    </Container>
  );
};

export default Benefits;
