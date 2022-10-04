import React from 'react';
import * as E from './FooterElements';

export const Footer = () => {
  return (
    <E.Box>
      <E.Container>
        <E.Row>
          <E.Column>
            <E.Heading>Footer</E.Heading>
          </E.Column>
          <E.Column>
            <E.Heading>Sample Links</E.Heading>
            <E.FooterLink href="#">Link</E.FooterLink>
            <E.FooterLink href="#">Link</E.FooterLink>
            <E.FooterLink href="#">Link</E.FooterLink>
          </E.Column>
        </E.Row>
      </E.Container>
    </E.Box>
  );
};
