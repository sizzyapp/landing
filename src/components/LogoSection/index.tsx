import React from 'react';
import * as L from 'layout-styled-components';
import { RevealChildren, RevealMode } from 'react-genie';
import { Heading } from '@chakra-ui/react';

import Section from '@landing/Section';
import { Animation } from 'react-genie-with-emotion';
import * as RS from 'styles/responsive-styles';
import * as A from 'styles/shared-components';
import logos from './logos-config';
//styles
import * as S from './styles';

const LogoSection: React.FC = () => {
  return (
    <Section id="logos">
      <A.Wrapper spacing={75}>
        <L.Vertical spacing={15} center>
          <Heading textAlign="center" color="headingColor" {...RS.HeadingSize}>
            Join the best
          </Heading>
          <Heading
            {...RS.SubHeadingSize}
            fontWeight="light"
            textAlign="center"
            color="headingColor"
          >
            Their employees are already working faster and saving a lot of time
          </Heading>
        </L.Vertical>
        <S.Logos>
          <RevealChildren
            delayBetween={100}
            mode={RevealMode.Clone}
            animation={Animation.FadeInUp}
          >
            {logos.map((logo) => (
              <S.Logo width={logo.width} src={logo.src} />
            ))}
          </RevealChildren>
        </S.Logos>
      </A.Wrapper>
    </Section>
  );
};

export default LogoSection;
